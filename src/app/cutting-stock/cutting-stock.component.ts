import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RestService} from '../services/rest.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Order} from '../model/order';
import {SingleCut} from '../model/single-cut';
import {MatTableDataSource} from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {OrderResponse} from '../model/order-response';

@Component({
  selector: 'app-cutting-stock',
  templateUrl: './cutting-stock.component.html',
  styleUrls: ['./cutting-stock.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CuttingStockComponent implements OnInit {
  constructor(private changeDetectorRefs: ChangeDetectorRef, private restService: RestService, private spinner: NgxSpinnerService) {
  }

  displayedColumns: string[] = ['procOrd', 'orderQty', 'width'];
  displayedColumnsResponse: string[] = ['procOrd', 'orderQty', 'jumboNumber', 'checked'];
  singleCut: SingleCut = new SingleCut();
  order: Order = new Order();
  singleCuts: Array<SingleCut>;
  public selectedFile;
  showTable: boolean;
  dataSource = new BehaviorSubject([]);
  singleCutsResponse: OrderResponse;

  flip = 'inactive';

  save() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  ngOnInit() {
    this.showTable = false;
  }

  add() {
    this.order.singleOrders.push(this.singleCut);
    this.singleCut = new SingleCut();
    this.dataSource.next(this.order.singleOrders);
  }

  onSubmit() {
    this.spinner.show();
    this.restService.calculateResult(this.order).then(value => {
      console.log(value);
      this.singleCutsResponse = value.body;
      this.showTable = true;

      this.spinner.hide();
    });

  }

}

