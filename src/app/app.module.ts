import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ApiService } from './services/api.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherHistoryComponent } from './components/weather-history/weather-history.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'country/:country', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:country/:city', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SummaryComponent,
    MapComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    WeatherHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    MomentModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
