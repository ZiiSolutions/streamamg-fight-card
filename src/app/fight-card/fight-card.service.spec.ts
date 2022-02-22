import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';
import { AppConfigService } from '../app-config.service';
import { mockFightDetail } from '../util/test-util';

import { FightCardService } from './fight-card.service';

describe('FightCardService', () => {
  let service: FightCardService;
  let httpMock: HttpTestingController;

  const mockBaseUrl = 'https://some-path';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AppConfigService,
          useFactory: () =>
            new Mock<AppConfigService>({
              apiBaseUrl: mockBaseUrl,
            }).Object,
        },
      ],
    });

    service = TestBed.inject(FightCardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    //Ensures that no request is outstanding
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get event JSON provided uri', () => {
    // TODO: refactor to use Jasmine marbles instead of subscribe
    service.getFight('uri-123').subscribe((res) => {
      expect(res).toEqual(mockFightDetail());
    });

    const request = httpMock.expectOne(`${mockBaseUrl}/fight/uri-123`);
    expect(request.request.method).toBe('GET');
    request.flush(mockFightDetail());
  });
});
