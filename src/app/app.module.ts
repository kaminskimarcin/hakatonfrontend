import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

import {AppComponent} from './app.component';
import {ScanComponent} from './scan/scan.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtendedModule, FlexLayoutModule} from '@angular/flex-layout';
import {ReportsComponent} from './reports/reports.component';
import {TableDialogComponent} from './reports/dialogs/table-dialog';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { CuttingStockComponent } from './cutting-stock/cutting-stock.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ScanComponent,
    HomePageComponent,
    TableDialogComponent,
    ReportsComponent,
    LoginComponent,
    RegisterComponent,
    CuttingStockComponent
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
    MatCardModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    ExtendedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    NgxSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TableDialogComponent]

})
export class AppModule {
}
