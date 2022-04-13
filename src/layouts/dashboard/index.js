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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import ReportsBarChartWrapper from "../../additions/ReportsBarChartWrapper";
import ReportsLineChartWrapper from "../../additions/ReportsLineChartWrapper";
import MixedChartWrapper from "../../additions/MixedChartWrapper";
import { useEffect, useState } from "react";
import DoughnutChartWrapper from "../../additions/DoughnutChartWrapper";


async function fetchMergedWeeklyPassRateData() {

  const response = await fetch("https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetMergedWeeklyPassRate", {
    method: "GET", mode: "cors", headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}


async function fetchStats() {

  const response = await fetch("https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetWeeklyStats", {
    method: "GET", mode: "cors", headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}

function getWeekDays() {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    weekDays.push(date.toLocaleString("en-us", { weekday: "long" }).substring(0, 3));
  }
  return weekDays.reverse();
}

function dataTransform(inputData) {
  const propItem = {
    labels: getWeekDays(), datasets: {
      label: "Tests passed [%]", color: "dark", data: inputData.map(x => x * 100)
    }
  };

  return propItem;
}

function parseStats(inputData) {
  return {
    weeklyPassed: inputData.passed,
    weeklyFailed: inputData.failed,
    averageDuration: inputData.averageRunTime,
    numberOfGroups: inputData.numberOfGroups,
    weeklyPassedDiff: inputData.passedDiff,
  }
}

export default function Dashboard() {
  const [weeklyPassRateData, weeklyPassRateDataSet] = useState([]);
  const [weeklyAverageDurationData, weeklyAverageDurationSet] = useState([]);
  const [weeklyPassed, weeklyPassedSet] = useState([]);
  const [weeklyFailed, weeklyFailedSet] = useState([]);
  const [weeklyPassedDiff, weeklyPassedDiffSet] = useState([]);
  const [numberOfGroups, numberOfGroupsSet] = useState([]);

  useEffect(() => {
    async function fetchWeeklyPassRateData() {
      let response = await fetchMergedWeeklyPassRateData();
      const data = dataTransform(response);
      weeklyPassRateDataSet([data]);
    }

    async function fetchWeeklyStats() {
      let response = await fetchStats();
      const stats = parseStats(response);

      weeklyAverageDurationSet(stats.averageDuration);
      weeklyPassedSet(stats.weeklyPassed);
      weeklyFailedSet(stats.weeklyFailed);
      weeklyPassedDiffSet(stats.weeklyPassedDiff);
      numberOfGroupsSet(stats.numberOfGroups);
    }

    fetchWeeklyPassRateData();
    fetchWeeklyStats();
  }, []);

  return (<DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="leaderboard"
                title="Tests Passed"
                count={weeklyPassed}
                percentage={{
                  color: weeklyPassedDiff > 0.0 ? "success" : "error",
                  amount: (weeklyPassedDiff >= 0.0 ? "+" + (weeklyPassedDiff * 100).toFixed(2) : (weeklyPassedDiff * 100).toFixed(2)) + "%",
                  label: "than last week"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="leaderboard"
                title="Tests Failed"
                count={weeklyFailed}
                percentage={{
                  color: weeklyPassedDiff > 0.0 ? "success" : "error",
                  amount: (weeklyPassedDiff < 0.0 ? "+" + (-weeklyPassedDiff * 100).toFixed(2) : (-weeklyPassedDiff * 100).toFixed(2)) + "%",
                  label: "than last week"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="leaderboard"
                title="Number of Test Groups"
                count={numberOfGroups}
                percentage={{
                  color: "info", amount: "281", label: "total groups"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Average Duration"
                count={weeklyAverageDurationData + "s"}
                percentage={{
                  color: "success", amount: "+3%", label: "faster than last week"
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>

            <ReportsLineChartWrapper xs={12} md={12} lg={12} title={"Aggregated Weekly Pass Rate"}
                                     desc={"Test pass rate in %"} date="just updated"
                                     data={weeklyPassRateData[0]}
            />

          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>);
}
