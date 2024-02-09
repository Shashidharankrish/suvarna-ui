export interface Collateral {
  itemId: number; // Unique identifier for the pledged item
  itemName: string;
  itemType: string;
  estimatedValue: number;
}