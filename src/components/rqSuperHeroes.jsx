import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData.js";

function rqSuperHeroes() {
  const onSuccess = (data) => {
    console.log("Perform sidedeffect after sucess", data);
  };

  const onError = (error) => {
    console.log("after error", error);
  };

  const { isLoading, data, error, isError, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) console.log("Loading...");
  console.log("DATA", data);
  if (isError) console.log("Error", error);
  return (
    <>
      <div>rqSuperHeroes</div>
      <button onClick={refetch}>btn</button>
    </>
  );
}

export default rqSuperHeroes;
