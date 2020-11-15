import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../interfaces/planet.interface';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetInfoComponent {
  @Input() planet: Planet;
}
