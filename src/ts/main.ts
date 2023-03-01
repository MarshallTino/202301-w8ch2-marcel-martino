import { clients } from "./clients";
import averageSalary from "./utils/averageSalary";
import { getClientsWithHomePhone } from "./utils/getClientsWithPhoneNumber";
import isRichEnough from "./utils/isRichEnough";

console.log(getClientsWithHomePhone(clients));

console.log(isRichEnough(clients, 80000));

console.log(
  `El saldo medio promedio de los clientes con nómina y con saldo medio menor a 80000€ es de: ${averageSalary(
    isRichEnough(clients, 80000)
  )}€`
);
