import React from "react";
import { NavBar } from "./navbar";
interface BaseLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const BaseLayoutChildren = ({ children }: BaseLayoutProps) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
};
