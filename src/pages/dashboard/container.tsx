import { Paper, styled } from "@mui/material";
import React from "react";
import { BaseLayoutGrid2, BaseLayoutGrid3 } from "./baseLayout";
import { Divider } from "./divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContainerComponent = styled(Item)({
  color: "dark",
  height: "calc(85vh - 135px)",
  width: "100%",
  textAlign: "left",
  borderRadius: "10px",
  background: "transparency",
});

export const Container = () => {
  return (
    <React.Fragment>
      <ContainerComponent>
        <BaseLayoutGrid3 />
        <Divider />
        <BaseLayoutGrid2 />
      </ContainerComponent>
    </React.Fragment>
  );
};
