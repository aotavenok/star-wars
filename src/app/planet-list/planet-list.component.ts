import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlanetListService } from '../services/planet-list.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListComponent {
  constructor(public facade: PlanetListService) { }

  getRouterLink(url: string): string {
    return url.match(/\/planets\/[0-9]{1,}/)[0];
  }
}
