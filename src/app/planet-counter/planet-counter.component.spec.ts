import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetCounterComponent } from './planet-counter.component';

describe('PlanetCounterComponent', () => {
  let component: PlanetCounterComponent;
  let fixture: ComponentFixture<PlanetCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
