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

  constructor(private rest: RestService, private router: Router, private collector: DataCollectorService) {
  }

  ngOnInit() {
  }

  onResult(qrCode: string) {
    console.log(qrCode);
    if(this.collector.getItems() != null && this.collector.getItems().length < 1) {
      this.rest.getItemsListForProcess(Number(qrCode)).then(value => this.items = value.body);
      this.collector.setItems(this.items);
    }else {
       
    }
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.currentDevice = devices[0];
  }

}
