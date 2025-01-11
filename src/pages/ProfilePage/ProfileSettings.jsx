import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Person,
  ShoppingBag,
  Favorite,
  LocationOn,
  Logout,
  DeleteOutline,
  Menu as MenuIcon,
} from "@mui/icons-material";
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

import PersonalInfo from "./PersonalInfo";
import Wishlist from "./WishList";
import MyOrder from "../MyOrders/MyOrders";
import MyAddresses from "./MyAddresses";

const iconMap = {
  Person: <Person />,
  ShoppingBag: <ShoppingBag />,
  Favorite: <Favorite />,
  LocationOn: <LocationOn />,
  Logout: <Logout />,
  DeleteOutline: <DeleteOutline />,
};

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
const ProfileSettings = ({ navItems, user }) => {
  const navigate = useNavigate();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [activeView, setActiveView] = useState("personal-info");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (navItem) => {
    if (navItem.path) {
      navigate(navItem.path);
    } else {
      setActiveView(navItem.id);
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  const renderView = () => {
    switch (activeView) {
      case "personal-info":
        return <PersonalInfo user={user} />;
      case "wishlist":
        return <Wishlist />;
      case "myorders":
        return <Navigate to="/myorders" replace />;
      case "myaddresses":
        return <MyAddresses />;
      default:
        return <PersonalInfo user={user} />;
    }
  };

  const sidebar = (
    <Box sx={{ width: 315, backgroundColor: "#C7DEEF", height: "100%" }}>
      {/* Profile Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          justifyContent: "space-around",
          paddingTop: "16px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#455F76",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Hello 👋
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#455F76" }}
          >
            {user.fullName.split(" ")[0]}
          </Typography>
        </Box>

        <Avatar
          src={user.avatar}
          sx={{
            width: 57,
            height: 57,
            bgcolor: "#f0f0f0",
            border: "2px solid white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {user.avatar}
        </Avatar>
      </Box>

      {/* Navigation */}
      <List
        sx={{
          backgroundColor: "#C7DEEF",
          borderRadius: 2,
        }}
      >
        {navItems.map((item) => (
          <ListItem
            button
            key={item.id}
            selected={activeView === item.id}
            onClick={() => handleNavigation(item)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              py: "16px",
              bgcolor: activeView === item.id ? "#455F76" : "transparent",
              color: activeView === item.id ? "white" : "inherit",
              "&:hover": {
                bgcolor: activeView === item.id ? "#455F76" : "#e2e8f0",
              },
              "& .MuiListItemIcon-root": {
                color: activeView === item.id ? "white" : "#64748b",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
              }}
            >
              {iconMap[item.icon]}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: activeView === item.id ? 500 : 400,
                color: item.color === "error" ? "#ef4444" : "inherit",
              }}
            />
          </ListItem>
        ))}

        <ListItem
          button
          key="logout"
          onClick={() =>
            handleNavigation({
              id: "logout",
              path: "/logout",
              icon: "Logout",
              label: "Logout",
            })
          }
          sx={{
            borderRadius: 1,
            mb: 0.5,
            py: "16px",
            "&.Mui-selected": {
              backgroundColor: "#455F76 !important",
              color: "white",
              "& .MuiListItemIcon-root": {
                color: "white",
              },
              "&:hover": {
                backgroundColor: "#455F76 !important",
              },
            },
            "&:hover": {
              bgcolor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: "#64748b",
            }}
          >
            {iconMap["Logout"]}
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          />
        </ListItem>

        <ListItem
          button
          key="delete"
          onClick={() => setIsDeleteDialogOpen(true)}
          sx={{
            borderRadius: 1,
            mb: 0.5,
            py: "16px",
            "&:hover": {
              bgcolor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: "#64748b",
            }}
          >
            {iconMap["DeleteOutline"]}
          </ListItemIcon>
          <ListItemText
            primary="Delete Account"
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

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
          Profile
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ paddingY: "16px" }}>
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

        <Box sx={{ display: "flex", gap: 4 }}>
          {/* Sidebar for desktop */}
          {!isMobile && sidebar}

          {/* Drawer for mobile */}
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 315 },
            }}
          >
            {sidebar}
          </Drawer>

          {/* Main Content */}
          <Box sx={{ flexGrow: 1 }}>{renderView()}</Box>
        </Box>
        <DeleteAccountDialog
          open={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
        />
      </Container>
    </>
  );
};

export default ProfileSettings;
