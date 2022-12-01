import { styled } from "@mui/material";
import React from "react";

const Scroll = styled("div")({
  // height: "200px",
  // width: "250px",
  overflow: "auto",
  overflowX: "hidden",
});

interface ScrollLayoutProps {
  children: React.ReactNode;
}
export const ScrollLayout = ({ children }: ScrollLayoutProps) => {
  return (
    <React.Fragment>
      <Scroll>{children}</Scroll>
    </React.Fragment>
  );
};
