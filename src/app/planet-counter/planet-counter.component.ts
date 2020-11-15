import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PlanetListService } from '../services/planet-list.service';

@Component({
  selector: 'app-planet-counter',
  templateUrl: './planet-counter.component.html',
  styleUrls: ['./planet-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetCounterComponent {
  constructor(public facade: PlanetListService) {}
}
