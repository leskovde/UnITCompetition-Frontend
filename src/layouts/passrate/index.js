import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DoughnutChartWrapper from "../../additions/DoughnutChartWrapper";
import { useState, useEffect } from "react";

async function fetchData(fromData, toData) {
	let from = new Date(new Date().getTime() - 1000*60*60*3).toISOString().substring(0, 19);
	let to   = new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19);
	if (fromData) {
		from = fromData;
		to = toData;
	}
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

function onChange(event, fun) {
  fun(event.target.value);
}

export default function Passrate() {
	const labels = ["Passed", "Failed"];

	const [data, dataSet] = useState([])
	const [from, setFrom] = useState(new Date(new Date().getTime() - 1000*60*60*3).toISOString().substring(0, 19))
	const [to, setTo] = useState(new Date(new Date().getTime() + 1000*60*60*2).toISOString().substring(0, 19))

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
				<MDBox mt={1}>
					<Grid ml={5} container spacing={3}>
						<MDInput  type="datetime"  onChange={ (e) => onChange(e, setFrom)} label="From:" value={from} />
						<span>&nbsp;&nbsp;</span>
						<MDInput type="datetime" label="To:" onChange={ (e) => onChange(e, setTo)} value={to} />
						<span>&nbsp;&nbsp;</span>
						<MDButton onClick={() => {fetchData(from, to)}} variant="gradient" color="info" size="medium">Submit</MDButton>
					</Grid>
				</MDBox>

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
