import { TestBed } from '@angular/core/testing';

import { PlanetListService } from './planet-list.service';

describe('PlanetListService', () => {
  let service: PlanetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
