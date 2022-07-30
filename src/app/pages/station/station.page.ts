import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit {

  constructor() { }

  ngOnInit() {

    // if (data.operationType == 'update') {
    //   var stationIndex = this.Stations.findIndex(station => station._id == data.documentKey._id);
    //   var updateId = Object.keys(data.updateDescription.updatedFields)[1]

    //   console.log(data);

    //   this.Stations[stationIndex].readings.push(data.updateDescription.updatedFields[updateId]);
    // }
  }

}
