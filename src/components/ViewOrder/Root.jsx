import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import BreadCrumbs from "./components/BreadCrumbs";
import img from "./assets/image.png";

import ProductDetail from "./components/ProductDetail";
import Tracker from "./components/Tracker";
import DeliveryInfo from "./components/DeliveryInfo";
import OrderSummary from "./components/OrderSummary";

const ViewOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isCancelledModalOpen, setIsCancelledModalOpen] = React.useState(false);

  const [isCancelled, setIsCancelled] = useState(false);
  const [isDelivered, setIsDelivered] = useState(true);

  //stepper active step, change this value to see different steps
  const [activeStep, setActiveStep] = useState(isDelivered ? 3 : 0);

  const isReturn = location.pathname === "/return";

  const data = {
    product: {
      brand: "Tren Me",
      name: "Women Floral A-Line Maxi Dress",
      price: "499",
      discount: "35% off",
      img: img,
      size: "S",
      qty: "1",
    },
    trackingData: {
      orderId: "20241108-04",
      orderConfirmedDate: "Dec 24, 2024",
      estimatedDelivery: "Dec 30, 2024",
      orderConfirmedDay: "Tue, 24th Dec",
      orderConfirmedTime: "6:12 AM",
      expectedBy: "Mon 30th",
      orderConfirmedWithYear: "Tue, 24th Dec '24",
      sellerMsg: "Seller has processed your order",
      pickupData: "Wed, 25th Dec '24 - 7:05pm",
      shippedData: "Wed, 25th Dec '24 - 8:12pm",
      shippedDay: "Sun, 15th Sep '24",
      shippedMsg: "Order ID or pick up ID - Your item has been shipped.",
      delieveryExpected: "Thu 19th Sep",
    },
    deliveryInfo: {
      address:
        "Flat No. 12B, Sunshine Apartments Plot No. 45, MG Road Bandra West,.",
      city: "Mumbai, Maharashtra 400050",
      country: "UK",
      mobile: "9876543210",
    },
    summary: {
      mrp: 13349.54,
      discount: 20,
      delivery: 0,
      tax: 149.54,
      total: 11139.33,
    },
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={{ xs: 2, md: 2 }}>
        <BreadCrumbs isReturn={isReturn} />
        {isMobile ? (
          <Stack spacing={1}>
            <ProductDetail product={data.product} />

            <>
              <Tracker
                trackingData={data.trackingData}
                isCancelled={isCancelled}
                isDelivered={isDelivered}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
              <Divider />
              <DeliveryInfo
                deliveryInfo={data.deliveryInfo}
                isCancelled={isCancelled}
                setIsCancelledModalOpen={setIsCancelledModalOpen}
                isDelivered={isDelivered}
                onNotHappy={() => navigate("/return")}
              />
              <Divider />
              <OrderSummary summary={data.summary} />
            </>
          </Stack>
        ) : (
          <Box sx={{ display: "flex", gap: { md: 2, lg: 3 } }}>
            <Box
              sx={{
                width: { md: "35%", lg: "30%" },
                minWidth: { md: "300px" },
              }}
            >
              <ProductDetail product={data.product} />
            </Box>
            <Stack spacing={1} sx={{ flex: 1 }}>
              <>
                <Tracker
                  trackingData={data.trackingData}
                  isCancelled={isCancelled}
                  isDelivered={isDelivered}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
                <DeliveryInfo
                  deliveryInfo={data.deliveryInfo}
                  isCancelled={isCancelled}
                  setIsCancelledModalOpen={setIsCancelledModalOpen}
                  isDelivered={isDelivered}
                  onNotHappy={() => navigate("/return")}
                />
                <OrderSummary summary={data.summary} />
              </>
            </Stack>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default ViewOrder;
