import {Component, OnInit} from '@angular/core';
import {RestService} from '../services/rest.service';
import {Router} from '@angular/router';
import {DataCollectorService} from '../services/data-collector.service';
import {Item} from '../model/items.model';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  public availableDevices: MediaDeviceInfo[];
  public currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;
  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  public items: Array<Item>;
  public itemsChecked: Set<number> = new Set<number>();
  public code: number;
  public count = 0;
  public success = false;
  public error = false;

  constructor(private rest: RestService, private router: Router, private collector: DataCollectorService) {
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  ngOnInit() {
    this.items = this.collector.getItems();
    this.items.forEach(value => {
      if (value.status === 'Checked') {
        this.itemsChecked.add(value.id);
      }
    });
  }

  onResult(qrCode: string) {
    this.code = Number(qrCode);
    this.collector.setOrderId(Number(qrCode));
    if (this.items.length < 1) {
      this.rest.getItemsListForProcess(this.code).then(value => {
        value.body.forEach(item => item.status = 'Unchecked');
        this.items = value.body;
        this.collector.setItems(this.items);
        this.success = true;
        this.error = false;
      }).catch(err => {this.error = true; this.success = false; });
    } else {
      if (this.items.filter(item => item.id === this.code).length > 0) {
        this.success = true;
        this.error = false;
      } else {
        this.error = true;
        this.success = false;
      }
      this.items.filter(item => item.id === this.code).forEach(item => item.status = 'Checked');
      this.collector.getItems().forEach(item => {
         if (item.status === 'Checked') {
           this.count++;
           this.itemsChecked.add(item.id);
         }
         if (this.count ===  this.items.length) {
           this.router.navigate(['/itemList']);
         }}
       );
    }
    this.collector.setItems( this.items);
    this.count = 0;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
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
    return this.items.length !== undefined && this.items.length !== 0;
  }
  clearError(): void {
    this.error = null;
  }

  canFinish() {
    return this.items.length > 0;
  }

  canRestart() {
    this.items = new Array<Item>();
    this.itemsChecked = new Set<number>();
    this.collector.setItems(new Array<Item>());
    this.router.navigate(['/']);
  }
}


