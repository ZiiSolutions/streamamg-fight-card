import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCardHeaderComponent } from './fight-card-header.component';

describe('FightCardHeaderComponent', () => {
  let component: FightCardHeaderComponent;
  let fixture: ComponentFixture<FightCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
