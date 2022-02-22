import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  getElementByCss,
  getElementsByCss,
  getTextContent,
  mockEventItems,
} from '../../util/test-util';

import { FightCardImageComponent } from './fight-card-image.component';

describe('FightCardImageComponent', () => {
  let component: FightCardImageComponent;
  let fixture: ComponentFixture<FightCardImageComponent>;

  const items = mockEventItems();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardImageComponent);
    component = fixture.componentInstance;
    component.items = items;
    component.item = items[0];
    component.selected = items[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preload all images', () => {
    expect(getElementsByCss(fixture, '.image').length).toEqual(3);
  });

  it('should display description', () => {
    expect(getTextContent(getElementByCss(fixture, '.description'))).toEqual(
      '8 X 3 MINS HEAVYWEIGHT CONTEST'
    );
  });

  it('should display only display the selected image to user', () => {
    expect(getElementsByCss(fixture, '.show').length).toEqual(1);
  });
});
