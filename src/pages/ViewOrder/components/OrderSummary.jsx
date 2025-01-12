import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Modal,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
const products = [
  {
    id: 1,
    name: "Printed Fit & Flare Dress",
    price: "999",
    image: image2,
  },
  {
    id: 2,
    name: "Printed Fit & Flare Dress",
    price: "899",
    image: image3,
  },
  {
    id: 3,
    name: "Printed Fit & Flare Dress",
    price: "899",
    image: image4,
  },
  {
    id: 4,
    name: "Printed Fit & Flare Dress",
    price: "899",
    image: image5,
  },
];
// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "50%" },
  height: 460,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 3,
};

function OrderSummary({ summary }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const PaymentDetails = () => (
    <Box sx={modalStyle}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Payment Details</Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ mb: 2 }}>
        {[
          { label: "MRP", value: "₹2,999" },
          { label: "Discount", value: "-₹2,499" },
          { label: "Discounted Price", value: "₹499" },
          { label: "Taxes", value: "₹0" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography color="black">{item.label}</Typography>
            <Typography color={item.color || "text.primary"}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6">Total Paid</Typography>
        <Typography variant="h6">₹499</Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          bgcolor: "#f5f5f5",
          p: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#EBF6F0",
            color: "#455F76",
            width: "100%",
            height: "45px",
          }}
        >
          Payment on Delivery
        </Typography>
        <Typography variant="body2" sx={{ color: "#455F76", width: "100%" }}>
          Delivery charges free!
        </Typography>
      </Paper>
    </Box>
  );

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          bgcolor: "grey.50",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <Typography variant="h6" component="span" sx={{ mr: 0.5 }}>
            ₹499
          </Typography>
          <IconButton size="small">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          color="#212121"
          sx={{ fontWeight: 500, fontSize: "20px" }}
        >
          Pay on Delivery
        </Typography>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="payment-details-modal"
        aria-describedby="payment-details-description"
      >
        <PaymentDetails />
      </Modal>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Similar Products
        </Typography>

        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Card
                sx={{
                  boxShadow: "none",
                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{ borderRadius: 1 }}
                />
                <CardContent sx={{ px: 1, py: 1 }}>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle2">₹{product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default OrderSummary;
