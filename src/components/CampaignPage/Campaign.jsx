import React, { useRef } from "react";
import { Box, Container } from "@mui/material";

import AboutCampaign from "./AboutCampaign";
import BenefitSection from "./BenefitSection";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Header from "./Header";

const Campaign = () => {
  const aboutCampaignRef = useRef();
  return (
    <>
      <Header aboutCampaignRef={aboutCampaignRef} />
      <Container
        maxWidth
        sx={{
          py: { xs: 2, sm: 4, md: 6.5 },
          px: { xs: 2, sm: 4, md: 6.5 },
        }}
      >
        <br />
        {/*  AboutCampaign Component */}
        <Box ref={aboutCampaignRef}>
          <AboutCampaign />
        </Box>

        <br />
        {/* BenefitSection Component */}
        <BenefitSection />

        <br />
        {/* HowItWorks Component */}
        <HowItWorks />

        <br />
        <br />
        {/* FAQ Component */}
        <FAQ />
      </Container>
    </>
  );
};

export default Campaign;
