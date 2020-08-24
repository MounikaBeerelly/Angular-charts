import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3PieChartComponent } from './d3-pie-chart/d3-pie-chart.component';
import { D3ScatterChartComponent } from './d3-scatter-chart/d3-scatter-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { BarComponent } from './bar/bar.component';
import { Bar1Component } from './bar1/bar1.component';

const routes: Routes = [
  {path: 'd3-bar-chart', component: D3BarChartComponent},
  {path: 'd3-pie-chart', component: D3PieChartComponent},
  {path: 'd3-scatter-chart', component: D3ScatterChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'dashboard-charts', component: DashboardChartsComponent},
  {path: 'bar', component: BarComponent},
  {path: 'bar1', component: Bar1Component},
  { path: '', redirectTo: 'bar ', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
