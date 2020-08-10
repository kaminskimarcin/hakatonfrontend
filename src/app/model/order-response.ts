import {SingleCut} from "./single-cut";

export class OrderResponse {
  rawData?: Array<SingleCut>;


  constructor() {
    this.rawData = new Array<SingleCut>();
  }
}
