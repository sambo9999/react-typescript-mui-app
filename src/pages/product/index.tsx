import React from "react";
import { AhookFunction } from "../../ahook";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { SearchData } from "../../fetchData/dataSearch";

export const ProductPage = () => {
  return (
    <BaseLayout>
      <h1>Product Page</h1>
      <SearchData />
    </BaseLayout>
  );
};
