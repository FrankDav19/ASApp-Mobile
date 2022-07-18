import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IStation } from '../../interfaces/iStation';

@Component({
  selector: 'app-fav-element',
  templateUrl: './fav-element.component.html',
  styleUrls: ['./fav-element.component.scss'],
})
export class FavElementComponent implements OnInit, OnChanges {

  @Input() stations?: any[];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.stations != undefined) {
      console.log(this.stations);
    }
  }

}
