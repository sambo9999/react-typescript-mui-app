import React from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { CallBackFunction } from "../../hooks/callBack";
import HandleError from "../../swr/error";

export const SwrPage = () => {
  return (
    <BaseLayout>
      <CallBackFunction />
      <HandleError />
    </BaseLayout>
  );
};
