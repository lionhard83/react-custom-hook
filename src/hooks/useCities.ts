import axios from "axios";
import { useEffect, useState } from "react";

type CityWeather = {
  name: string;
  weather: { main: string; description: string }[];
};

export const useCities = (cities: string[]) => {
  const [cityWeathers, setCityWeathers] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCityInUrl = (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21396536a373fc5802cbc8fdf34c40d1`;

  const loadData = async () => {
    setLoading(true);
    const results = (
      await Promise.all(
        cities.map(setCityInUrl).map((url) => axios.get<CityWeather>(url))
      )
    ).map((item) => item.data);
    setCityWeathers(results);
    setLoading(false);
  };
  return [cityWeathers, setCityWeathers, loading] as [
    CityWeather[],
    Function,
    boolean
  ];
};
