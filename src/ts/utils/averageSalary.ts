import { type ClientsAreRichEnough } from "../types";

const initialValue = 0;

const averageSalary = (clients: ClientsAreRichEnough = []): number =>
  clients.reduce(
    (acumulator, { averageSalary }) => acumulator + averageSalary,
    initialValue
  ) / clients.length;

export default averageSalary;
