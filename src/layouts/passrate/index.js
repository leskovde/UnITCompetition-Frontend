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
  const mockData = {
    labels: ["Passed", "Failed"],
    datasets: {
      label: "Projects",
      backgroundColors: ["success", "error"],
      data: [95, 5],
    },
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>

            <h2>Product name x</h2>

            <DoughnutChartWrapper xs={12} md={12} lg={12} title={"Doughnut Chart"}
                                  desc={"doughnut chart"} data={mockData} />

          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
