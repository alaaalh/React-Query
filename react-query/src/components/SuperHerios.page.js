import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("http://localhost:4000/heros");
};

export default function SuperHeriosPage() {
  const onSuccess = () => {
    console.log("the fetch data is success");
  };

  const onFaild = () => {
    console.log("the fetch data is faild");
  };
  
  const { isLoading, data, isError, error, isFetched, refetch } = useQuery(
    "super-hero",
    fetchData,
    {
      onSuccess,
      onFaild,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError){
    return <div>{error.message}</div>
  }

  return (
    <>
      {data?.data.map((hero) => {
        return <h2 key={hero.id}>{hero.name}</h2>;
      })}
    </>
  );
}
