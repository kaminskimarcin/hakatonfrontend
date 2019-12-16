import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { ItemsListComponent } from './items-list/items-list.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatButtonModule,
  MatDialogModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // Local
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
