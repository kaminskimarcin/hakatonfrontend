import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ScanComponent} from './scan/scan.component';
import {ReportsComponent} from './reports/reports.component';
import {CuttingStockComponent} from './cutting-stock/cutting-stock.component';
import {CuttingStockReportsComponent} from "./cutting-stock-reports/cutting-stock-reports.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, data: { animationState: 'One' }},
  {path: 'itemList', component: ItemsListComponent, data: { animationState: 'Two' }},
  {path: 'scan', component: ScanComponent, data: { animationState: 'Two' }},
  {path: 'reports', component: ReportsComponent, data: { animationState: 'Two' }},
  {path: 'cutting-stock', component: CuttingStockComponent, data: { animationState: 'Two' }},
  {path: 'cutting-stock-reports', component: CuttingStockReportsComponent, data: { animationState: 'Two' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
