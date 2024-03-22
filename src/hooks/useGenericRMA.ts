import axios from "axios";
import { useEffect, useState } from "react";
import { Character, Episode, Response, Location } from "../models/models";

type Root = "character" | "episode" | "location";

const useGenericRMA = <T>(root: Root, page: number) => {
  const [state, setState] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Response<T>>(`https://rickandmortyapi.com/api/${root}?page=${page}`)
      .then((response) => {
        setState(response.data.results);
      })
      .catch((err) => {
        setState([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, root]);
  return [state, loading] as [T[], boolean];
};

export const useCharacters = (page: number) =>
  useGenericRMA<Character>("character", page);

export const useEpisodes = (page: number) =>
  useGenericRMA<Episode>("episode", page);

export const useLocation = (page: number) =>
  useGenericRMA<Location>("location", page);
