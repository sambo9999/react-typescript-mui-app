import React from "react";
import { QueryCache, useQuery } from "react-query";
import { commentsSdk } from "../sdk";

export const ReactQuery = () => {
  const getComment = commentsSdk.getAll().then((res: any) => res);

  // const queryCache = new QueryCache({
  //   onError: (error) => {
  //     console.log(error);
  //   },
  //   onSuccess: (getComment) => {
  //     console.log(getComment);
  //   },
  // });

  // const query = queryCache.find("posts");
  // console.log(query);

  // Fetcher function
  const getFacts = async () => {
    const getComment = await commentsSdk.getAll().then((res: any) => res);
    return getComment;
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    // return res.json();
  };
  // Using the hook
  const { data, error, isLoading, status } = useQuery("randomFacts", getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine
  return (
    <div>
      <h1>React Query</h1>
      {status === "error" && <div>Error...</div>}
      {status === "idle" && <div>Idle...</div>}
      {status === "success" && (
        <ul>
          {data.map((item: any, index: any) => {
            return (
              <div key={index}>
                <h2>{item.name}</h2>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};
