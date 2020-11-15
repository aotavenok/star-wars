import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, forkJoin, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';
import { Resident } from '../interfaces/resident.interface';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetPageComponent implements OnInit {
  planet$: Observable<Planet>;
  residents$: Observable<Resident[]>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _swapiService: SwapiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.planet$ = this._activatedRoute.params
      .pipe(
        filter(params => !!params.id),
        map(({ id }) => id),
        switchMap(id => this._swapiService.getPlanetDetails(id)),
        tap(planet => this.setResidents(planet.residents)),
        catchError(() => {
          this._snackBar.open('Error occured', 'Close', {
            duration: 5000
          });
          return EMPTY;
        })
      );
  }

  setResidents(urls: string[]): void {
    if (urls.length) {
      const requests = urls.map(url => this._swapiService.getByUrl<Resident>(url));
      this.residents$ = forkJoin(requests)
        .pipe(
          catchError(() => {
            this._snackBar.open('Error occured', 'Close', {
              duration: 5000
            });
            return of([]);
          })
        );
    }
  }
}
