import MDBox from "../components/MDBox";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import ReportsBarChart from "../examples/Charts/BarCharts/ReportsBarChart";

const mockData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: {
    label: "Sales",
    data: [450, 200, 100, 220, 500, 100, 400, 230, 500]
  },
};

const ReportsBarChartWrapper = ({ xs, md, lg, color, title, desc, date, data }) => {

  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <MDBox mb={3}>
        <ReportsBarChart
          color={color}
          title={title}
          description={desc}
          date={date}
          chart={data}
        />
      </MDBox>
    </Grid>
  );
};

ReportsBarChartWrapper.defaultProps = {
  xs: 12,
  md: 6,
  lg: 4,
  color: "info",
  title: "",
  desc: "",
  date: "",
  data: mockData
};

export default ReportsBarChartWrapper;