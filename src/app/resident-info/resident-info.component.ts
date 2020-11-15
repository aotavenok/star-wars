import { Component, Input } from '@angular/core';
import { Resident } from '../interfaces/resident.interface';

@Component({
  selector: 'app-resident-info',
  templateUrl: './resident-info.component.html',
  styleUrls: ['./resident-info.component.scss']
})
export class ResidentInfoComponent {
  @Input() resident: Resident;
}
