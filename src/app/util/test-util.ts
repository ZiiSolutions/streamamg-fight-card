import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventItem, FightDetail } from '../fight-card/fight-card.service';

/*
 *Helper functions for common unit testing operations.
 */

export const getElementByCss = (fixture: ComponentFixture<any>, css: string) =>
  getElementByCssDebugElement(fixture.debugElement, css);

export const getElementsByCss = (fixture: ComponentFixture<any>, css: string) =>
  getElementsByCssDebugElement(fixture.debugElement, css);

export const getElementByCssDebugElement = (
  debugElement: DebugElement,
  css: string
) => debugElement.query(By.css(css));

export const getElementsByCssDebugElement = (
  debugElement: DebugElement,
  css: string
) => debugElement.queryAll(By.css(css));

export const getTextContent = (debugElement: DebugElement) =>
  debugElement.nativeElement.textContent!.trim();

export const mockFightDetail = (): FightDetail => {
  return {
    id: 'uri-1',
    eventLocation: 'Watford, UK',
    eventTimestamp: '2019-12-07T22:00:24Z',
    eventDetail: mockEventItems(),
  };
};

export const mockEventItems = (): EventItem[] => {
  return [
    {
      timestamp: '2019-12-07T19:00:24Z',
      description: '8 x 3 mins heavyweight contest',
      imageSource: 'image-src-1.com',
      altText: 'Alt text 1',
      fighterOne: { firstName: 'Magna', surname: 'Maji' },
      fighterTwo: { firstName: 'Tom', surname: 'Lit' },
    },
    {
      timestamp: '2019-12-07T20:07:24Z',
      description: '12 x 3 mins WBC International Heavyweight Title',
      imageSource: 'image-src-2.com',
      altText: 'Alt text 2',
      fighterOne: { firstName: 'Filip', surname: 'Hrg' },
      fighterTwo: { firstName: 'Eric', surname: 'Mo' },
    },
    {
      timestamp: '2019-12-07T21:07:24Z',
      description: '10 x 3 mins Heavyweight',
      imageSource: 'image-src-3.com',
      altText: 'Alt text 3',
      fighterOne: { firstName: 'Alex', surname: 'Pov' },
      fighterTwo: { firstName: 'Michael', surname: 'Hunter' },
    },
  ];
};
