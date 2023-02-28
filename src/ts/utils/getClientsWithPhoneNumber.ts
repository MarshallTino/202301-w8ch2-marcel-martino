import { type ClientsWithPhoneNumberDni, type Clients } from "../types";

export const getClientsWithHomePhone = (
  clients: Clients
): ClientsWithPhoneNumberDni => {
  const result = clients.filter((client) => client.homePhoneNumber !== "");
  const dniClients = result.map((client) => client.dni);
  return dniClients;
};
