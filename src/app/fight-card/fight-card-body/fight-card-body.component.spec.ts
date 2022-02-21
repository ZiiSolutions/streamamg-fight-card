import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCardBodyComponent } from './fight-card-body.component';

describe('FightCardBodyComponent', () => {
  let component: FightCardBodyComponent;
  let fixture: ComponentFixture<FightCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightCardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
