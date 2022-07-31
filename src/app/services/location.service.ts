import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor() { }

  public async reverseGeolocation(lon: number, lat: number) {
    const response : any = await fetch(`https://api.maptiler.com/geocoding/${lon},${lat}.json?key=${environment.maptilerAPIKey}`,
    { method: 'GET' });

    if(response.features == []){
      return 'Error! Problems with your MapTiler Query'
    }

    return await response.json();
  }
}
