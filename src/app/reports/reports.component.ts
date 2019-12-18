import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../services/rest.service';
import {MatDialog} from '@angular/material';
import {TableDialogComponent} from './dialogs/table-dialog';
import {Item} from '../model/items.model';
import {ItemsList} from '../model/itemsList';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private rest: RestService, public dialog: MatDialog) {
  }

  @ViewChild('downloadZipLink', null)
  private downloadZipLink: ElementRef;

  displayedColumns: string[] = ['id', 'orderID', 'Number of components', 'Generate'];
  dataSource;

  ngOnInit() {
    this.rest.getAllAvailableCheckedProcess().then(value => {
      console.log(value);
      this.dataSource = value.body;
      this.dataSource.filterPredicate =
        (data: ItemsList, filters: string) => {
          const matchFilter = [];
          const filterArray = filters.split(',');
          const columns = [data.orderId.toString()];
          filterArray.forEach(filter => {
            const customFilter = [];
            columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
            matchFilter.push(customFilter.some(Boolean)); // OR
          });
          return matchFilter.every(Boolean); // AND
        };
    });


  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkComponents(items: DataTransferItemList) {
    console.log(items);
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '350px',
      data: {items}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  generate(element: any) {
    this.rest.generateReport(element).then(value => {
      /*const blob = new Blob([value.body], { type: 'application/text' });
      const filename = 'file.pdf';
      console.log(filename);
      const url = window.URL.createObjectURL(blob);
      const link = this.downloadZipLink.nativeElement;
      link.href = url;
      console.log(link);
      console.log(filename);
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);*/
    });
    console.log('Wygenerowany');
  }
}
