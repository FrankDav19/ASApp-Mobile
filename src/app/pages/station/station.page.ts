import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit {
  places = 'asapp/places';

  constructor() { }

  ngOnInit() {
  }

}
