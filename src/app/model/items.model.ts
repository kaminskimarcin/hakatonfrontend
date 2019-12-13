export class Item {
  id?: number;
  description?: string;
  qty?: number;
  batch?: number;
  status?: string;

  constructor(id?: number, description?: string, qty?: number, batch?: number, status?: string) {
    this.id = id;
    this.description = description;
    this.qty = qty;
    this.batch = batch;
    this.status = status;
  }
}
