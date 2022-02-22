import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';
import { AppConfigService } from '../app-config.service';

export interface FighterDetails {
  firstName: string;
  surname: string;
}

export interface EventItem {
  timestamp: string;
  description: string;
  imageSource: string;
  altText: string;
  fighterOne: FighterDetails;
  fighterTwo: FighterDetails;
  rematch?: number;
}

export interface FightDetail {
  id: string;
  eventLocation: string;
  eventTimestamp: string;
  eventDetail: EventItem[];
}

@Injectable({
  providedIn: 'root',
})
export class FightCardService {
  private _firstItem$ = new ReplaySubject<EventItem>(1);

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfigService
  ) {}

  getFight(id: string) {
    const url = `${this.appConfig.apiBaseUrl}/fight/${id}`;
    return this.httpClient.get<FightDetail>(url).pipe(
      tap((event) => {
        const { eventDetail } = event;
        // Initially have the first item selected so that all components display it accordingly.
        // Many ways to do this but this is quite straight forward.
        if (event && eventDetail.length) {
          this._firstItem$.next(eventDetail[0]);
        }
      })
    );
  }

  get firstItem$() {
    return this._firstItem$;
  }
}
