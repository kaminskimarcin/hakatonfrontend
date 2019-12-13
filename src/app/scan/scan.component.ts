import {Component, OnInit} from '@angular/core';
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
  private items: Array<Item>;
  private code: number;
  private count: number = 0;
  private success: boolean = false;
  private error: boolean = false;

  constructor(private rest: RestService, private router: Router, private collector: DataCollectorService) {
  }

  ngOnInit() {
    this.items = this.collector.getItems();
  }

  onResult(qrCode: string) {
    this.code = Number(qrCode);
    this.collector.setOrderId(Number(qrCode));
    console.log(this.code);
    if(this.items.length < 1) {
      this.rest.getItemsListForProcess(this.code).then(value => {
        value.body.forEach(item => item.status = "Unchecked");
        this.items = value.body;
        this.collector.setItems(this.items);
        this.success = true;
        this.error = false;
      }).catch(err => {this.error = true; this.success = false});
    } else {
      if (this.items.filter(item => item.id === this.code).length > 0) {
        this.success = true;
        this.error = false;
      } else {
        this.error = true;
        this.success = false;
      }
      this.items.filter(item => item.id === this.code).forEach(item => item.status = "Checked");
       this.collector.getItems().forEach(item => {
         if (item.status === "Checked") {
           this.count++;
         }
         console.log(item.status);
         console.log(item.id);
         console.log(this.count);
         if (this.count ===  this.items.length) {
           this.router.navigate(['/itemList']);
         }}
       );
    }
    this.collector.setItems( this.items);
    this.count = 0;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.currentDevice = devices[0];
  }

  clearResult(): void {
    this.success = null;
  }

  updateData() {
    this.router.navigate(['/itemList']);
  }

  canUpdate() {
    console.log(this.items);
    return this.items.length !== undefined && this.items.length !== 0;
  }
  clearError(): void {
    this.error = null;
  }
}


