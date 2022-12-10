import React from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { CallBackFunction } from "../../hooks/callBack";
import { ReactQuery } from "../../react-query";
import HandleError from "../../swr/error";
import { MakeFullName } from "../../typescript/generic";
import { TypescriptLanguage } from "../../typescript/indext";

export const SwrPage = () => {
  return (
    <BaseLayout>
      {/* <CallBackFunction />
      <HandleError /> */}
      <TypescriptLanguage />
      {/* <GetFullName firstName="sambo"  lastName="sambo" /> */}
      {/* <ReactQuery /> */}
    </BaseLayout>
  );
};
