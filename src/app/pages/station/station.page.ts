import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { IStation } from '../../interfaces/iStation';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit {
  places = '/asapp/places';

  Station: IStation;


  constructor(private socket: Socket,
    private route: ActivatedRoute) {
    const activeStationURL = this.route.snapshot.paramMap.get('id');

    this.getStation(activeStationURL).then(stationQuery => {
      this.Station = stationQuery.station;
    });

    this.socket.on('newReading', data => {
      if(data.stationID == this.Station._id){
        this.Station.readings[0] = data.updatedReading;
      }
    });
  }

  ngOnInit() {
  }

  private async getStation(stationID: string) {
    const response = await fetch(`${environment.apiURL}/stations/${stationID}`, { method: 'GET' });

    if (response.ok == false) {
      console.log(`Error! status: ${response.status}`);
    }
    return await response.json();
  }

}
