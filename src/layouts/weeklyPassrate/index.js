import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerticalBarChartWrapper from "../../additions/VerticalBarChartWrapper";
import { useState, useEffect } from "react";

async function fetchData() {

	const response = await fetch('https://unitchallenge.azurewebsites.net/api/BaseAnalysis/GetWeeklyPassRate', {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
	});
	return response.json();
}

function getWeekDays() {
	const weekDays = [];
	for (let i = 0; i < 7; i++) {
		const date = new Date();
		date.setDate(date.getDate() - i);
		weekDays.push(date.toLocaleString('en-us', {  weekday: 'long' }));
	}
	return weekDays.reverse();
};

function dataTransform(inputData) {
	const transofrmedData = []
	for (const item of inputData) {
		const propItem = {
			name: ['mock name'],
			labels: getWeekDays(),
			datasets: [{
				label: "Tests passed [%]",
				color: "dark",
				data: [15, 20, 12, 60, 20, 80, 90]
			}]
		}
		propItem.name = [item.name];
		propItem.datasets[0].data = item.weeklyPassRate.map(x => x * 100);
		transofrmedData.push(propItem);
	}

	return transofrmedData
}

export default function WeeklyPassrate() {
	const [data, dataSet] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
			let response = await fetchData();
			const data = dataTransform(response);
			dataSet(data);
		}
	
		fetchMyAPI()
	}, []);

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<MDBox mt={2}>
					<Grid container spacing={3}>
						{
							data.map((datasets) => {
								return <VerticalBarChartWrapper key={datasets.name} xs={12} md={12} lg={12}
									title={datasets.name[0]}
									desc={"Pass rate in %"} data={datasets} />
							})
						}
					</Grid>
				</MDBox>
			</MDBox>
		</DashboardLayout>
	);
}
