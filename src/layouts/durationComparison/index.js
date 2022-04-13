// @mui material components
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard components

import HorizontalBarChartWrapper from "../../additions/HorizontalBarChartWrapper";

async function fetchData() {
	let from = new Date(new Date().getTime() - 100000*60*60*24*30).toISOString().substring(0, 19);
	let to   = new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19);
	const response = await fetch('https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetTestDurations', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({from, to})
	});
	return response.json();
}


function dataTransform(inputData) {
	const transofrmedData = [{
		labels: [],
		datasets: [{
			label: "Test duration [s]",
			color: "dark",
			data: []
		}]
	}]

		
	for (const dato of inputData) {
		transofrmedData[0].labels.push(dato.name)
		transofrmedData[0].datasets[0].data.push(dato.testDuration)
	}

	return transofrmedData
}

export default function DurationComparison() {
	const [data, dataSet] = useState([])

	useEffect(() => {
		async function fetchMyAPI() {
			let response = await fetchData();
			const data = dataTransform(response);
			dataSet(data);
		}
	
		fetchMyAPI()
	}, [])

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<MDBox mt={2}>
				<MDBox mt={1}>
					<Grid ml={5} container spacing={3}>
						<MDInput  type="datetime" label="From:" value="2020-20-1T15-21-15" />
						<span>&nbsp;&nbsp;</span>
						<MDInput type="datetime" label="To:"  value="2020-20-1T15-21-15"/>
						<span>&nbsp;&nbsp;</span>
						<MDButton variant="gradient" color="info" size="medium">Submit</MDButton>
					</Grid>
				</MDBox>
					<Grid container spacing={3} mt={2}>

						<HorizontalBarChartWrapper xs={12} md={12} lg={12}
																			title={"Duration comparison:"} // for " + mockData.labels.join(", ")}
																			 desc={"Test run duration in milliseconds"} data={data[0]} />

					</Grid>
				</MDBox>
			</MDBox>
		</DashboardLayout>
	);
}
