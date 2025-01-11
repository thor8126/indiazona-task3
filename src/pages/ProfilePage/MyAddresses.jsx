import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AddAddressModal from "./AddAddressModal";

const MyAddresses = () => {
  const [selectedAddress, setSelectedAddress] = useState("7667434402");
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Sample address data
  const addresses = [
    {
      id: "7667434402",
      name: "Shubham Kumar Kurrey",
      address:
        "Door No. 43-4-12/1, 2nd Floor, Vyshvaa Magnum, Opp. Indian Oil, Railway New Colony",
      area: "Visakhapatnam, Andhra Pradesh - 530016",
      type: "Home",
    },
    {
      id: "7667434403",
      name: "Shubham Kumar Kurrey",
      address: "Flat no 402, Karthikeya Paradise, Railway New Colony",
      area: "Visakhapatnam, Andhra Pradesh - 530016",
      type: "Home",
    },
  ];

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <Box sx={{ margin: "0 auto", p: { xs: 1, sm: 2 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: 2, sm: 0 },
          mb: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Select Delivery Address
        </Typography>
        <Button
          onClick={() => setOpenAddressModal(true)}
          variant="contained"
          startIcon={<AddIcon />}
          size="small"
          fullWidth={isMobile}
          sx={{
            backgroundColor: "#ff7043",
            "&:hover": { backgroundColor: "#f4511e" },
          }}
        >
          Add New Address
        </Button>
      </Box>

      <RadioGroup value={selectedAddress} onChange={handleAddressChange}>
        {addresses.map((addr) => (
          <Paper
            key={addr.id}
            sx={{
              mb: 2,
              p: 2,
              border: "1px solid #e0e0e0",
              "&:hover": { boxShadow: 2 },
            }}
          >
            <FormControlLabel
              value={addr.id}
              control={<Radio />}
              label={
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: { xs: 1, sm: 0 },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "space-between" },
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                      variant="subtitle1"
                      component="span"
                    >
                      {addr.name}
                      <Typography
                        variant="caption"
                        component="span"
                        sx={{
                          bgcolor: "#f5f5f5",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          border: "1px solid #455F76",
                        }}
                      >
                        {addr.type}
                      </Typography>
                      {!isMobile && (
                        <Typography
                          sx={{
                            color: "#455F76",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          {addr.id}
                        </Typography>
                      )}
                    </Typography>

                    {!isMobile && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          width: { xs: "100%", sm: "auto" },
                          justifyContent: {
                            xs: "space-between",
                            sm: "flex-end",
                          },
                        }}
                      >
                        <IconButton
                          size="small"
                          sx={{ color: "#ff7043" }}
                          onClick={() => console.log(`Edit address ${addr.id}`)}
                        >
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.125 10.5018L2.5 13.0018L5 12.3768L12.2413 5.13551C12.4756 4.9011 12.6072 4.58322 12.6072 4.25176C12.6072 3.92031 12.4756 3.60242 12.2413 3.36801L12.1337 3.26051C11.8993 3.02618 11.5815 2.89453 11.25 2.89453C10.9185 2.89453 10.6007 3.02618 10.3663 3.26051L3.125 10.5018Z"
                              stroke="#FF944E"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.125 10.5L2.5 13L5 12.375L11.25 6.125L9.375 4.25L3.125 10.5Z"
                              fill="#FF944E"
                            />
                            <path
                              d="M9.375 4.25L11.25 6.125M8.125 13H13.125"
                              stroke="#FF944E"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>{" "}
                          <Typography
                            sx={{ fontSize: "16px", fontWeight: 500 }}
                          >
                            Edit
                          </Typography>
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                  <Typography sx={{ mt: 1 }} variant="body2" color="#656565">
                    {addr.address}
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} variant="body2" color="#656565">
                    {addr.area}
                  </Typography>
                  {isMobile && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        width: { xs: "100%", sm: "auto" },
                        justifyContent: {
                          xs: "space-between",
                          sm: "flex-end",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#455F76",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        {addr.id}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{ color: "#ff7043" }}
                        onClick={() => console.log(`Edit address ${addr.id}`)}
                      >
                        <svg
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.125 10.5018L2.5 13.0018L5 12.3768L12.2413 5.13551C12.4756 4.9011 12.6072 4.58322 12.6072 4.25176C12.6072 3.92031 12.4756 3.60242 12.2413 3.36801L12.1337 3.26051C11.8993 3.02618 11.5815 2.89453 11.25 2.89453C10.9185 2.89453 10.6007 3.02618 10.3663 3.26051L3.125 10.5018Z"
                            stroke="#FF944E"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.125 10.5L2.5 13L5 12.375L11.25 6.125L9.375 4.25L3.125 10.5Z"
                            fill="#FF944E"
                          />
                          <path
                            d="M9.375 4.25L11.25 6.125M8.125 13H13.125"
                            stroke="#FF944E"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                          Edit
                        </Typography>
                      </IconButton>
                    </Box>
                  )}
                </Box>
              }
              sx={{
                margin: 0,
                width: "100%",
                alignItems: "flex-start",
                ".MuiFormControlLabel-label": {
                  width: "100%",
                },
              }}
            />
          </Paper>
        ))}
      </RadioGroup>
      <AddAddressModal
        open={openAddressModal}
        onClose={() => setOpenAddressModal(false)}
        onSave={(newAddress) => {
          // Handle saving the new address
          console.log("New address:", newAddress);
          setOpenAddressModal(false);
        }}
      />
    </Box>
  );
};

export default MyAddresses;
