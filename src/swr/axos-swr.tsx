import React from "react";
import axios from "axios";
import useSWR from "swr";

export const FetchDataAxios = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );
  if (!data) return <div>loading...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>UserId: {data.userId}</p>
      <p>Id: {data.id}</p>
      {data.completed ? <p>Completed</p> : <p>Not Completed</p>}
    </div>
  );
};
