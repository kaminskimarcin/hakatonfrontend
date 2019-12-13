import {Injectable} from "@angular/core";
import {Item} from "../model/items.model";

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {
  private _items: Array<Item> = new Array<Item>();
  private _orderId: number = 0;


  getItems(): Array<Item> {
    return this._items;
  }

  setItems(value: Array<Item>) {
    this._items = value;
  }

  getOrderId(): number {
    return this._orderId;
  }

  setOrderId(value: number) {
    this._orderId = value;
  }

}
