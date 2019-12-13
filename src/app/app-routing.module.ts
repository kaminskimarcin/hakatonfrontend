import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsListComponent} from "./items-list/items-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ScanComponent} from "./scan/scan.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'itemList', component: ItemsListComponent},
  { path: 'scan', component: ScanComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
