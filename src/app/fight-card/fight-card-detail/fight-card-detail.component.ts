import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventItem } from '../fight-card.service';

@Component({
  selector: 'app-fight-card-detail',
  templateUrl: './fight-card-detail.component.html',
  styleUrls: ['./fight-card-detail.component.scss'],
})
export class FightCardDetailComponent {
  @Input() items: EventItem[];
  @Input() selected: EventItem | null;
  @Input() hovered?: EventItem | null;

  @Output() itemSelected = new EventEmitter<EventItem>();
  @Output() itemHovered = new EventEmitter<EventItem | undefined>();

  fighterName(item: EventItem, fighterNumber: number = 1) {
    return fighterNumber === 1
      ? item.fighterOne.firstName.toUpperCase()
      : item.fighterTwo.firstName.toUpperCase();
  }

  fighterSurname(item: EventItem, fighterNumber: number = 1) {
    return fighterNumber === 1
      ? item.fighterOne.surname.toUpperCase()
      : item.fighterTwo.surname.toUpperCase();
  }

  isSelected(item: EventItem) {
    return this.selected === item || this.hovered === item;
  }

  eventClick(item: EventItem) {
    this.itemSelected.next(item);
  }

  mouseHover(item?: EventItem) {
    this.itemHovered.next(item);
  }
}
