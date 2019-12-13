export class Item {
  id?: number;
  description?: string;
  quantity?: number;
  batch?: number;
  status?: string;

  constructor(id?: number, description?: string, quantity?: number, batch?: number, status?: string) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.batch = batch;
    this.status = status;
  }
}
