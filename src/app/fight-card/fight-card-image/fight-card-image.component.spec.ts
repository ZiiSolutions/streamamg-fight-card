import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCardImageComponent } from './fight-card-image.component';

describe('FightCardImageComponent', () => {
  let component: FightCardImageComponent;
  let fixture: ComponentFixture<FightCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightCardImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
