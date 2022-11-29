import React from "react";
import { NavBar } from "./navbar";
interface BaseLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
};
