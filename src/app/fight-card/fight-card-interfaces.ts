export interface FighterDetails {
  firstName: string;
  surname: string;
}

export interface EventItem {
  timestamp: string;
  description: string;
  imageSource: string;
  altText: string;
  fighterOne: FighterDetails;
  fighterTwo: FighterDetails;
  rematch?: number;
}

export interface FightDetail {
  eventLocation: string;
  eventTimestamp: string;
  eventDetail: EventItem[];
}

export interface CardItem {
  item: EventItem;
  isSelected?: boolean;
}
