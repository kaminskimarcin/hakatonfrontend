import { Component, OnInit } from '@angular/core';
import {Item} from "../model/items.model";
import {DataCollectorService} from "../services/data-collector.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor(public dataCollector: DataCollectorService, public router: Router) {}

  private item: Item;
  private items: Array<Item> = Array<Item>();

  ngOnInit() {
    this.items = this.dataCollector.items;
    this.item = new Item(1, "desc", 3, 3, "scanned");
  }

  submit() {
    console.log("Data submitted");
  }

  openScanner() {
    this.router.navigate(['/scan']);
  }


}
