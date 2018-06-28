import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { RouterModule, Routes, Router } from '@angular/router';
const APP_ROUTES : Routes = [
  { path:'', redirectTo:'shoes', pathMatch:'full'},
  { path:'shoes', loadChildren:'./shoes/shoes.module#ShoesModule'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
