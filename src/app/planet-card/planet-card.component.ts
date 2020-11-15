import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetCardComponent {
  @Input() name: string;
  @Input() climate: string;
  @Input() population: number;
}
