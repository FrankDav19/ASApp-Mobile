import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuPage } from './menu.page';

import { Tab3PageRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: menuPage }]),
    Tab3PageRoutingModule,
  ],
  declarations: [menuPage]
})
export class menuPageModule {}
