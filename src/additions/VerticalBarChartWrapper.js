import MDBox from "../components/MDBox";
import VerticalBarChart from "../examples/Charts/BarCharts/VerticalBarChart";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const mockData = {
  labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
  datasets: [{
    label: "Sales by age",
    color: "dark",
    data: [15, 20, 12, 60, 20, 15]
  }]
};

const VerticalBarChartWrapper = ({ xs, md, lg, title, desc, data }) => {

  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <MDBox mb={3}>
        <VerticalBarChart
          title={title}
          description={desc}
          chart={data}
        />
      </MDBox>
    </Grid>
  );
};

VerticalBarChartWrapper.defaultProps = {
  xs: 12,
  md: 6,
  lg: 4,
  title: "",
  desc: "",
  data: mockData
};

export default VerticalBarChartWrapper;