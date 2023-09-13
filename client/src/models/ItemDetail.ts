import { Item } from './Item';

export interface ItemDetail extends Item {
  sold_quantity: number;
  description: string;
}
