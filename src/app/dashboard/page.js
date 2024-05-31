import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "../ui/dashboard/card/Card";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transaction from "../ui/transaction/Transaction";
import Chart from "../ui/dashboard/chart/Chart";

const Dashboard = () => {
  return (
    <Box mt={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card />
            </Grid>
          </Grid>
          <Grid mt={2} item xs={12} md={6} lg={12}>
            <Transaction />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box gap={8} sx={{ display: "flex", flexDirection: "column" ,position:"sticky"}}>
            <Rightbar />
            <Rightbar />
          </Box>
        </Grid>
      </Grid>
      <Grid mt={1} container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Chart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
