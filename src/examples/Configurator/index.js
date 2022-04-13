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
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Material Dashboard 2 React context
import {
	useMaterialUIController,
	setOpenConfigurator,
	setFixedNavbar,
	setSidenavColor,
	setDarkMode,
} from "context";

function Configurator() {
	const [controller, dispatch] = useMaterialUIController();
	const {
		openConfigurator,
		fixedNavbar,
		sidenavColor,
		darkMode,
	} = controller;
	const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

	const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
	const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
	const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

	return (
		<ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
			<MDBox
				display="flex"
				justifyContent="space-between"
				alignItems="baseline"
				pt={4}
				pb={0.5}
				px={3}
			>
				<MDBox>
					<MDTypography variant="h5">UI Config</MDTypography>
				</MDBox>

				<Icon
					sx={({ typography: { size }, palette: { dark, white } }) => ({
						fontSize: `${size.lg} !important`,
						color: darkMode ? white.main : dark.main,
						stroke: "currentColor",
						strokeWidth: "2px",
						cursor: "pointer",
						transform: "translateY(5px)",
					})}
					onClick={handleCloseConfigurator}
				>
					close
				</Icon>
			</MDBox>

			<Divider />

			<MDBox pt={0.5} pb={3} px={3}>
				<MDBox>
					<MDTypography variant="h6">Side navigation Colors</MDTypography>

					<MDBox mb={0.5}>
						{sidenavColors.map((color) => (
							<IconButton
								key={color}
								sx={({
									borders: { borderWidth },
									palette: { white, dark, background },
									transitions,
								}) => ({
									width: "24px",
									height: "24px",
									padding: 0,
									border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
									borderColor: () => {
										let borderColorValue = sidenavColor === color && dark.main;

										if (darkMode && sidenavColor === color) {
											borderColorValue = white.main;
										}

										return borderColorValue;
									},
									transition: transitions.create("border-color", {
										easing: transitions.easing.sharp,
										duration: transitions.duration.shorter,
									}),
									backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
										linearGradient(gradients[color].main, gradients[color].state),

									"&:not(:last-child)": {
										mr: 1,
									},

									"&:hover, &:focus, &:active": {
										borderColor: darkMode ? white.main : dark.main,
									},
								})}
								onClick={() => setSidenavColor(dispatch, color)}
							/>
						))}
					</MDBox>
				</MDBox>
				<MDBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					mt={3}
					lineHeight={1}
				>
					<MDTypography variant="h6">Navbar Fixed</MDTypography>

					<Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
				</MDBox>
				<Divider />
				<MDBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
					<MDTypography variant="h6">Light / Dark</MDTypography>

					<Switch checked={darkMode} onChange={handleDarkMode} />
				</MDBox>
			</MDBox>
		</ConfiguratorRoot>
	);
}

export default Configurator;
