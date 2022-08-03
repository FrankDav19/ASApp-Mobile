import { Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class mapPage implements AfterViewInit {
  private map;

  private mapInit() {
    this.map = L.map('map').locate({ setView: true, maxZoom: 25 });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    L.control.scale().addTo(this.map);

  }


  constructor() {}

  ngAfterViewInit(): void {
    var radius = 500;

    this.mapInit();

    if (this.map != undefined) {
      this.getStations().then(
        res => {
          res.stations.forEach(station => {
            L.circle(station.location.coordinates, radius).addTo(this.map);
            // .bindPopup(component.location.nativeElement,{closeButton: false})
          });
        });
    };
  }


  private async getStations() {
    const response = await fetch(`${environment.apiURL}/stations/all`, { method: 'GET' });

    if (response.ok == false) {
      console.log(`Error! status: ${response.status}`);
    }
    return await response.json();
  }
}
