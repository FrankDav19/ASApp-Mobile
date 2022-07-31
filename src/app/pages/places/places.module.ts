import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { placesPage } from './places.page';
import { Tab2PageRoutingModule } from './places-routing.module';
import { FavElementComponent } from 'src/app/components/fav-element/fav-element.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [placesPage, FavElementComponent]
})
export class placesPageModule {}
