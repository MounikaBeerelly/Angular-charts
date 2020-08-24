import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3PieChartComponent } from './d3-pie-chart/d3-pie-chart.component';
import { D3ScatterChartComponent } from './d3-scatter-chart/d3-scatter-chart.component';
import { BarComponent } from './bar/bar.component';
import { Bar1Component } from './bar1/bar1.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DashboardChartsComponent,
    D3BarChartComponent,
    D3PieChartComponent,
    D3ScatterChartComponent,
    BarComponent,
    Bar1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
