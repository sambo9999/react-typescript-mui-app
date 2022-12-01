import React from "react";
import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cards = styled(Item)({
  color: "dark",
  height: "250px",
  width: "100%",
  borderRadius: "10px",
  background: "#ddd",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
});

const Content = styled(Item)({
  color: "dark",
  height: "380px",
  width: "100%",
  borderRadius: "10px",
  background: "#ddd",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
});

export interface DashboardResponse {
  message: React.ReactNode;
  params: any;
  type: string;
  auditDetails: { created_by: string; audited_branch: string };
  code: string;
  createdDate: number;
  deleted?: any;
  enabled: boolean;
  id: any;
  index: number;
  status: string;
  title: string;
  updatedDate: number;
  properties: any;
  widgets: {
    allowWhen: any;
    content: string;
    index: number;
    properties: {};
    styles: [];
    title: string;
    type: string;
    data: any[];
  }[];
}

const BaseLayoutGrid2 = () => {
  return (
    <div>
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        xs={12}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Content>
            {/* {data?.data.map((item: any, index: number) => item.title)} */}
          </Content>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Content>Tow Grid</Content>
        </Grid>
      </Grid>
    </div>
  );
};

const BaseLayoutGrid3 = () => {
  return (
    <div>
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        xs={12}
      >
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Cards>Three Grid</Cards>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Cards>Three Grid</Cards>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Cards>Three Grid</Cards>
        </Grid>
      </Grid>
    </div>
  );
};

export { BaseLayoutGrid2, BaseLayoutGrid3 };
