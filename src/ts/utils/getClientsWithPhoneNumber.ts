import { type ClientsWithPhoneNumberDni, type Clients } from "../types";

export const getClientsWithHomePhone = (
  clients: Clients
): ClientsWithPhoneNumberDni =>
  clients
    .filter((client) => client.homePhoneNumber)
    .map((client) => client.dni);
