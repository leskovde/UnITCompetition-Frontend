// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard components
import VerticalBarChartWrapper from "../../additions/VerticalBarChartWrapper";
import ReportsBarChartWrapper from "../../additions/ReportsBarChartWrapper";
import LineChartWrapper from "../../additions/LineChartWrapper";
import ReportsLineChartWrapper from "../../additions/ReportsLineChartWrapper";
import DoughnutChartWrapper from "../../additions/DoughnutChartWrapper";
import MixedChartWrapper from "../../additions/MixedChartWrapper";

function fetchData() {
  return ''
}

export default function Passrate() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>Pass Rate</h2>
      <MDBox py={3}>
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
    </DashboardLayout>
  );
}
