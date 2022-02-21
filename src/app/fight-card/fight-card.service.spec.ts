import { TestBed } from '@angular/core/testing';

import { FightCardService } from './fight-card.service';

describe('FightCardService', () => {
  let service: FightCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
