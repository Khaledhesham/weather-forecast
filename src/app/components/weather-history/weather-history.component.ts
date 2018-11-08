import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.css']
})
export class WeatherHistoryComponent implements OnInit {

  @Input() current_weather:any;
  @ViewChild('chart') chart;
  margin = {top: 20, right: 20, bottom: 40, left: 40};
  chart_title : string;

  constructor() { }

  ngOnInit() {
    this.createBarChart();
  }

  createBarChart()
  {
    this.chart_title = "Temperature Average";
    d3.select('svg').remove();
    const element = this.chart.nativeElement;
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    var climate_avg = this.current_weather.data.ClimateAverages[0].month;
    var svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);
    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(climate_avg.map(d => d.name.substring(0, 3)));
    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(<any>climate_avg, function(d:any){
        return d.absMaxTemp;
      }) as any]);
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    var tooltip = svg.append("g")
    .style("display", "none")
    .attr('class', 'tip');
    tooltip.append("rect")
      .attr("width", 60)
      .attr("height", 20)
      .attr("fill", "white")
      .attr("stroke", "black");
    tooltip.append("text")
      .attr("x", 30)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));
    g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y).tickFormat(<any>function (d:any){
      return d + "°";
    }))
    g.selectAll('.bar')
      .data(climate_avg)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function (d:any){
          return x(d.name.substring(0, 3));
        })
        .attr('width', x.bandwidth())
        .on("mouseover", function() { tooltip.style("display", null); })
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d:any) {
          var xPosition = d3.mouse(<any>this)[0] - 5;
          var yPosition = d3.mouse(<any>this)[1] - 5;
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          tooltip.select("text").text(d.name.substring(0, 3) + ": " + d.absMaxTemp + "°");
        })
        .attr("y", function(d) {
            return y(0);
        })
        .attr("height", 0)
        .transition()
        .duration(1000)
        .attr('y', function (d:any){
          return y(d.absMaxTemp);
        })
        .attr('height', function (d:any){
          return contentHeight - y(d.absMaxTemp)
        });
  }

  onResize(event) {
    this.createBarChart();
  }
}
