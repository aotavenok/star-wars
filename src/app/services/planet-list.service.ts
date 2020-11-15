import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Planet, PlanetListResponse } from '../interfaces/planet.interface';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {
  private _page = 0;
  private _planetList$ = new BehaviorSubject<Planet[]>([]);
  private _isMorePlanets$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _swapiService: SwapiService,
    private _snackBar: MatSnackBar
  ) {
    this.getPlanets();
  }

  getPlanets(): void {
    this._swapiService.getPlanets(++this._page)
      .pipe(
        catchError(() => {
          this._snackBar.open('Error occured', 'Close', {
            duration: 5000
          });
          this._page -= 1;
          return of({
            results: [],
            count: 0
          });
        })
      )
      .subscribe(({ results, count }: PlanetListResponse) => {
        const newPlanetList = this._planetList$.value.concat(results);
        const isMorePlanets =  newPlanetList.length !== count;

        this._planetList$.next(newPlanetList);
        this._isMorePlanets$.next(isMorePlanets);
      });
  }

  get planetList$(): Observable<Planet[]> {
    return this._planetList$.asObservable();
  }

  get isMorePlanets$(): Observable<boolean> {
    return this._isMorePlanets$.asObservable();
  }
}
