import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path: '', redirectTo:'catalog' },

  { path: 'catalog', component: CatalogComponent },
  { path: 'detail/:shoeId', component: DetailComponent }
];
@NgModule({
  imports: [
    CommonModule, SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [CatalogComponent, DetailComponent]
})
export class ShoesModule { }
