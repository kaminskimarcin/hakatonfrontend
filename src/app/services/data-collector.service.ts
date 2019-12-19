import {Injectable} from '@angular/core';
import {Item} from '../model/items.model';

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {
  private items: Array<Item>;
  private orderId = 0;


  getItems(): Array<Item> {
    if (this.items === undefined) {
      return new Array<Item>();
    } else {
      return this.items;
    }
  }

  setItems(value: Array<Item>) {
    this.items = value;
  }

  getOrderId(): number {
    return this.orderId;
  }

  setOrderId(value: number) {
    this.orderId = value;
  }

}
