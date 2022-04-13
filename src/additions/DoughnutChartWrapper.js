import MDBox from "../components/MDBox";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import DefaultDoughnutChart from "../examples/Charts/DoughnutCharts/DefaultDoughnutChart";

const mockData = {
  labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
  datasets: {
    label: "Projects",
    backgroundColors: ["info", "dark", "error", "secondary", "primary"],
    data: [15, 20, 12, 60, 20],
  },
};

const DoughnutChartWrapper = ({ xs, md, lg, title, desc, data }) => {

  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <MDBox mb={3}>
        <DefaultDoughnutChart
          title={title}
          description={desc}
          chart={data}
        />
      </MDBox>
    </Grid>
  );
};

DoughnutChartWrapper.defaultProps = {
  xs: 12,
  md: 6,
  lg: 4,
  title: "",
  desc: "",
  data: mockData
};

export default DoughnutChartWrapper;