import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  getElementsByCss,
  getTextContent,
  mockEventItems,
} from '../../util/test-util';
import { FightCardDetailComponent } from './fight-card-detail.component';

describe('FightCardBodyComponent', () => {
  let component: FightCardDetailComponent;
  let fixture: ComponentFixture<FightCardDetailComponent>;

  const items = mockEventItems();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightCardDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardDetailComponent);
    component = fixture.componentInstance;
    component.items = items;
    component.selected = items[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 event detail descriptions in total', () => {
    expect(getElementsByCss(fixture, '.fight-detail-wrapper').length).toEqual(
      3
    );
  });

  it('should display the expected names for each event item in uppercase', () => {
    const fighterOneNames = getElementsByCss(fixture, '.name-one');
    const fighterTwoNames = getElementsByCss(fixture, '.name-two');

    let index = 0;
    items.forEach((item) => {
      const firstName = getTextContent(fighterOneNames[index]);
      const secondName = getTextContent(fighterTwoNames[index]);
      const expectedFirstName = `${item.fighterOne.firstName} ${item.fighterOne.surname}`;
      const expectedSecondName = `${item.fighterTwo.firstName} ${item.fighterTwo.surname}`;

      expect(firstName).toEqual(expectedFirstName.toUpperCase());
      expect(secondName).toEqual(expectedSecondName.toUpperCase());
      index++;
    });
  });

  it('should displayr expected description for each item', () => {
    const description = getElementsByCss(fixture, '.description');

    let index = 0;
    items.forEach((item) => {
      expect(getTextContent(description[index])).toEqual(
        items[index].description.toUpperCase()
      );
    });
  });
});
