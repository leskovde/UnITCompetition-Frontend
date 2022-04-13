// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard components
import VerticalBarChartWrapper from "../../additions/VerticalBarChartWrapper";

async function fetchData() {
  const from = new Date(new Date().getTime() - 1000*60*60*3).toISOString().substring(0, 19);
  const to   = new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19);

  const data = {
    from,
    to
  }

  const response = await fetch('https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetWeeklyPassrate', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

export default function WeeklyPassrate() {
  const getWeekDays = () => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      weekDays.push(date.toLocaleString('en-us', {  weekday: 'long' }));
    }

    return weekDays.reverse();
  };

  const mockData = {
    labels: getWeekDays(),
    datasets: [{
      label: "Tests passed [%]",
      color: "dark",
      data: [15, 20, 12, 60, 20, 80, 90]
    }]
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>

            <VerticalBarChartWrapper xs={12} md={12} lg={12}
                                     title={"Weekly pass rate comparison"}
                                     desc={"Pass rate in %"} data={mockData} />

          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
