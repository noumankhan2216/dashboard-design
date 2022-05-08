import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule} from '@angular/material/icon';
import { ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BargraphComponent } from './dashboard/bargraph/bargraph.component';
import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BargraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgChartsModule,
    ChartsModule,
    MDBBootstrapModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }