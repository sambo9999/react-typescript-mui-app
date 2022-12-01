import React from "react";
import { Button, Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ExtendsHeaderComponents = styled(Item)({
  color: "dark",
  height: "10vh",
  width: "100%",
  textAlign: "left",
  borderRadius: "10px",
  background: "#ddd",
});

const Cards = styled(Item)({
  color: "dark",
  height: "250px",
  width: "100%",
  borderRadius: "10px",
  background: "#ddd",
  // boxShadow:
  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
});

export const ExtendsHeader = () => {
  return (
    <div>
      <ExtendsHeaderComponents>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <p>ExtendHeader</p>
          </Grid>
        </Grid>
      </ExtendsHeaderComponents>
    </div>
  );
};
