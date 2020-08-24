import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  
  title = 'dashboard';
  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            label: 'My First dataset',
            data: [1,3,5,10,56,35,543,543,543],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          },
          {
            label: 'My Second dataset',
            data: [1,3,5,10,56,35,543,543,543].reverse(),
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false
          }
        ]
      }
    })
  }

}
