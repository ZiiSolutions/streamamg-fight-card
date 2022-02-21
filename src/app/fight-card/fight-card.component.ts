import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { EventItem, FightCardService, FightDetail } from './fight-card.service';

@Component({
  selector: 'app-fight-card',
  templateUrl: './fight-card.component.html',
  styleUrls: ['./fight-card.component.scss'],
})
export class FightCardComponent implements OnDestroy {
  readonly event$: Observable<FightDetail>;
  readonly selectedItem$ = new ReplaySubject<EventItem>(1);
  readonly hoveredItem$ = new ReplaySubject<EventItem | undefined>(1);

  private readonly destroy$ = new Subject<boolean>();

  constructor(private fightCardService: FightCardService) {
    this.event$ = this.fightCardService.getFight('uri-1');
    this.selectedItem$ = this.fightCardService.firstItem$;
  }

  selectedItem(item: EventItem) {
    this.selectedItem$.next(item);
  }

  hoveredItem(item?: EventItem) {
    this.hoveredItem$.next(item);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
