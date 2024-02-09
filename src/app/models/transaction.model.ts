import { Collateral } from "./item.model";

export interface Transaction {
  id?: number;
  date: Date;
  amount: number;
  description: string;
  collateral?: Collateral; // Collateral information for pledged items
}