import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { placesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: placesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
