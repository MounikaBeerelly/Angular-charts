import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-pie-chart',
  templateUrl: './d3-pie-chart.component.html',
  styleUrls: ['./d3-pie-chart.component.css']
})
export class D3PieChartComponent implements OnInit {
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
    // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height)/2 - this.margin;
  private colors;
  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform", 
      "translate(" + this.width /2 + " , " + this.height/2 +")"
    );
  }
  private creteColors(): void {
    this.colors = d3.scaleOrdinal()
     .domain(this.data.map(d => d.Stars.toString()))
     .range(["green", "lightblue", "yellow", "violet", "orange"]);
  }
  private drawChart(): void {
        // Compute the position of each group on the pie:
      const pie = d3.pie<any>().value((d:any) => Number(d.Stars));

      // Build the pie chart
      this.svg.selectAll('pieces')
              .data(pie(this.data))
              .enter()
              .append('path')
              .attr('d', d3.arc()
                 .innerRadius(0)
                 .outerRadius(this.radius)
              )
              .attr('fill', (d,i)=>(this.colors(i)))
              .attr("stroke", '#121926')
              .style('stroke-width', "1px");
      
        // Add labels
        const labelLocation = d3.arc()
                               .innerRadius(100)
                               .outerRadius(this.radius);

        this.svg.selectAll('pieces')
                .data(pie(this.data))
                .enter()
                .append('text')
                .text(d => d.data.Framework)
                .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
                .style("text-anchor", "middle")
                .style("font-size", 15);
  }

  constructor() { }

  ngOnInit(): void {
    // call all three mehtods
    this.createSvg();
    this.creteColors();
    this.drawChart();
  }

}
