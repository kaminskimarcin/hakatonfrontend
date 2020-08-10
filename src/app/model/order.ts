import {SingleCut} from './single-cut';

export class Order {
  salesOrder?: number;
  item?: number;
  desc?: string;
  singleOrders?: Array<SingleCut>;
  jumboWidth?: number;


  constructor() {
    this.singleOrders = new Array<SingleCut>();
  }
}
