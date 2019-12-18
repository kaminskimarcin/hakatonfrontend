import {Item} from "./items.model";

export class ItemsList {
  orderId?: number;
  items?: Array<Item>;

  constructor(id?: number, items?: Array<Item>) {
    this.orderId = id;
    this.items = items;
  }
}
