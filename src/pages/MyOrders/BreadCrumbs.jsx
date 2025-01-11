import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const BreadCrumbs = ({ items = [], isReturn = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultItems = [
    { label: "Home", href: "/" },
    { label: "Orders", href: "/myorders" },
  ];

  const returnItems = [...defaultItems, { label: "Product Return", href: "#" }];

  const displayItems = isReturn ? returnItems : defaultItems;

  const handleClick = (e, href) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize={isMobile ? "small" : "large"} />}
      sx={{
        mb: 1,
        "& .MuiBreadcrumbs-separator": {
          mx: isMobile ? 0.6 : 1,
        },
      }}
    >
      {displayItems.map((item, index) =>
        index === displayItems.length - 1 ? (
          <Typography
            key={item.label}
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              whiteSpace: "nowrap",
            }}
            color="inherit"
          >
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            underline="hover"
            color="inherit"
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.label}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
