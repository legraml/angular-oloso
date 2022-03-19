export interface Order {
  id: number;
  from: string;
  to: string;
  type: string;
  forename: string;
  name: string;
  dob: string;
  date: string;
  delayed?: boolean;
}
