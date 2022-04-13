// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";


export default function data() {
  const Product = ({ name, sfstring }) => (
	<MDBox display="flex" alignItems="center" lineHeight={1}>
	  <MDBox ml={2} lineHeight={1}>
		<MDTypography display="block" variant="button" fontWeight="medium">
		  {name}
		</MDTypography>
		<MDTypography variant="caption">{sfstring}</MDTypography>
	  </MDBox>
	</MDBox>
  );

  const Proc = ({ num }) => (
	<MDBox lineHeight={1} textAlign="left">
	  <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
		{num} %
	  </MDTypography>
	</MDBox>
  );

  const Txt = ({ num }) => (
	<MDBox lineHeight={1} textAlign="left">
	  <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
		{num} min
	  </MDTypography>
	</MDBox>
  );

  return {
	columns: [
	  { Header: "Product name", accessor: "name", width: "30%", align: "left" },
	  { Header: "Avg pass rate", accessor: "pass", align: "center" },
	  { Header: "Avg test length", accessor: "test", align: "center" },
	  { Header: "State", accessor: "succ", align: "center" },
	],

	rows: [
		{
			name: <Product name="IL4 PG24A" sfstring="PG24ANV21510A00" />,
			pass: <Proc num="79" />,
			test: <Txt num="12.1" />,
			succ: (
				<MDBox ml={-1}>
					<MDBadge badgeContent="GOOD" color="success" variant="gradient" size="sm" />
				</MDBox>
			),
		},
		{
			name: <Product name="IR4 PG24A" sfstring="PG24ANV21515S40" />,
			pass: <Proc num="23" />,
			test: <Txt num="8.2" />,
			succ: (
				<MDBox ml={-1}>
					<MDBadge badgeContent="BAD" color="error" variant="gradient" size="sm" />
				</MDBox>
			),
		},
		{
			name: <Product name="IR4 PG34A" sfstring="PG24ANV21515Q40" />,
			pass: <Proc num="34" />,
			test: <Txt num="3.1" />,
			succ: (
				<MDBox ml={-1}>
					<MDBadge badgeContent="BAD" color="error" variant="gradient" size="sm" />
				</MDBox>
			),
		},
		{
			name: <Product name="IT4 PG24A" sfstring="PG24ANV21515R40" />,
			pass: <Proc num="93" />,
			test: <Txt num="5.9" />,
			succ: (
				<MDBox ml={-1}>
					<MDBadge badgeContent="GOOD" color="success" variant="gradient" size="sm" />
				</MDBox>
			),
		},
		{
			name: <Product name="IC4 PG24A" sfstring="PG24ANV21515L40" />,
			pass: <Proc num="95" />,
			test: <Txt num="6.5" />,
			succ: (
				<MDBox ml={-1}>
					<MDBadge badgeContent="GOOD" color="success" variant="gradient" size="sm" />
				</MDBox>
			),
		},
	],
  };
}
