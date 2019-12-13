import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { ItemsListComponent } from './items-list/items-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {RestService} from "./rest/rest.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
