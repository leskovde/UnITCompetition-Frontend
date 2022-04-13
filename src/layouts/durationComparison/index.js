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
	const response = await fetch('https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetAvgPassRate', {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
	});
	return response.json();
}


function dataTransform(inputData) {

	const transofrmedData = []
	for (const item of inputData) {
		const propItem = {
			label: 'Name',
			desc: 'Desc',
			data: [50, 50],
			backgroundColors: ["success", "error"],
		}
		propItem.label = item.name;
		propItem.desc = item.sfCode;
		const rate = item.avgPassRate * 100;
		propItem.data = [rate, 100-rate];
		transofrmedData.push(propItem);
	}
	return transofrmedData
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
																			 desc={"Test run duration in milliseconds"} data={data} />

					</Grid>
				</MDBox>
			</MDBox>
		</DashboardLayout>
	);
}
