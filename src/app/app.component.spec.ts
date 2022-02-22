import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Mock } from 'ts-mocks';
import { AppComponent } from './app.component';
import { FightCardComponent } from './fight-card/fight-card.component';
import { FightCardService } from './fight-card/fight-card.service';
import { mockFightDetail } from './util/test-util';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, FightCardComponent],
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'streamamg-fight-card'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('streamamg-fight-card');
  });
});
