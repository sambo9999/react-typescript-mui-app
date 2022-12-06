import React from "react";
import useSWR, { useSWRConfig } from "swr";

export const Mutation = () => {
  const { mutate } = useSWRConfig();
  const URL: string = "https://jsonplaceholder.typicode.com/todos/1";
  const fetcher = (url: string) =>
    fetch(url).then((r: { json: () => any }) => r.json());
  const { data, error } = useSWR(URL, fetcher);
  if (!data) return <div>loading...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <button
        onClick={async () => {
          const newTitle = data.title.toUpperCase();
          const user = { ...data, title: newTitle };
          const options = { optimisticData: user, rollbackOnError: true };
          function updateFn(user: any): any {
            return { ...user, title: newTitle };
          }

          mutate(URL, updateFn(user), options);
        }}
      >
        Mutation
      </button>
      <p>UserId: {data.userId}</p>
      <p>Id: {data.id}</p>
      {data.completed ? <p>Completed</p> : <p>Not Completed</p>}
    </div>
  );
};
