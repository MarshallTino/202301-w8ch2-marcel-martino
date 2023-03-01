import { type ClientIsRichEnough, type Clients } from "../types";

const isRichEnough = (
  clients: Clients,
  minimumAverageSalary: number
): ClientIsRichEnough[] =>
  clients
    .filter((client) => client.averageSalary < minimumAverageSalary)
    .filter((client) => client.domicilledPayroll)
    .map((client) => ({
      dni: client.dni,
      averageSalary: client.averageSalary,
      nameSurnames: client.nameSurnames,
    }));

export default isRichEnough;
