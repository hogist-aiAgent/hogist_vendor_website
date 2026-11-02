import React from "react";
import SectionIntro from "../SectionIntro/SectionIntro";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import CommonButton from "../../Common/Button/CommonButton";
import counterImg from "../../assets/images/corporatecafeteriachennaicounter.jpg";
import contactImg from "../../assets/images/corporatecafeteriaonepointcontact.jpg";

const RED = "#c60800";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const FeatureItem = [
  { id: 1, Title: "Daily meal service", smalltext: "Breakfast, lunch, snacks, dinner" },
  { id: 2, Title: "ISO certified", smalltext: "ISO 9001:2015 & ISO 22000:2018" },
  { id: 3, Title: "Any workforce size", smalltext: "Offices, plants, industrial sites" },
  { id: 4, Title: "200+ partner kitchens", smalltext: "Across Chennai and its industrial belt" },
];

const Hero = ({ button = "Get a Cafeteria Service Quote" }) => {
  return (
    <Box
      sx={{
        bgcolor: "#FBEFEB",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: "34px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        gap: { xs: 4, md: 10 },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* LEFT: slides in from the left */}
      <MotionBox
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{ flex: 1, minWidth: 0 }}
      >
       <SectionIntro
  id={1}
  headingSize={{ xs: "28px", md: "50px" }}
  paraSize={{ xs: "13px" }}
  sx={{
    mb: { xs: 0, md: "10px" },
  }}
/>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3.5 }}>
          <CommonButton
            bgcolor="#1E8A4A"
            hoverBgcolor="#17703b"
            fontSize="14px"
            fontWeight={600}
            borderRadius="10px"
             size="medium"
          >
            {button}
          </CommonButton>

          <CommonButton
              variant="contained"
              size="medium"
            
            fontSize="14px"
            fontWeight={600}
            borderRadius="10px"
             
            >
              Talk to our Team
            </CommonButton>
        </Box>

        <Divider sx={{ my: 4, maxWidth: 686 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            columnGap: 4,
            rowGap: 2.5,
            maxWidth: 686,
          }}
        >
          {FeatureItem.map((item) => (
            <Box key={item.id}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#111" }}>
                {item.Title}
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "11px", color: "#6b6b6b" }}>
                {item.smalltext}
              </Typography>
            </Box>
          ))}
        </Box>
      </MotionBox>

      {/* RIGHT: slides up from the bottom */}
      <MotionBox
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
  component="img"
  src={counterImg}
  alt="Corporate cafeteria vendor serving employees at a Chennai office cafeteria counter"
  sx={{
    display: "block",
    width: "100%",
    aspectRatio: "694 / 380",
    height: "auto",
    mt: { xs: 0, md: 5 },
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={contactImg}
            alt="Employees dining in an office cafeteria in Chennai with a dedicated coordinator"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <Box
            sx={{
              bgcolor: RED,
              borderRadius: "20px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "16px", lineHeight: 1.25 }}>
              A dedicated cafeteria coordinator
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "12px", pt: 1, lineHeight: 1.5 }}>
              One point of contact for menus, service and feedback.
            </Typography>
          </Box>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Hero;