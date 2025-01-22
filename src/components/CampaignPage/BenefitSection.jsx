import React from "react";
import { Box, Typography, Paper } from "@mui/material";

import icon5 from "../../assets/campaignicon5.png";
import icon6 from "../../assets/campaignicon6.png";
import icon7 from "../../assets/campaignicon7.png";
import icon8 from "../../assets/campaignicon8.png";
import icon9 from "../../assets/campaignicon9.png";
import icon10 from "../../assets/campaignicon10.png";
import icon11 from "../../assets/campaignicon11.png";

const BenefitSection = () => {
  const benefits = [
    { icon: icon5, title: "Start your business with Indiazona's support." },
    { icon: icon6, title: "Zero consulting fees for personalised guidance." },
    { icon: icon7, title: "End-to-end support tailored to your needs." },
    { icon: icon8, title: "Free onboarding and visibility on Indiazona." },
    { icon: icon9, title: "No hidden fees—just growth and success." },
    { icon: icon10, title: "Get expert advice to grow your brand." },
    { icon: icon11, title: "Access to resources for business growth." },
  ];

  const BenefitItem = ({ benefit, index }) => (
    <Paper
      key={index}
      elevation={1}
      sx={{
        paddingX: { xs: "16px", sm: "20px", md: "16px" },
        paddingY: { xs: 2, sm: 2, md: 1 },
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, sm: 3, md: 2 },
        backgroundColor: "#EFF8FF",
        border: "1px solid #ACD8FF",
        borderRadius: "10px",
        textAlign: "left",
        height: { xs: "auto", sm: "auto", md: "auto" },
        minHeight: { xs: "100px", sm: "120px", md: "100px" },
      }}
    >
      <img
        src={benefit.icon || "/placeholder.svg"}
        alt={benefit.title}
        style={{
          width: 38,
          height: 38,
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          color: "#333",
          fontWeight: 600,
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          lineHeight: { xs: 1.4, sm: 1.3, md: 1.4 },
        }}
      >
        {benefit.title}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          mb: { xs: 3, sm: 4, md: 6 },
          fontWeight: 600,
          fontSize: { xs: "22px", sm: "26px", md: "28px" },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        Benefits of Joining this{" "}
        <span style={{ color: "#455F76" }}>Campaign</span>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {benefits.slice(0, 4).map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} index={index} />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            gridColumn: { sm: "1 / span 2", md: "1 / span 4" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, sm: 3, md: 4 },
              width: "100%",
              maxWidth: { sm: "100%", md: "75%" },
            }}
          >
            {benefits.slice(4).map((benefit, index) => (
              <BenefitItem
                key={index + 4}
                benefit={benefit}
                index={index + 4}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitSection;
