import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }

  getLocation(lat,long)
  {
    return this.http.get<any>('http://www.mapquestapi.com/geocoding/v1/reverse?key=ojF3PECsJqoXivpXROsgaHAIxrcdC6Li&location='+lat+','+long+'&includeRoadMetadata=true&includeNearestIntersection=true');
  }

  getWeather(query)
  {
    return this.http.get<any>('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=b7b9b5aeec794d6dae191655180211&q='+query+'&format=json&num_of_days=7&includelocation=yes&showlocaltime=yes&extra=isDayTime&tp=24');
  }

  getIpAddress() {
    return this.http.get<any>('http://api.ipstack.com/check?access_key=d5017e77db66ba9c39338a7f34686489');
  }

}
