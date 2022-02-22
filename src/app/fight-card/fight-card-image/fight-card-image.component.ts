import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventItem } from '../fight-card.service';

@Component({
  selector: 'app-fight-card-image',
  templateUrl: './fight-card-image.component.html',
  styleUrls: ['./fight-card-image.component.scss'],
})
export class FightCardImageComponent implements OnChanges {
  @Input() items: EventItem[];
  @Input() item: EventItem | null;
  @Input() hovered?: EventItem | null;

  @Output() itemSelected = new EventEmitter<EventItem>();

  selected: EventItem | null;

  ngOnChanges(changes: SimpleChanges): void {
    const { hovered } = changes;
    // When non selected items hovered the image of hovered item needs
    // to be displayed.
    const newItem =
      hovered && hovered.currentValue ? hovered.currentValue : this.item;

    if (this.selected !== newItem) {
      this.selected = newItem;
    }
  }

  onSwipeRight() {
    if (!this.selected) return;

    const index = this.items.indexOf(this.selected);
    index < this.items.length - 1 && this.emitSelected(this.items[index + 1]);
  }

  onSwipeLeft() {
    if (!this.selected) return;

    const index = this.items.indexOf(this.selected);
    index < this.items.length + 1 && this.emitSelected(this.items[index - 1]);
  }

  private emitSelected(value: EventItem | null) {
    if (!value) return;
    this.selected = value;
    this.itemSelected.next(value);
  }
}
