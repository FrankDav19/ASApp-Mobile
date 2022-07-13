import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'asapp',
    component: TabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('../../pages/map/map.module').then(m => m.mapPageModule)
      },
      {
        path: 'places',
        loadChildren: () => import('../../pages/places/places.module').then(m => m.placesPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../../pages/menu/menu.module').then(m => m.menuPageModule)
      },
      {
        path: 'station/:id',
        loadChildren: () => import('../../pages/station/station.module').then(m => m.StationPageModule)
      },
      {
        path: '',
        redirectTo: '/asapp/places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/asapp/places',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
