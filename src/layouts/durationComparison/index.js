// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard components
import VerticalBarChartWrapper from "../../additions/VerticalBarChartWrapper";

function fetchData() {
  return "";
}

export default function DurationComparison() {
  const mockData = {
    labels: ["Product1", "Product2", "Product3", "Product69", "Product420"],
    datasets: [{
      label: "Test duration [s]",
      color: "dark",
      data: [15, 20, 12, 60, 20]
    }]
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>

            <VerticalBarChartWrapper xs={12} md={12} lg={12}
                                     title={"Duration comparison for " + mockData.labels.join(", ")}
                                     desc={"Test run duration in milliseconds"} data={mockData} />

          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
