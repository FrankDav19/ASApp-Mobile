import { Component } from '@angular/core';
import { IWeatherData } from 'src/app/interfaces/weatherData';
import { TabsPage } from '../../shared/tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'places.page.html',
  styleUrls: ['places.page.scss']
})
export class placesPage {
  rootPage:any = TabsPage;

  weatherData: IWeatherData[] = [
    {
      area: 'Escobedo',
      location: 'UTE',
      stationId: 'station1',
      hic: 22,
      humidity: 35,
      pm1: 120,
      pm10: 220,
      pm25: 15,
      rainMM: 25,
      temp: 23,
      wDirection: 'W',
      wSpeed: 25
    },
    {
      area: 'Monterrey',
      location: 'Monterrey Centro',
      stationId: 'station2',
      hic: 23,
      humidity: 42,
      pm1: 124,
      pm10: 432,
      pm25: 330,
      rainMM: 12,
      temp: 66,
      wDirection: 'W',
      wSpeed: 25
    },
    {
      area: 'Santiago',
      location: 'Presa La Boca',
      stationId: 'station3',
      hic: 12,
      humidity: 32,
      pm1: 243,
      pm10: 123,
      pm25: 345,
      rainMM: 126,
      temp: 12,
      wDirection: 'W',
      wSpeed: 25
    }
  ];


  constructor() {
  }

}
