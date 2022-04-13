import MDBox from "../components/MDBox";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MixedChart from "../examples/Charts/MixedChart";

const mockData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      chartType: "thin-bar",
      label: "Organic Search",
      color: "dark",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      chartType: "gradient-line",
      label: "Referral",
      color: "info",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ],
};

const MixedChartWrapper = ({ xs, md, lg, title, desc, data }) => {

  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <MDBox mb={3}>
        <MixedChart
          title={title}
          description={desc}
          chart={data}
        />
      </MDBox>
    </Grid>
  );
};

MixedChartWrapper.defaultProps = {
  xs: 12,
  md: 6,
  lg: 4,
  title: "",
  desc: "",
  data: mockData
};

export default MixedChartWrapper;