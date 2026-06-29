export interface PriceData {
  date: string;
  price: number;
}

export interface Benefit {
  iconName: string;
  title: string;
  description: string;
}

export interface Fact {
  number: string;
  label: string;
  context: string;
}

export interface TimelineEvent {
  period: string;
  event: string;
}
