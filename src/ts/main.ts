import { clients } from "./clients";
import { getClientsWithHomePhone } from "./utils/getClientsWithHomePhone";
import isRichEnough from "./utils/isRichEnough";

console.log(getClientsWithHomePhone(clients));
console.log(isRichEnough(clients, 11000));
