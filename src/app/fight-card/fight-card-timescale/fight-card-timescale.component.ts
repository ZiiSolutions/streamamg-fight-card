import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventItem } from '../fight-card.service';

@Component({
  selector: 'app-fight-card-timescale',
  templateUrl: './fight-card-timescale.component.html',
  styleUrls: ['./fight-card-timescale.component.scss'],
})
export class FightCardTimescaleComponent {
  @Input() items: EventItem[];
  @Input() selected: EventItem | null;
  @Input() hovered?: EventItem | null;

  @Output() itemSelected = new EventEmitter<EventItem>();
  @Output() itemHovered = new EventEmitter<EventItem | undefined>();

  eventClick(item: EventItem) {
    this.itemSelected.next(item);
  }

  isSelected(item: EventItem) {
    return this.selected === item || this.hovered === item;
  }

  isLastItem(item: EventItem) {
    const i = this.items.length - 1;
    return item === this.items[i];
  }

  mouseHover(item?: EventItem) {
    this.itemHovered.next(item);
  }
}
