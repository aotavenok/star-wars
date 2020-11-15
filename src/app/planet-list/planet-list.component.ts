import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Planet } from '../interfaces/planet.interface';
import { SwapiService } from '../services/swapi.service';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListComponent implements OnInit {
  planetList$: Observable<Planet[]>;

  constructor(
    private _swapiService: SwapiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.planetList$ = this._swapiService.getPlanets()
      .pipe(
        catchError(() => {
          this._snackBar.open('Error occured', 'Close', {
            duration: 5000
          });
          return of({ results: []});
        }),
        map(({ results }) => results)
      );
  }

}
