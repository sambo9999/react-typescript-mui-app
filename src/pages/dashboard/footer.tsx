import React from "react";
import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FooterComponents = styled(Item)({
  color: "dark",
  height: "calc(10vh - 15px)",
  width: "100%",
  textAlign: "left",
  borderRadius: "10px",
  background: "#ddd",
});

export const Footer = () => {
  return (
    <React.Fragment>
      <FooterComponents>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <p>Cubetiqs</p>
          </Grid>
        </Grid>
      </FooterComponents>
    </React.Fragment>
  );
};
