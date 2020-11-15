import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetPageComponent } from './planet-page/planet-page.component';

const routes: Routes = [
  { path: 'planets', component: MainPageComponent },
  { path: 'planets/:id', component: PlanetPageComponent },
  { path: '**',   redirectTo: '/planets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
