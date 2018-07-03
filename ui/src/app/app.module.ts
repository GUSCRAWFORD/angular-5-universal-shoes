import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { HttpModule } from '@angular/http';

import { isPlatformBrowser } from '@angular/common';

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
    BrowserModule.withServerTransition({ appId: 'seo-poc' }),
    RouterModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
