export interface State {
  company: Company;
  speaker: Speaker;
  social: Social
  sponsorImageUrl: string;
  rating: Rating;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  toggleDescriptionLong: boolean;
  website: string;
  phone: string;
  email: string;
  address: string;
  symbol: string;
  marketCap: string;
  fiscalYearEnd: string;
  sector: string;
  location: string;
  imageUrl: string;
}

export interface Speaker {
  name: string;
  imgUrl: string;
}

export interface Social {
  facebook: string;
  linkedIn: string;
  twitter: string;
  website: string;
}

export type Rating =
  | "N/A"
  | "1"
  | "2"
  | "3"
  | "4"
