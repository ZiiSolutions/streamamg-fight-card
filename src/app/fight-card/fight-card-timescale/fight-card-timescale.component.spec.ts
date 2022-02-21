import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCardTimescaleComponent } from './fight-card-timescale.component';

describe('FightCardTimescaleComponent', () => {
  let component: FightCardTimescaleComponent;
  let fixture: ComponentFixture<FightCardTimescaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightCardTimescaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardTimescaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
