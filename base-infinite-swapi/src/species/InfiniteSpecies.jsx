import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const { data } = useInfiniteQuery({ page });
  return <InfiniteScroll />;
}
