import {SingleOrder} from './single-order';
import {SingleCut} from './single-cut';

export class Purchase {
  id?: number;
  salesOrder?: string;
  item?: string;
  desc?: string;
  singleOrders?: Set<SingleOrder>;
  singleCuts?: Set<SingleCut>;
  jumboWidth?: number;

  constructor() {
  }
}
