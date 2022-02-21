import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight-card-header',
  templateUrl: './fight-card-header.component.html',
  styleUrls: ['./fight-card-header.component.scss'],
})
export class FightCardHeaderComponent implements OnInit {
  @Input() timestamp: string;
  @Input() location: string;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  get dateTime() {
    const date = new Date(this.timestamp);
    const format = date.getMinutes()
      ? 'EEEE, MMMM dd y - h:mma'
      : 'EEEE, MMMM dd y - ha';
    return this.datePipe.transform(this.timestamp, format);
  }
}
