import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { IStation } from '../../interfaces/iStation';
import { environment } from 'src/environments/environment';
import { LocationService } from 'src/app/services/location.service';


@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit, OnDestroy {
  places = '/asapp/places';

  Station: IStation;

  constructor(private socket: Socket,
    private route: ActivatedRoute,
    private locationService: LocationService) {


    const activeStationURL = this.route.snapshot.paramMap.get('id');

    this.getStation(activeStationURL).then(stationQuery => {
      this.Station = stationQuery.station;

      locationService.reverseGeolocation(this.Station.location.coordinates[1], this.Station.location.coordinates[0]).then(locationData => {
        this.Station.location.name = locationData.features[1].place_name;
      });
    });


    this.socket.on('newReading', data => {
      if (data.stationID == this.Station._id) {
        this.Station.readings[0] = data.updatedReading;
      }
    });
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    this.socket.disconnect();
  }

  private async getStation(stationID: string) {
    const response = await fetch(`${environment.apiURL}/stations/${stationID}`, { method: 'GET' });

    if (response.ok == false) {
      console.log(`Error! status: ${response.status}`);
    }
    return await response.json();
  }

}
