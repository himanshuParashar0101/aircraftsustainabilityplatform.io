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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Shipment Completed
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="568 Minor Parts Change"
          dateTime="Total This Year"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order from airline "
          dateTime="One Day Ago"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title=" Product Shipped to Recycling Facility"
          dateTime="totday"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="payments from Airline"
          dateTime="One Week Ago"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Shipment Recieved From Manufactrer"
          dateTime="Today this morning"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
