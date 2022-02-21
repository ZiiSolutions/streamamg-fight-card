import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { EventItem } from '../fight-card.service';

@Component({
  selector: 'app-fight-card-body',
  templateUrl: './fight-card-body.component.html',
  styleUrls: ['./fight-card-body.component.scss'],
})
export class FightCardBodyComponent implements OnInit {
  @Input() items: EventItem[];
  @Input() selected: EventItem | null;
  @Input() hovered?: EventItem | null;

  @Output() itemSelected = new EventEmitter<EventItem>();
  @Output() itemHovered = new EventEmitter<EventItem | undefined>();

  constructor() {}
  ngOnInit() {}

  fighterName(item: EventItem, fighterNumber: number = 1) {
    return fighterNumber === 1
      ? item.fighterOne.firstName
      : item.fighterTwo.firstName;
  }

  fighterSurname(item: EventItem, fighterNumber: number = 1) {
    return fighterNumber === 1
      ? item.fighterOne.surname
      : item.fighterTwo.surname;
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
