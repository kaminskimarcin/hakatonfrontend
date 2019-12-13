import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { ItemsListComponent } from './items-list/items-list.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {RestService} from "./rest/rest.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ScanComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ZXingScannerModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
