import {Injectable} from "@angular/core";
import {Item} from "../model/items.model";

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {
  private _items: Array<Item>;


  getItems(): Array<Item> {
    return this._items;
  }

  setItems(value: Array<Item>) {
    this._items = value;
  }
}
