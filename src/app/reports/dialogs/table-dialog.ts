import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {Item} from '../../model/items.model';

export interface DialogData {
  items: Array<Item>;
}

@Component({
  selector: 'app-table-dialog',
  templateUrl: 'table-dialog.html',
  styleUrls: ['table-dialog.css']
})
export class TableDialogComponent {
  displayedColumns: string[] = ['id', 'itemId', 'description', 'quantity'];
  dataSource;

  constructor(
    public dialogRef: MatDialogRef<TableDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataSource = new MatTableDataSource(data.items);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
