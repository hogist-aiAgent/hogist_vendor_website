import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const WhyHogistBox = () => {
  return (
    <MotionBox
      whileHover={{
        // y: -6,
        borderColor: "#c60800",
        boxShadow: "0 14px 30px rgba(198, 8, 0, .12)",
        // transition: { duration: 0.3, ease: "easeOut" },
      }}
      sx={{
        width: "100%",
        border: "1px solid #f0e2de",
        borderRadius: "16px",
        p: 3.25,
        boxSizing: "border-box",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        cursor: "default",
        willChange: "transform",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "10px", lg: "12px" },
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#c60800",
        }}
      >
        CERTIFIED
      </Typography>
      <Typography
        sx={{
          mt: 1,
          fontSize: { xs: "12px", lg: "13px" },
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#575049",
        }}
      >
        ISO 9001:2015 & ISO 22000:2018 certified company, with 200+ partner
        kitchens.
      </Typography>
    </MotionBox>
  );
};

export default WhyHogistBox;