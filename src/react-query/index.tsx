import React from "react";
import { useQuery } from "react-query";

export const ReactQuery = () => {
  // Fetcher function
  const getFacts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    return res.json();
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
          {data.map((item: any) => (
            <li key={item.userId}>
              <h2>{item.id}</h2>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
