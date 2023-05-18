export interface Review {
  id: number;
  title: string;
  info: string;
}

export interface AppProviderValue {
  reviews: Review[];
}
