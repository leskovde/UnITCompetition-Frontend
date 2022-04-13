/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import VerticalBarChartWrapper from "../../additions/VerticalBarChartWrapper";
import ReportsBarChartWrapper from "../../additions/ReportsBarChartWrapper";
import LineChartWrapper from "../../additions/LineChartWrapper";
import ReportsLineChartWrapper from "../../additions/ReportsLineChartWrapper";
import DoughnutChartWrapper from "../../additions/DoughnutChartWrapper";
import MixedChartWrapper from "../../additions/MixedChartWrapper";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>

        {/*
        Grid with statistics cards
*/}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated"
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/*
        Grid with charts
*/}

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <VerticalBarChartWrapper xs={12} md={12} lg={12} title={"Bar Chart"}
                                     desc={"bar chart"} />

            <ReportsBarChartWrapper xs={12} md={12} lg={12} title={"Bar Chart"}
                                    desc={"bar chart"} date="just updated"
            />

            <LineChartWrapper xs={12} md={12} lg={12} title={"Line Chart"}
                              desc={"line chart"} />

            <ReportsLineChartWrapper xs={12} md={12} lg={12} title={"Line Chart"}
                                     desc={"line chart"} date="just updated"
            />

            <DoughnutChartWrapper xs={12} md={12} lg={12} title={"Doughnut Chart"}
                                  desc={"doughnut chart"} />

            <MixedChartWrapper xs={12} md={12} lg={12} title={"Mixed Chart"}
                               desc={"mixed chart"} />

          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
