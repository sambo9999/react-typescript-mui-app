import React, { useCallback, useEffect, useState } from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { SearchData } from "../../fetchData/dataSearch";
import { commentsSdk } from "../../sdk";

export interface CommentRequest {
  postId: number;
  id: number | string;
  name?: string;
  email?: string;
  body?: string;
}
export const ProductPage = () => {
  const initialsSate = {
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: "",
  };
  const [data, setData] = useState<CommentRequest[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const getComment = await commentsSdk
        .getAll()
        .then((res: any) => setData(res));
      // console.log("getOneComment: ", getComment);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return data;
  }
  // console.log("data1", data);

  return (
    <BaseLayout>
      <div>
        {/* {data.email} */}
        {/* @ts-ignore */}
        {data.map((item: any, index: any) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>

      {/* <SearchData /> */}
    </BaseLayout>
  );
};
