export type Client = {
  dni: string;
  nameSurnames: string;
  averageSalary: number;
  maximumSalary: number;
  domicilledPayroll: boolean;
  phoneNumber: number;
  homePhoneNumber: number | undefined;
};

export type Clients = Client[];

export type ClientsWithPhoneNumberDni = Dni[];

export type Dni = string;

export type ClientIsRichEnough = {
  dni: string;
  nameSurnames: string;
  averageSalary: number;
};

export type ClientsAreRichEnough = ClientIsRichEnough[];
