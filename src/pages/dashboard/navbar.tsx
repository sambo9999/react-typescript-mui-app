import { Grid } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
xs={12}
      >
        <Grid
          item
          // justifyContent="flex-start"
          alignItems="flex-start"
        >
          name
        </Grid>
        <Grid
          item
          // justifyContent="flex-end"
          alignItems="flex-start"
        >
          menu
        </Grid>
      </Grid>
    </div>
  );
};
