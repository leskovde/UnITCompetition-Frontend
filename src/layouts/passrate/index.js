import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DoughnutChartWrapper from "../../additions/DoughnutChartWrapper";
import { useState, useEffect } from "react";

async function fetchData() {
	const from = new Date(new Date().getTime() - 1000*60*60*3).toISOString().substring(0, 19);
	const to   = new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19);

	const data = {
		from,
		to
	}

	const response = await fetch('https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetAvgPassRate', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
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

export default function Passrate() {
	const labels = ["Passed", "Failed"];

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
				<MDInput py={5} type="datetime" label="From:" value={new Date(new Date().getTime() - 1000*60*60*3).toISOString().substring(0, 19)} />
				<MDInput type="datetime" label="To:" value={new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19)} />
				<MDBox mt={2}>
					<Grid container spacing={3}>
						{
							data.map((datasets) => {
								return <DoughnutChartWrapper  key={datasets.label} xs={12} md={12} lg={12} title={datasets.label}
																							desc={datasets.desc} data={{labels, datasets}} />
							})
						}
					</Grid>
				</MDBox>
			</MDBox>
		</DashboardLayout>
	);
}
