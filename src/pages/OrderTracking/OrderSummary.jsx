import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

function OrderSummary({ summary }) {
  return (
    <Paper elevation={0} sx={{ paddingX: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">Order Summary</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>MRP</Typography>
            <Typography>₹{summary.mrp}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Discount</Typography>
            <Typography color="error.main">({summary.discount}%)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Delivery</Typography>
            <Typography color="success.main">
              {summary.delivery ? `₹ ${summary.delivery}` : "Free"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Tax</Typography>
            <Typography>₹ {summary.tax}</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹ {summary.total}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default OrderSummary;
