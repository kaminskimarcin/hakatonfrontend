import { Component, OnInit } from '@angular/core';
import {Item} from "../model/items.model";
import {DataCollectorService} from "../services/data-collector.service";
import {Router} from "@angular/router";
import {RestService} from "../services/rest.service";
import {ItemsList} from "../model/itemsList";
import {removeSummaryDuplicates} from "@angular/compiler";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor(public dataCollector: DataCollectorService, public router: Router, public rest: RestService) {}

  private item: Item;
  private items: Array<Item> = Array<Item>();

  ngOnInit() {
    this.items = this.dataCollector.getItems();
    this.item = new Item(1, "desc", 3, 3, "scanned");
  }

  submit() {
    console.log("Data submitted");
    this.dataCollector.setItems(this.items);
    this.items.forEach(item => console.log(item.quantity));
    let itemList: ItemsList = new ItemsList(this.dataCollector.getOrderId(), this.dataCollector.getItems());
    this.rest.postCompletedItemsListForProcess(itemList).then(result => {
      if (result.body === 201) {
        this.router.navigate(['/']);
      }
    });
  }

  openScanner() {
    this.router.navigate(['/scan']);
    this.dataCollector.setItems(this.items);
  }


}
