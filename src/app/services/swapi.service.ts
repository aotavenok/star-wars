import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetListResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private _http: HttpClient
  ) { }

  getPlanets(page: number): Observable<PlanetListResponse> {
    const params = {
      page: page.toString()
    };
    return this._http.get<PlanetListResponse>(`${environment.swapi}planets/`, { params });
  }

  getPlanetDetails(id: number): Observable<Planet> {
    return this._http.get<Planet>(`${environment.swapi}planets/${id}/`);
  }

  getByUrl<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }
}
