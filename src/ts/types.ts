export interface Client {
  dni: string;
  name: string;
  surnames: string;
  averageSalary: number;
  maximumSalary: number;
  domicilledPayroll: boolean;
  phoneNumber: number;
  homePhoneNumber: number | "";
}

export type Clients = Client[];

export type ClientsWithPhoneNumberDni = Dni[];

export type Dni = string;
