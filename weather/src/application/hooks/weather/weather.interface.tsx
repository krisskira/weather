import { City } from "../../entities";
import { Season } from "../../entities/seasons";

export type WeatherHookData = {
  city: City;
  season: Season;
};

export type WeatherHook = [
  data: WeatherHookData[],
  actions: { isLoading: boolean; getWheaters(cities: City[]): void }
];

declare module OpenWeather {
  export interface Weather {
    coord: Coord;
    weather: _Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  export interface Coord {
    lon: number;
    lat: number;
  }

  export interface _Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }

  export interface Wind {
    speed: number;
    deg: number;
  }

  export interface Clouds {
    all: number;
  }

  export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
}
