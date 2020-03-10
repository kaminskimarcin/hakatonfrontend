import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-cutting-stock',
  templateUrl: './cutting-stock.component.html',
  styleUrls: ['./cutting-stock.component.css']
})
export class CuttingStockComponent implements OnInit {
  constructor(private restService: RestService) {
  }

  public selectedFile;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }


  ngOnInit() {
  }

  onSubmit() {
    this.restService.inputCsvFile(this.selectedFile);
  }

}
