import { useSuperHeroData } from "@/hooks/useSuperHeroData";
import React from "react";
import { useRouter } from "next/router";

function index() {
  let heroId = 1;
  const { data, isError, isFetched, isLoading, error } =
    useSuperHeroData(heroId);
  if (isLoading) return <h3>Loading...</h3>;
  if (data) {
    console.log(data);
  }
  if (error) console.log(error);
  return <div>index</div>;
}

export default index;
