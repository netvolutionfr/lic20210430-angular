import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LivresComponent} from './livres/livres.component';
import {LivredetailComponent} from './livredetail/livredetail.component';

export const appRouteList: Routes = [
  {
    path: 'livres',
    component: LivresComponent
  },
  {
    path: 'livre/:id',
    component: LivredetailComponent
  },
  {
    path: '**',
    redirectTo: 'livres'
  }
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouteList)
  ]
})
export class AppRoutingModule { }
