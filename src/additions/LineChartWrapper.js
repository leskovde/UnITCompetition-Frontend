import MDBox from "../components/MDBox";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import DefaultLineChart from "../examples/Charts/LineCharts/DefaultLineChart";

const mockData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Organic Search",
      color: "info",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      label: "Referral",
      color: "dark",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
    {
      label: "Direct",
      color: "primary",
      data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
    },
  ],
};

const LineChartWrapper = ({ xs, md, lg, title, desc, data }) => {

  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <MDBox mb={3}>
        <DefaultLineChart
          title={title}
          description={desc}
          chart={data}
        />
      </MDBox>
    </Grid>
  );
};

LineChartWrapper.defaultProps = {
  xs: 12,
  md: 6,
  lg: 4,
  title: "",
  desc: "",
  data: mockData
};

export default LineChartWrapper;