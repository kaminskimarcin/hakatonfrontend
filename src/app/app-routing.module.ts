import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ScanComponent} from './scan/scan.component';
import {ReportsComponent} from './reports/reports.component';
import {CuttingStockComponent} from './cutting-stock/cutting-stock.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'itemList', component: ItemsListComponent},
  { path: 'scan', component: ScanComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'cutting-stock', component: CuttingStockComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
