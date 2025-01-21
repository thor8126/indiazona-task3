import React, { useState } from "react";
import Form from "./Form";
import {
  Box,
  Typography,
  Button,
  Grid,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #E9F5FF, #FFFDF8)",
        padding: 6,
        paddingBottom: 0,
      }}
    >
      <Grid
        container
        spacing={1.8}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left section */}
        <Grid item xs={12} md={7.7}>
          <Box sx={{ mb: { xs: 4, md: 0 }, py: 5.5 }}>
            <Box sx={{ maxWidth: "85%" }}>
              <Typography
                sx={{
                  color: "#445469",
                  fontWeight: 700,
                  fontSize: { xs: "30px", md: "61px" },
                  lineHeight: { xs: "34px", md: "92px" },
                  fontFamily: "Mukta Mahee !important",
                }}
              >
                आपकी दुकान,
              </Typography>
              <Typography
                sx={{
                  color: "#FF944E",
                  fontWeight: 700,
                  fontSize: { xs: "30px", md: "71px" },
                  lineHeight: { xs: "34px", md: "92px" },
                  fontFamily: "Mukta Mahee !important",
                }}
              >
                आपकी पहचान
              </Typography>

              <Typography
                sx={{
                  color: "#445469",
                  mt: 3,
                  mb: 3,
                  fontWeight: "400",
                  fontSize: { xs: "16px", md: "24px" },
                }}
              >
                Because every woman deserves her own identity and independence.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={isSmallScreen ? handleModalToggle : undefined}
                sx={{
                  bgcolor: "#455F76",
                  "&:hover": {
                    bgcolor: "#374556",
                  },
                  textTransform: "none",
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.6 },
                  width: { xs: "70%", sm: "286px", md: "286px" },
                  height: { xs: "48px", md: "56px" },
                  borderRadius: "5px",
                }}
              >
                Register for the Webinar
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "#445469",
                  borderColor: "#445469",
                  "&:hover": {
                    borderColor: "#374556",
                    bgcolor: "rgba(68, 84, 105, 0.04)",
                  },
                  textTransform: "none",
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.6 },
                  height: { xs: "48px", md: "56px" },
                  width: { xs: "30%", sm: "286px", md: "286px" },
                  borderRadius: "5px",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right section  */}
        <Grid
          item
          xs={12}
          md={4.2}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              paddingY: "28px",
              paddingX: "28px",
              borderRadius: "10px",
              border: "1px solid #E2E4E5",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                mb: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "& span": {
                  mr: 1,
                },
              }}
            >
              <Box>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#FF944E",
                  }}
                >
                  Register Now
                </span>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#455F76",
                  }}
                >
                  for Free
                </span>
              </Box>
              <svg
                width="126"
                height="6"
                viewBox="0 0 126 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M111.007 0.894858C110.854 0.923273 110.642 0.954167 110.371 0.988111C109.936 1.0424 109.501 1.09487 109.065 1.14561C111.336 1.13685 113.608 1.13012 115.88 1.12558C121.34 1.11467 124.1 1.12085 125.129 1.13638C125.378 1.14014 125.546 1.14458 125.621 1.1513C125.632 1.15229 125.649 1.15395 125.667 1.15681C125.676 1.15821 125.691 1.1608 125.709 1.16525L125.71 1.16538C125.721 1.16816 125.766 1.17922 125.816 1.20643C125.844 1.22376 125.911 1.27823 125.944 1.31786C125.983 1.38504 126.012 1.54481 125.995 1.63052C125.966 1.6937 125.894 1.78337 125.858 1.81228C125.834 1.8285 125.791 1.85158 125.772 1.8595C125.717 1.88206 125.666 1.88874 125.664 1.88907C125.619 1.89606 125.555 1.89957 125.504 1.90209C125.264 1.91387 124.713 1.92665 123.983 1.93964C121.052 1.9918 115.09 2.04943 113.888 2.04943C109.901 2.04943 105.907 2.02371 101.907 1.98569C101.892 2.1728 101.743 2.28728 101.656 2.33487C101.556 2.3889 101.442 2.41606 101.351 2.43249C100.988 2.49829 100.346 2.49721 99.6542 2.47714C99.0959 2.46095 98.4839 2.43169 97.8883 2.40322C96.9382 2.35779 96.0301 2.31438 95.45 2.3293C94.6616 2.34959 93.9067 2.36801 93.1766 2.38481C90.2816 2.53193 87.387 2.65275 84.509 2.77287C81.9701 2.87884 79.4441 2.98428 76.942 3.10675C76.5782 3.12456 76.2143 3.14237 75.8503 3.16016C65.806 3.77424 55.7654 4.48602 45.7322 5.24027C46.4268 5.23586 47.1225 5.23257 47.8197 5.23257H70.9076C71.1323 5.23257 71.3146 5.39759 71.3146 5.60116C71.3146 5.80472 71.1323 5.96974 70.9076 5.96974H47.8197C46.773 5.96974 45.7228 5.97728 44.6707 5.98483C42.5593 5.99998 40.4403 6.01519 38.3274 5.96964C38.2664 5.96832 38.2093 5.96573 38.1608 5.96056C38.1374 5.95806 38.1054 5.95389 38.0714 5.94596L38.0696 5.94555C38.0515 5.94144 37.9573 5.92008 37.8752 5.84923C37.8209 5.80242 37.7484 5.71241 37.7468 5.58265C37.7453 5.45962 37.809 5.37436 37.8472 5.33413C37.9111 5.26677 37.9872 5.23627 38.0043 5.22941L38.0058 5.22881C38.0578 5.20779 38.1145 5.19436 38.1517 5.18615C38.3144 5.15028 38.6146 5.10839 38.9458 5.06772C39.6222 4.98468 40.5249 4.89549 40.9828 4.86051C44.0755 4.6243 47.1692 4.3913 50.2638 4.16311C42.7691 4.32237 35.2718 4.30908 27.804 3.97803C26.6994 3.92907 25.8952 3.86374 25.3678 3.78646C25.1088 3.74849 24.8922 3.70432 24.7352 3.64878C24.6608 3.62247 24.5633 3.58134 24.4823 3.51318C24.3923 3.43753 24.2781 3.28277 24.3392 3.08129C24.3794 2.94905 24.4785 2.86757 24.5441 2.82441C16.5004 2.94242 8.45675 3.0599 0.413129 3.16948C0.188371 3.17254 0.00342793 3.01002 4.69958e-05 2.80648C-0.0033339 2.60294 0.176128 2.43545 0.400886 2.43239C9.00956 2.31512 17.6191 2.18877 26.2291 2.06242C28.1557 2.03415 30.0822 2.00587 32.0088 1.9777C38.5677 1.52804 45.1539 1.25683 51.7539 1.10409C53.0336 1.03436 54.5324 0.972721 55.9614 0.921324C58.5465 0.828345 60.9358 0.767929 61.4688 0.75445C61.5048 0.75354 61.5323 0.752844 61.5509 0.752366C73.4617 0.44573 85.3785 0.307248 97.2906 0.223298C98.528 0.214577 100.464 0.169749 102.504 0.1225C104.04 0.0869243 105.635 0.0499758 107.037 0.0260333C108.658 -0.00166476 110.028 -0.0121247 110.725 0.0191071C110.896 0.0267868 111.047 0.0377131 111.155 0.0553963C111.193 0.0616559 111.289 0.0774945 111.374 0.124492C111.41 0.143984 111.549 0.224822 111.578 0.396332C111.611 0.586892 111.482 0.707247 111.437 0.742811C111.385 0.784234 111.332 0.807281 111.305 0.818152C111.272 0.831221 111.239 0.841469 111.21 0.849599C111.152 0.8659 111.083 0.88078 111.007 0.894858ZM51.3803 2.43893C44.9354 2.52709 38.4904 2.62019 32.0455 2.71443C30.5804 2.815 29.1166 2.92449 27.6542 3.04358C27.2033 3.08031 26.8025 3.11934 26.4553 3.15968C26.8416 3.19007 27.3027 3.21776 27.8438 3.24174C42.4309 3.88839 57.1368 3.31927 71.7501 2.6206C65.2614 2.66092 58.7579 2.67359 52.273 2.48483C52.0457 2.47821 51.7299 2.46191 51.3803 2.43893ZM101.171 2.13854C101.171 2.13853 101.168 2.13627 101.163 2.13176C101.169 2.13629 101.172 2.13856 101.171 2.13854ZM93.8636 1.15931C92.8992 1.14763 91.9345 1.13576 90.9695 1.12389C89.2594 1.10285 87.5484 1.08179 85.8367 1.06177C89.6566 1.01989 93.4768 0.987365 97.2969 0.960443C98.5381 0.951695 100.49 0.90652 102.54 0.859091C103.474 0.837478 104.428 0.815397 105.344 0.796082C103.804 0.942867 102.258 1.07148 100.707 1.18594C100.495 1.14296 100.263 1.10983 100.018 1.08392C99.4762 1.02645 98.8311 1.00058 98.1261 0.997391C96.8493 0.991609 95.351 1.06021 93.8636 1.15931ZM111.019 0.782476C111.024 0.783418 111.026 0.783987 111.026 0.784033C111.026 0.784078 111.023 0.783609 111.019 0.782476Z"
                  fill="#6BB88C"
                />
              </svg>
            </Typography>
            {/* Form Component */}
            <Form />
          </Box>
        </Grid>
      </Grid>

      {/* Modal for small screens */}
      <Modal
        open={modalOpen && isSmallScreen}
        onClose={handleModalToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Register Now for Free
          </Typography>
          <Form />
          <Button
            onClick={handleModalToggle}
            sx={{
              mt: 2,
              bgcolor: "#455F76",
              color: "white",
              "&:hover": {
                bgcolor: "#374556",
              },
            }}
          >
            Close
          </Button>

          <Button
            sx={{
              mt: 2,
              bgcolor: "#FF944E",
              color: "white",
              "&:hover": {
                bgcolor: "#FF944E",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Header;
