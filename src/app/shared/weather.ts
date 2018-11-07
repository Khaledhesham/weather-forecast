export class Weather {
  localtime: string;
  feels_like: number;
  description:string;
  min_temperature: number;
  max_temperature: number;
  temperature: number;
  country: string;
  city: string;
  humidity: number;
  icon: string;
  isDayTime: string;
  wind_speed:string;
  wind_direction:string;
  week: Array<Weather>
}