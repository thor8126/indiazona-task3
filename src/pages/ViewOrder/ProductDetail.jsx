import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function ProductDetail({ product }) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: "0 0 396px",
        p: 3,
        backgroundColor: "#EEF5FA",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            padding: 2.5,
            height: 350,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={product.img} alt="product" style={{ height: "100%" }} />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingX: 1, gap: 1 }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {product.brand}
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "medium", lineHeight: "24px" }}
          >
            {product.name}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingX: 1,
            display: "flex",
            flexDirection: "row",
            gap: 6,
          }}
        >
          <Typography>Size: {product.size}</Typography>
          <Typography>Qty: {product.qty}</Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "baseline", gap: 2, paddingX: 1 }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
            ₹{product.price}
          </Typography>
          <Typography sx={{ color: "#FF944E" }}>{product.discount}</Typography>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            textTransform: "none",
            height: 48,
            fontSize: "18px",
            fontWeight: "medium",
            color: "#5B5B5B",
            boxShadow: "none",
            display: "flex",
            border: "none",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Exchange Product
        </Button>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 1 }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#FF944E",
              height: 48,
              fontSize: "18px",
            }}
          >
            View Product
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              textTransform: "none",
              color: "#E57329",
              height: 48,
              fontSize: "18px",
              fontWeight: "medium",
            }}
          >
            Reorder Product
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProductDetail;
