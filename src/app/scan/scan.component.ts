import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest/rest.service";
import {Item} from "../model/items.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(private rest: RestService, private router: Router) {
  }

  ngOnInit() {
  }

  onResult(qrCode: string) {
    console.log(qrCode);
    //let items = this.rest.getItemsListForProcess(Number(qrCode));

  }

}
