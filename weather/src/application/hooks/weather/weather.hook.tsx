import React from "react";
import { City } from "../../entities";
import { WeatherHook, WeatherHookData } from "./weather.interface";

export const useWeatherApi = (cities: City[] = []): WeatherHook => {
  const [weathers, setWeather] = React.useState<WeatherHookData[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (cities.length < 1) return;
    getWheaters(cities);
  }, [cities]);

  function getWheaters(cities: City[]) {
    setIsLoading(true);
    Promise.all(cities.map((city) => _getWeather(city))).then((results) => {
      setWeather(results);
      setIsLoading(false);
    });
  }

  async function _getWeather(city: City): Promise<WeatherHookData> {
    const hasWeather = weathers.find(
      (weather) => weather.city.description === city.description
    );
    if (hasWeather) return hasWeather;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${
        city.lng
      }&appid=${import.meta.env.VITE_WEATHER_API}&units=metric`
    );
    const data = await response.json();
    return {
      city,
      season: {
        ...data.main,
      },
    };
  }

  return [weathers, { getWheaters, isLoading }];
};
