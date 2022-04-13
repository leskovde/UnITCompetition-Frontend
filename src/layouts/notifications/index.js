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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Notifications() {


	const alertContent = (name) => (
		<MDTypography variant="body2" color="white">
			A simple {name} alert with{" "}
			<MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
				an example link
			</MDTypography>
			. Give it a click if you like.
		</MDTypography>
	);



	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox mt={6} mb={3}>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12} lg={8}>
						<Card>
							<MDBox p={2}>
								<MDTypography variant="h5">Alerts</MDTypography>
							</MDBox>
							<MDBox pt={2} px={2}>
								<MDAlert color="error" dismissible>
									{alertContent("error")}
								</MDAlert>
								<MDAlert color="warning" dismissible>
									{alertContent("warning")}
								</MDAlert>
								<MDAlert color="warning" dismissible>
									{alertContent("warning")}
								</MDAlert>
							</MDBox>
						</Card>
					</Grid>
				</Grid>
			</MDBox>
		</DashboardLayout>
	);
}

export default Notifications;
