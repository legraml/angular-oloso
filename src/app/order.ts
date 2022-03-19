export interface Order {
  id: string;
  from: string;
  to: string;
  type: string;
  firstname: string;
  lastname: string;
  dob: string;
  date: string;
  delayed?: boolean;
}
