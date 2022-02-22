import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FightCardComponent } from './fight-card.component';
import { FightCardService } from './fight-card.service';
import { Mock } from 'ts-mocks';
import { getElementByCss, mockFightDetail } from '../util/test-util';
import { of } from 'rxjs';

describe('FightCardComponent', () => {
  let component: FightCardComponent;
  let fixture: ComponentFixture<FightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: FightCardService,
          useFactory: () =>
            new Mock<FightCardService>({
              getFight: (id: string) => of(mockFightDetail()),
            }).Object,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-fight-card-header', () => {
    expect(getElementByCss(fixture, 'app-fight-card-header')).toBeTruthy();
  });

  it('should display app-fight-card-timescale', () => {
    expect(getElementByCss(fixture, 'app-fight-card-timescale')).toBeTruthy();
  });

  it('should display app-fight-card-detail', () => {
    expect(getElementByCss(fixture, 'app-fight-card-detail')).toBeTruthy();
  });

  it('should display app-fight-card-image', () => {
    expect(getElementByCss(fixture, 'app-fight-card-image')).toBeTruthy();
  });
});
