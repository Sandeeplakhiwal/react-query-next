import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always',
    // refetchInterval: false,
    // refetchIntervalInBackground: true,
    enabled: false,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
