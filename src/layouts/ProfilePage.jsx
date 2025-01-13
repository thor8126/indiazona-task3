import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import image1 from "../assets/wishlist1.png";
import image2 from "../assets/wishlist2.png";
import image3 from "../assets/wishlist3.png";
import image4 from "../assets/wishlist4.png";
import image5 from "../assets/wishlist5.png";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import Wishlist from "../components/WishList/WishList";
import MyAddresses from "../components/ManageAddresses/MyAddresses";
import ProfileSidebar from "../components/commonComp/ProfileSidebar";

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

// Collections data
const collections = [
  {
    id: 1,
    title: "Women's Collection",
    image: image1,
  },
  {
    id: 2,
    title: "Men's Collection",
    image: image2,
  },
  {
    id: 3,
    title: "New Collection",
    image: image3,
  },
];

// Wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Men's Heavy Neck Popcorn Knit",
    price: 999,
    originalPrice: 1299,
    image: image2,
  },
  {
    id: 2,
    name: "Split High Waist 90's Denim",
    price: 599,
    originalPrice: 999,
    image: image4,
  },
  {
    id: 3,
    name: "Embellished Pointed Toe Kitten",
    price: 700,
    originalPrice: 1639,
    image: image5,
  },
];

const DeleteAccountDialog = ({ open, onClose }) => {
  const [reason, setReason] = useState("");

  const handleSave = () => {
    console.log("Selected reason:", reason);
    onClose();
  };

  const reasons = [
    "I no longer shop on IndiaZona",
    "I am not satisfied with the services or products",
    "I am experiencing technical issues",
    "I don't find the products I need",
    "I prefer other platforms",
    "Other",
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "8px",
          padding: "16px",
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#455F76",
          }}
        >
          Delete Account
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography
          sx={{
            color: "#64748b",
            mb: 2,
            fontSize: "14px",
          }}
        >
          We'd love to know why you're leaving. Your feedback will help us
          improve and serve you better in the future.
        </Typography>

        <Typography
          sx={{
            color: "#455F76",
            mb: 1,
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Reason
        </Typography>

        <RadioGroup value={reason} onChange={(e) => setReason(e.target.value)}>
          {reasons.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={
                <Radio
                  sx={{
                    color: "#64748b",
                    "&.Mui-checked": {
                      color: "#fb923c",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#455F76",
                  }}
                >
                  {option}
                </Typography>
              }
              sx={{ mb: 1 }}
            />
          ))}
        </RadioGroup>
      </DialogContent>

      <DialogActions sx={{ padding: "16px" }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            width: "120px",
            height: "48px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            borderColor: "#E5E7EB",
            color: "#374151",
            "&:hover": {
              borderColor: "#D1D5DB",
              bgcolor: "transparent",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={!reason}
          sx={{
            width: "120px",
            height: "48px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            bgcolor: "#fb923c",
            "&:hover": {
              bgcolor: "#f97316",
            },
            "&.Mui-disabled": {
              bgcolor: "#f1f5f9",
              color: "#94a3b8",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const Root = ({ navItems, user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [activeView, setActiveView] = useState("personal-info");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // Update activeView based on current route
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path && navItems.some((item) => item.id === path)) {
      setActiveView(path);
    }
  }, [location.pathname, navItems]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleNavigation = (navItem) => {
    if (navItem.path) {
      navigate(navItem.path);
    } else {
      navigate(`/profile/${navItem.id}`);
      setActiveView(navItem.id);
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };
  const getHeaderText = () => {
    const path = location.pathname.split("/").pop();
    switch (path) {
      case "wishlist":
        return "My Wishlist";
      case "myaddresses":
        return "Manage Addresses";
      default:
        return "Profile";
    }
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
          {getHeaderText()}
        </Typography>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to bottom,#d0e3f2,#ffffff)",
          padding: { xs: "1rem", md: "2.5rem" },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#ffffff",
            padding: "0 !important",
          }}
        >
          {/* Hamburger menu for mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mb: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Sidebar for desktop */}
            {!isMobile && (
              <ProfileSidebar
                user={user}
                navItems={navItems}
                activeView={activeView}
                handleNavigation={handleNavigation}
                setIsDeleteDialogOpen={setIsDeleteDialogOpen}
              />
            )}

            {/* Drawer for mobile */}
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 315 },
              }}
            >
              {
                <ProfileSidebar
                  user={user}
                  navItems={navItems}
                  activeView={activeView}
                  handleNavigation={handleNavigation}
                  setIsDeleteDialogOpen={setIsDeleteDialogOpen}
                />
              }
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route
                  path="/personal-info"
                  element={<PersonalInfo user={user} />}
                />
                <Route
                  path="/wishlist"
                  element={
                    <Wishlist
                      wishlistItems={wishlistItems}
                      collections={collections}
                    />
                  }
                />
                <Route
                  path="/myorders"
                  element={<Navigate to="/myorders" replace />}
                />
                <Route
                  path="/myaddresses"
                  element={<MyAddresses addresses={addresses} />}
                />
                <Route
                  path="*"
                  element={<Navigate to="/profile/personal-info" replace />}
                />
              </Routes>
            </Box>
          </Box>
          <DeleteAccountDialog
            open={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
          />
        </Container>
      </Box>
    </>
  );
};

export default Root;
