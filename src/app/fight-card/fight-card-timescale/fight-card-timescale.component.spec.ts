import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  getElementByCss,
  getElementsByCss,
  getTextContent,
  mockEventItems,
} from '../../util/test-util';

import { FightCardTimescaleComponent } from './fight-card-timescale.component';

describe('FightCardTimescaleComponent', () => {
  let component: FightCardTimescaleComponent;
  let fixture: ComponentFixture<FightCardTimescaleComponent>;

  const items = mockEventItems();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardTimescaleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardTimescaleComponent);
    component = fixture.componentInstance;
    component.items = items;
    component.selected = items[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ETA abbriviation on the first item', () => {
    expect(getTextContent(getElementByCss(fixture, 'li > abbr'))).toEqual(
      '(ETA)'
    );
  });

  it('should display 3 timestamps', () => {
    expect(getElementsByCss(fixture, 'li > time').length).toEqual(3);
  });

  it('should only display 1 timestamp as  selected', () => {
    expect(getElementsByCss(fixture, 'li > time.active').length).toEqual(1);
  });

  it('should display correct time format for each timestamps', () => {
    const elements = getElementsByCss(fixture, 'li > time').map(
      (debugElement) => getTextContent(debugElement)
    );
    expect(elements[0]).toEqual('19:00');
    expect(elements[1]).toEqual('20:07');
    expect(elements[2]).toEqual('21:07');
  });

  it('should display 3 timescale dots', () => {
    expect(
      getElementsByCss(fixture, '.time-scale-container > span').length
    ).toEqual(3);
  });

  it('should display a timescale line', () => {
    expect(getElementsByCss(fixture, '.line').length).toEqual(1);
  });
});
