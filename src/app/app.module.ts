import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { PlanetCounterComponent } from './planet-counter/planet-counter.component';
import { PlanetPageComponent } from './planet-page/planet-page.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { ResidentInfoComponent } from './resident-info/resident-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PlanetListComponent,
    PlanetCardComponent,
    PlanetCounterComponent,
    PlanetPageComponent,
    PlanetInfoComponent,
    ResidentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
