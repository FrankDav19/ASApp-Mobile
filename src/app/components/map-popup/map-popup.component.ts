import { Component, Input, OnInit } from '@angular/core';
import { IStation } from '../../interfaces/iStation';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss'],
})
export class MapPopupComponent implements OnInit {

  @Input() stationInfo : IStation;

  constructor() { }

  ngOnInit() {}

}
