import { Component, OnDestroy, OnInit } from '@angular/core';
import { TabsPage } from '../../shared/tabs/tabs.page';
import { Socket } from 'ngx-socket-io';
import { IStation } from '../../interfaces/iStation';
import { environment } from 'src/environments/environment';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'places.page.html',
  styleUrls: ['places.page.scss']
})

export class placesPage implements OnInit, OnDestroy {
  rootPage: any = TabsPage;

  Stations: IStation[];

  constructor(private socket: Socket,
    private locationService: LocationService) {
    this.getStations().then(stationsQuery => {
      this.Stations = stationsQuery.stations;

      this.Stations.forEach(station => {
        locationService.reverseGeolocation(station.location.coordinates[1], station.location.coordinates[0]).then(locationData => {
          station.location.name = locationData.features[1].place_name;
        });
      })
    });


    this.socket.on('stationInsert', newStation => {
      this.Stations.push(newStation);
    });


    this.socket.on('newReading', data => {
      var stIndex = this.Stations.findIndex((station) => station._id === data.stationID);

      if (stIndex != -1) {
        this.Stations[stIndex].readings[0] = data.updatedReading;
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.socket.disconnect();
  }

  private async getStations() {
    const response = await fetch(`${environment.apiURL}/stations/all`, { method: 'GET' });

    if (response.ok == false) {
      console.log(`Error! status: ${response.status}`);
    }
    return await response.json();
  }
}
