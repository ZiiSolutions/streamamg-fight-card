import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  getElementByCss,
  getElementsByCss,
  getTextContent,
} from '../../util/test-util';

import { FightCardHeaderComponent } from './fight-card-header.component';

describe('FightCardHeaderComponent', () => {
  let component: FightCardHeaderComponent;
  let fixture: ComponentFixture<FightCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardHeaderComponent],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardHeaderComponent);
    component = fixture.componentInstance;
    component.timestamp = '2019-12-07T19:00:24Z';
    component.location = 'Watford, United Kingdom';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display expected heading', () => {
    expect(getTextContent(getElementByCss(fixture, '.display'))).toEqual(
      'FIGHT CARD'
    );
  });

  it('should display expected date', () => {
    const elements = getElementsByCss(fixture, '.subtitle > span');
    expect(getTextContent(elements[0])).toEqual(
      'SATURDAY, DECEMBER 07 2019 - 7PM'
    );
  });

  it('should display expected location', () => {
    const elements = getElementsByCss(fixture, '.subtitle > span');
    expect(getTextContent(elements[1])).toEqual('WATFORD, UNITED KINGDOM');
  });
});
