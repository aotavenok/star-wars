import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanetListResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private _http: HttpClient
  ) { }

  getPlanets(): Observable<PlanetListResponse> {
    return this._http.get<PlanetListResponse>(`${environment.swapi}planets/`);
  }
}
