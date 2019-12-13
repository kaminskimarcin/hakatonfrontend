import { Component, OnInit } from '@angular/core';
import {Item} from "../model/items.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor(items: Item[]) {
    this.items = items;
  }

  private item: Item;
  private items: Item[];

  ngOnInit() {
    this.item = new Item(1, "desc", 3, 3, "string")
  }

}
