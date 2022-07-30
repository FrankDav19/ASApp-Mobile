import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fav-element',
  templateUrl: './fav-element.component.html',
  styleUrls: ['./fav-element.component.scss'],
})

export class FavElementComponent implements OnInit{

  @Input() stationsInput?: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
