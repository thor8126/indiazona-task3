import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Rating,
  Container,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import BreadCrumbs from "./BreadCrumbs";
import FilterListIcon from "@mui/icons-material/FilterList";
import img1 from "./image.png";
import img2 from "./image2.png";
import img3 from "./image3.png";
import img4 from "./image4.png";
import FilterModal from "./FilterModal";
import { useNavigate } from "react-router-dom";

const ordersData = [
  {
    id: 1,
    brand: "Trend Me",
    productName: "Women Floral A-Line Maxi Dress",
    size: "S",
    rating: 0,
    status: "Delivered",
    deliveryDate: "Wed, 20 sep",
    returnWindow: "Wed 2 oct",
    image: img1,
  },
  {
    id: 2,
    brand: "Denilli",
    productName: "Pointed Toe Block Heel Pumps",
    size: "37",
    rating: 0,
    status: "Cancelled",
    cancelDate: "Sat, 20 jan",
    image: img2,
  },
  {
    id: 3,
    brand: "Kotty",
    productName: "Women Fit High-Rise Cropped Jeans",
    size: "28",
    rating: 0,
    status: "Returned",
    returnDate: "Mon, 15 Feb",
    refundAmount: "₹599",
    image: img3,
  },
  {
    id: 4,
    brand: "Dave Rabbit",
    productName: "Men Regular Slim Fit Divided Cotton Shirt",
    size: "36",
    rating: 0,
    status: "Out for Delivery",
    expectedDate: "Mon, 03 oct",
    image: img4,
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "&:last-child": {
    marginBottom: 0,
  },
  boxShadow: "none",
}));

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "#FFF1E8";
    case "Cancelled":
      return "#FEEBEE";
    case "Returned":
      return "#E9EFF4";
    case "Out for Delivery":
      return "#FFF8D7";
    default:
      return "grey";
  }
};

const getStatusText = (status) => {
  switch (status) {
    case "Delivered":
      return "#FF944E";
    case "Cancelled":
      return "#FF5252";
    case "Returned":
      return "#455F76";
    case "Out for Delivery":
      return "#FFAB04";
    default:
      return "grey";
  }
};
function MyOrder() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "All",
    timeFrame: "Anytime",
  });

  const getFilteredOrders = () => {
    let filtered = [...ordersData];

    // Filter by status
    if (filters.status !== "All") {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    // Filter by time frame
    const currentDate = new Date();
    if (filters.timeFrame !== "Anytime") {
      filtered = filtered.filter((order) => {
        const orderDate = new Date(
          order.deliveryDate ||
            order.cancelDate ||
            order.returnDate ||
            order.expectedDate
        );
        const diffInDays = (currentDate - orderDate) / (1000 * 60 * 60 * 24);

        switch (filters.timeFrame) {
          case "Last 30 days":
            return diffInDays <= 30;
          case "Last 6 months":
            return diffInDays <= 180;
          case "Last year":
            return diffInDays <= 365;
          default:
            return true;
        }
      });
    }

    return filtered;
  };

  const filteredOrders = getFilteredOrders();

  const handleFilterOpen = () => setFilterOpen(true);
  const handleFilterClose = () => setFilterOpen(false);
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#455F76",
          height: "72px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "28px" }}
        >
          My Orders
        </Typography>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          py: { xs: 2, md: 2 },
          px: { xs: 2, md: 3 },
        }}
      >
        <BreadCrumbs />
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            borderBottom: "1px solid #eee",
            pb: 1,
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="h1" color="#455F76">
                All orders
              </Typography>
              <Typography variant="caption" color="#888888">
                from anytime
              </Typography>
            </Box>
          )}
          {isMobile && <Box></Box>}
          <Button
            variant="contained"
            startIcon={<FilterListIcon />}
            onClick={handleFilterOpen}
            sx={{
              width: "146px",
              height: "48px",
              bgcolor: "#ff7043",
              "&:hover": {
                bgcolor: "#f4511e",
              },
            }}
          >
            Filter
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "#EEF5FA",
            padding: 2,
          }}
        >
          {filteredOrders.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", py: 4 }}>
              No orders found matching the selected filters
            </Typography>
          ) : (
            filteredOrders.map((order) => (
              <StyledCard key={order.id}>
                <CardContent sx={{ display: "flex", p: 1 }}>
                  <Box sx={{ flexShrink: 0, mr: 2 }}>
                    <img
                      src={order.image}
                      alt={order.productName}
                      style={{ width: 100, height: 130, objectFit: "cover" }}
                    />
                  </Box>

                  {
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="#455F76"
                            sx={{ fontSize: "20px", fontWeight: 600 }}
                          >
                            {order.brand}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="#212121"
                            sx={{ fontSize: "16px", fontWeight: 500 }}
                          >
                            {order.productName}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="#212121"
                            sx={{ fontSize: "18px", fontWeight: 400 }}
                          >
                            Size: {order.size}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: { xs: "column", md: "row" },
                              alignItems: { xs: "flex-start", md: "center" },
                              justifyContent: "left",
                              marginLeft: "-5px",
                            }}
                          >
                            <Button
                              sx={{
                                fontSize: "16px",
                                fontWeight: 400,
                              }}
                              variant="text"
                              size="small"
                              color="#212121"
                            >
                              Rate & Review
                            </Button>
                            <Rating
                              value={order.rating}
                              size="small"
                              readOnly
                            />
                          </Box>
                        </Box>
                        {!isMobile && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 2,
                              flexDirection: "column",
                            }}
                          >
                            <Button
                              variant="caption"
                              sx={{
                                width: "156px",
                                fontWeight: 600,
                                bgcolor: getStatusColor(order.status),
                                color: getStatusText(order.status),
                                py: 1.6,
                                borderRadius: 1,
                                cursor: "context-menu",
                              }}
                            >
                              {order.status}
                            </Button>
                            <Button
                              onClick={() =>
                                navigate("/view-order", { replace: true })
                              }
                              variant="caption"
                              sx={{
                                width: "156px",
                                fontWeight: 600,
                                backgroundColor: "#EEF5FA",
                                py: 1.6,
                                borderRadius: 1,
                                color: "#455F76",
                              }}
                            >
                              View Order{" "}
                              <svg
                                style={{ marginLeft: "6px" }}
                                width="7"
                                height="13"
                                viewBox="0 0 7 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.20508 11.8791L5.42081 6.43956L1.20508 1"
                                  stroke="#455F76"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </Button>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  }
                </CardContent>
                <Divider />
                <Box sx={{ p: 1.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
                      gap: { xs: 1, sm: 0 },
                    }}
                  >
                    {order.deliveryDate && (
                      <Typography variant="caption" color="text.secondary">
                        <svg
                          style={{ marginRight: "10px" }}
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.212891"
                            width="8.23071"
                            height="8"
                            rx="4"
                            fill="#FF944E"
                          />
                        </svg>{" "}
                        Delivered on {order.deliveryDate}
                      </Typography>
                    )}
                    {order.returnWindow && (
                      <Typography variant="caption" color="text.secondary">
                        <svg
                          style={{ marginRight: "10px" }}
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.384766"
                            width="8.23071"
                            height="8"
                            rx="4"
                            fill="#FF6636"
                          />
                        </svg>
                        Return window ends {order.returnWindow}
                      </Typography>
                    )}
                  </Box>
                  {order.cancelDate && (
                    <Typography variant="caption" color="text.secondary">
                      <svg
                        style={{ marginRight: "10px" }}
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.212891"
                          width="8.23071"
                          height="8"
                          rx="4"
                          fill="#FF944E"
                        />
                      </svg>{" "}
                      Cancelled on {order.cancelDate}
                    </Typography>
                  )}
                  {order.returnDate && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        justifyContent: "space-between",
                        gap: { xs: 1, sm: 0 },
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        <svg
                          style={{ marginRight: "10px" }}
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.212891"
                            width="8.23071"
                            height="8"
                            rx="4"
                            fill="#FF944E"
                          />
                        </svg>{" "}
                        Returned on {order.returnDate}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <svg
                          style={{ marginRight: "10px" }}
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.212891"
                            width="8.23071"
                            height="8"
                            rx="4"
                            fill="#FF944E"
                          />
                        </svg>{" "}
                        Refund of {order.refundAmount} Done!
                      </Typography>
                    </Box>
                  )}
                  {order.expectedDate && (
                    <Typography variant="caption" color="text.secondary">
                      <svg
                        style={{ marginRight: "10px" }}
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.212891"
                          width="8.23071"
                          height="8"
                          rx="4"
                          fill="#FF944E"
                        />
                      </svg>{" "}
                      Due for delivery on {order.expectedDate}
                    </Typography>
                  )}
                </Box>

                {isMobile && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      flexDirection: "row",
                      marginBottom: "1rem",
                    }}
                  >
                    <Button
                      variant="caption"
                      sx={{
                        width: "156px",
                        fontWeight: 600,
                        bgcolor: getStatusColor(order.status),
                        color: getStatusText(order.status),
                        py: 1.6,
                        borderRadius: 1,
                        cursor: "context-menu",
                      }}
                    >
                      {order.status}
                    </Button>
                    <Button
                      variant="caption"
                      onClick={() => navigate("/view-order", { replace: true })}
                      sx={{
                        width: "156px",
                        fontWeight: 600,
                        backgroundColor: "#EEF5FA",
                        py: 1.6,
                        borderRadius: 1,
                        color: "#455F76",
                      }}
                    >
                      View Order{" "}
                      <svg
                        style={{ marginLeft: "6px" }}
                        width="7"
                        height="13"
                        viewBox="0 0 7 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.20508 11.8791L5.42081 6.43956L1.20508 1"
                          stroke="#455F76"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </Box>
                )}
              </StyledCard>
            ))
          )}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #FF944E",
                color: "#212121",
                borderRadius: "5px",
                width: { xs: "calc(50% - 8px)", sm: "257px" },
                height: "56px",
              }}
            >
              Replace
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #FF944E",
                color: "#212121",
                borderRadius: "5px",
                width: { xs: "calc(50% - 8px)", sm: "257px" },
                height: "56px",
              }}
            >
              Track
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #FF944E",
                color: "#212121",
                borderRadius: "5px",
                width: "257px",
                height: "56px",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        <FilterModal
          open={filterOpen}
          onClose={handleFilterClose}
          onApplyFilters={handleApplyFilters}
        />
      </Container>
    </>
  );
}

export default MyOrder;
