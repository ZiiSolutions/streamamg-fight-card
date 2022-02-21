import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { EventItem } from '../fight-card.service';

@Component({
  selector: 'app-fight-card-image',
  templateUrl: './fight-card-image.component.html',
  styleUrls: ['./fight-card-image.component.scss'],
})
export class FightCardImageComponent implements OnChanges, AfterViewInit {
  @Input() items: EventItem[];
  @Input() item: EventItem | null;
  @Input() hovered?: EventItem | null;

  readonly selected$ = new Subject<EventItem | null>();

  ngAfterViewInit() {
    this.emitSelected(this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { hovered } = changes;
    // When non selected items hovered the image of hovered item needs
    // to be displayed.
    hovered && hovered.currentValue
      ? this.emitSelected(hovered.currentValue)
      : this.emitSelected(this.item);
  }

  private emitSelected(value: EventItem | null) {
    value && this.selected$.next(value);
  }
}
