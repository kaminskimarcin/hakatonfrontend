import { Component, OnInit } from '@angular/core';
import {Item} from '../model/items.model';
import {DataCollectorService} from '../services/data-collector.service';
import {Router} from '@angular/router';
import {RestService} from '../services/rest.service';
import {ItemsList} from '../model/itemsList';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor(public dataCollector: DataCollectorService, public router: Router, public rest: RestService) {}

  public item: Item;
  public items: Array<Item> = Array<Item>();
  public isSubmit = false;


  ngOnInit() {
    this.items = this.dataCollector.getItems();
    this.item = new Item(1, 'desc', 3, 3, 'scanned');
  }

  submit() {
    console.log('Data submitted');
    this.dataCollector.setItems(this.items);
    this.items.forEach(item => console.log(item.quantity));
    const itemList: ItemsList = new ItemsList(this.dataCollector.getOrderId(), this.dataCollector.getItems());
    this.rest.postCompletedItemsListForProcess(itemList).then(result => {
      if (result.status === 201) {
        this.router.navigate(['/']);
        this.dataCollector.setItems(new Array<Item>());
      } else {

      }
    });
  }

  openScanner() {
    this.router.navigate(['/scan']);
    this.dataCollector.setItems(this.items);
  }

  canSubmit() {
    this.items.forEach(item => {
      this.isSubmit = item.status === 'Checked' && item.batch !== undefined && item.description !== undefined && item.quantity !== undefined;
    });

    return this.isSubmit;
  }
}
