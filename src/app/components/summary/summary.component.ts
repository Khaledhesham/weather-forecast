import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Weather } from '../../shared/weather';
import { ICONS } from '../../shared/icons';

@Component({
  selector: 'weather-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() query:string;
  @Input() query_type:string;
  @Output() currentWeather = new EventEmitter();
  weather:Weather = new Weather();


  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.getWeather(this.query).subscribe(result => {
      this.currentWeather.emit(result);
      this.weather.week = new Array();
      result.data.weather.slice(1).forEach(day => {
        var weather = new Weather();
        weather.temperature = day.hourly[0].tempC;
        weather.localtime = day.date;
        if (ICONS[day.hourly[0].weatherCode] === undefined)
        {
          weather.icon = "wi-na";
        }
        else 
        {
          weather.icon = ICONS[day.hourly[0].weatherCode].day;
        }
        this.weather.week.push(weather);
      });
      this.weather.localtime = result.data.time_zone[0].localtime;
      this.weather.country = result.data.nearest_area[0].country[0].value;
      if (this.query_type == "latLng")
      {
        this.weather.city = result.data.nearest_area[0].region[0].value;
      }
      else if (this.query_type == "city")
      {
        this.weather.city = this.query;
      }
      else
      {
        this.weather.city = result.data.nearest_area[0].areaName[0].value;
      }
      this.weather.feels_like = result.data.current_condition[0].FeelsLikeC;
      this.weather.description = result.data.current_condition[0].weatherDesc[0].value;
      this.weather.min_temperature = result.data.weather[0].mintempC;
      this.weather.max_temperature = result.data.weather[0].maxtempC;
      this.weather.temperature = result.data.current_condition[0].temp_C;
      this.weather.humidity = result.data.current_condition[0].humidity;
      this.weather.wind_speed = result.data.current_condition[0].windspeedKmph;
      this.weather.wind_direction = result.data.current_condition[0].winddirDegree;
      if (ICONS[result.data.current_condition[0].weatherCode] === undefined)
      {
        this.weather.icon = "wi-na";
      }
      else if (result.data.current_condition[0].isdaytime === "no")
      {
        this.weather.icon = ICONS[result.data.current_condition[0].weatherCode].night;
      }
      else
      {
        this.weather.icon = ICONS[result.data.current_condition[0].weatherCode].day;
      }
    }, err => {
      
    });
  }

}
