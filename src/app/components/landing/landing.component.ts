import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { COUNTRIES } from "../../shared/countries";
import { ActivatedRoute } from '@angular/router';
declare var window: any;

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
}) 

export class LandingComponent implements OnInit {
  position:any;
  country:any;
  summary_query:any;
  summary_query_type:any;
  toggle: boolean;
  view: string;
  @ViewChild('container') container; 

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  )
  {
  }

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      if (!params['country'])
      {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setPositionByCoord(position);
          }, err => {
            this.setPositionByIp();
          });
        }
        else 
        {
          this.setPositionByIp();
        }
      }
      else 
      {
        this.country = params['country'];
        this.summary_query = COUNTRIES[params['country']].name;
        this.summary_query_type = "country";
      }
    });
    if (this.container.nativeElement.clientWidth <= 991)
    {
      this.toggle = true;
      this.view = "summary";
    }
    else 
    {
      this.toggle = false;
      this.view = "";
    }
  }

  setPositionByIp()
  {
    this.api.getIpAddress().subscribe( data =>{
      this.summary_query = data.latitude + "," + data.longitude;
      this.summary_query_type = "latLng";
      this.country = data.country_code;
    },err=>{
      this.summary_query_type = "country";
      this.summary_query = 'egypt';
      this.country = 'eg';
    });
  }
  
  setPositionByCoord(position)
  {
    this.position = position;
    this.summary_query = position.coords.latitude + "," + position.coords.longitude;
    this.summary_query_type = "latLng";
    this.api.getLocation(position.coords.latitude,position.coords.longitude).subscribe( data =>{
      this.country = data.results[0].locations[0].adminArea1;
    },err=>{
      this.country = 'eg';
    });
  }

  onResize (event)
  {
    if (event.target.innerWidth <= 991)
    {
      if (!this.toggle)
      {
        this.toggle = true;
        this.view = "summary";
      }
    }
    else 
    {
      this.toggle = false;
      this.view = "";
    }
  }

  setView (view)
  {
    this.view = view;
  }
}
