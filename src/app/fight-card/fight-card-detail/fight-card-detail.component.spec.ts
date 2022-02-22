import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FightCardDetailComponent } from './fight-card-detail.component';

describe('FightCardBodyComponent', () => {
  let component: FightCardDetailComponent;
  let fixture: ComponentFixture<FightCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
