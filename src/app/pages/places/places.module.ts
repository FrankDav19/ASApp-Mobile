import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { placesPage } from './places.page';
import { Tab2PageRoutingModule } from './places-routing.module';
import { FavElementComponent } from 'src/app/components/fav-element/fav-element.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [placesPage, FavElementComponent]
})
export class placesPageModule {}
