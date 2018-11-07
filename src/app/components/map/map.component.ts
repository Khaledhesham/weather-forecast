import { Component, OnInit,Input } from '@angular/core';
import { COUNTRIES } from '../../shared/countries';
import { Router } from '@angular/router';
import * as D3 from 'd3';
declare var window: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() country: string;
  shortcode:any;
  center_long:any;
  center_lat:any;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.shortcode = COUNTRIES[this.country.toLowerCase()].shortcode.toLowerCase();
    this.center_long = COUNTRIES[this.country.toLowerCase()].long;
    this.center_lat = COUNTRIES[this.country.toLowerCase()].lat;
    this.drawMap(1,true);
  }

  redraw()
  {
    var svg = D3.select("svg");
    var g = D3.select("g");
    var svg_node = <any>svg.node();
    var g_node = <any>g.node();
    var g_info = svg_node.getBBox();
    var parent = g_node.parentElement;
    var fullWidth = parent.clientWidth,
        fullHeight = parent.clientHeight;
    var width = g_info.width,
    height = g_info.height;
    var midX = g_info.x + width / 2,
    midY = g_info.y + height / 2;
    var scale = 0.6 * Math.max(fullWidth / width, fullHeight / height);
    this.drawMap(scale,false);
  }

  drawMap(scale,redraw)
  {
    var svg = D3.select("svg");
    svg.remove();
    var that = this;
    import('../../../../node_modules/datamaps/dist/datamaps.'+that.shortcode+'.min.js').then(module => {
      var container = document.getElementById('map');
      var map = new module.default({
        scope: that.shortcode,
        responsive: true,
        element: container,
        fills: {
          defaultFill: 'rgba(0,255,255,0.4)'
        },
        done: function(datamap) {
          datamap.svg.selectAll('.datamaps-subunit').on('click', (geography) => {
            document.location.href = '/dashboard/' + that.country.toLowerCase() + '/' + geography.properties.name;
          });
        },
        setProjection: function(element) {
          var projection = D3.geoEquirectangular()
          .center([that.center_long,that.center_lat])
          .scale(scale * 2000)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
          var path = D3.geoPath()
          .projection(projection);

          return {path: path, projection: projection};
        }
        })
        if (redraw)
        {
          that.redraw();
        }
        window.addEventListener('resize', function(event){
          map.resize();
      });
      var svg = D3.select("svg");
      var g = svg.select("g");
      D3.select("svg").call(D3.zoom()
      .scaleExtent([1/4, 8])
      .on("zoom", zoom));
      function zoom() {
        g.attr("transform", D3.event.transform);
      }
    });
  }
  
}
