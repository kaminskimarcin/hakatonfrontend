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
    let code = Number(qrCode);
    let items = this.collector.getItems();
    console.log(code);
    if(items === undefined) {
      this.rest.getItemsListForProcess(code).then(value => this.items = value.body);
      this.collector.setItems(this.items);
    } else {
       items.filter(item => item.id === code).forEach(item => item.status = "checked");
    }
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.currentDevice = devices[0];
  }

}
