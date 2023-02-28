import { type Clients } from "../types";

const isRichEnough = (
  clients: Clients,
  minimumAverageSalary: number
): Clients => {
  const clientsWithLowerIncomeThanX = clients.filter(
    (client) => client.averageSalary < minimumAverageSalary
  );
  const clientsWithLowerIncomeThanXandHavePayRoll =
    clientsWithLowerIncomeThanX.filter((client) => client.domicilledPayroll);

  return clientsWithLowerIncomeThanXandHavePayRoll;
};

export default isRichEnough;
