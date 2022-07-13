import { Component, OnInit, Input   } from '@angular/core';
import { IWeatherData } from '../../interfaces/weatherData';

@Component({
  selector: 'app-fav-element',
  templateUrl: './fav-element.component.html',
  styleUrls: ['./fav-element.component.scss'],
})
export class FavElementComponent implements OnInit {

  @Input() weatherData? : IWeatherData[];

  constructor() {
  }

  ngOnInit() {

  }

  public pm25Mapping(level : number){
    const sensorMax = 500.4;
    const indexMax= 500;

    var index = (level*indexMax)/sensorMax;


    return index;
  }


}
