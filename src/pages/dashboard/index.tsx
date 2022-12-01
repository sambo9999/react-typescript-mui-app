import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import { Container } from "./container";
import { Divider } from "./divider";
import MiniDrawer from "./drawer";
import { ExtendsHeader } from "./extendsHeader";
import { Footer } from "./footer";
import { ScrollLayout } from "./scollLayout";

const Grids = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    marginLeft: "5px",
  },

  [theme.breakpoints.up("sm")]: {
    marginLeft: "5px",
  },

  [theme.breakpoints.up("md")]: {
    marginLeft: "5px",
  },

  [theme.breakpoints.up("lg")]: {
    marginLeft: "17px",
  },

  [theme.breakpoints.up("xl")]: {
    marginLeft: "17px",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Navigator = styled(Item)({
  color: "dark",
  height: "60px",
  width: "100%",
  textAlign: "left",
  borderRadius: "10px",
  background: "#ggg",
});

const Testing = () => {
  return (
    <React.Fragment>
      <Grid item>
        <Navigator></Navigator>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Grids item xs={"auto"} marginBottom={0} marginTop={0} marginRight={0}>
          <MiniDrawer />
        </Grids>
        <Grid item xs>
          {/* Header */}
          <Divider />
          <ScrollLayout>
            <ExtendsHeader />
            <Divider />
            {/* Body */}
            <Container />
            <Divider />
            {/* Footer */}
            <Footer />
          </ScrollLayout>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Testing;
