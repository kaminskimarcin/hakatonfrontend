import { Component, OnInit } from '@angular/core';
import {RestService} from "../services/rest.service";
import {Router} from "@angular/router";
import {DataCollectorService} from "../services/data-collector.service"
import {Item} from "../model/items.model";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  private currentDevice: MediaDeviceInfo;
  private  items: Array<Item>;
  private code: number;
  private count: number = 0;

  constructor(private rest: RestService, private router: Router, private collector: DataCollectorService) {
  }

  ngOnInit() {
  }

  onResult(qrCode: string) {
    this.code = Number(qrCode);
    this.collector.setOrderId(Number(qrCode));
    let items = this.collector.getItems();
    console.log(this.code);
    if(items.length < 1) {
      this.rest.getItemsListForProcess(this.code).then(value => {
        value.body.forEach(item => item.status = "Unchecked");
        this.items = value.body;
        this.collector.setItems(this.items);
      });
    } else {
       items.filter(item => item.id === this.code).forEach(item => item.status = "Checked");
       this.collector.getItems().forEach(item => {
         if (item.status === "Checked") {
           this.count++;
         }
         console.log(item.status);
         console.log(item.id);
         console.log(this.count);
         if (this.count === items.length) {
           this.router.navigate(['/itemList']);
         }}
       );
    }
    this.collector.setItems(items);
    this.count = 0;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.currentDevice = devices[0];
  }

  clearResult(): void{
    this.code = null;
  }

}
