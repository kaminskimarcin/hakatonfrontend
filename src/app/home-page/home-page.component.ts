import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgxSpinnerService} from "ngx-spinner";

declare function require(path: string);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  barcodeImage = require('../../assets/barcode_ean13_w10.png');
  reportsImage = require('../../assets/123.png');
  userImage = require('../../assets/User-icon.png');

  constructor(private router: Router, private spinner: NgxSpinnerService) {
  }

  public openScanner() {
    this.router.navigate(['/scan']);
  }

  ngOnInit() {
  }

  navigateToReports() {
    this.router.navigate(['/reports']);
  }

  navigateToCuttingStock() {
    this.router.navigate(['/cutting-stock']);
  }
}
