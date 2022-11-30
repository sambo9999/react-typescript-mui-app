import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";

interface GetUserProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const UserPage = () => {
  const [data, setData] = useState<GetUserProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((result) => result.data);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <BaseLayout>
      <ul>
        {data?.map((item: any) => (
          <li key={item.userId}>
            <a>{item.userId}</a>
            <a>{item.title}</a>
            <a>{item.body}</a>
            <a>{item.Id}</a>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};
