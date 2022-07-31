import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mapPage } from './map.page';

import { Tab1PageRoutingModule } from './map-routing.module';
import { MapPopupComponent } from 'src/app/components/map-popup/map-popup.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [mapPage],
  entryComponents: [MapPopupComponent]
})
export class mapPageModule {}
