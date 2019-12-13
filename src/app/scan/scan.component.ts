import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  qrCode: String

  constructor() { }

  ngOnInit() {
  }

  onResult(qrCode: string) {
    this.qrCode = qrCode;
  }

}
