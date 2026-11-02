import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import HowItWorksBox from "./HowItWorksBox";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: "42px" },
        overflow: "hidden", // prevents horizontal scrollbar during the slide
      }}
    >
      <Box sx={{ maxWidth: 1360, mx: "auto" }}>
        {/* Intro: slides in from the left */}
        <MotionBox
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{ mb: { xs: 4, md: 7 } }}
        >
          <SectionIntro
            id={3}
            headingSize={{ xs: "28px", md: "35px" }}
            paraSize={{ xs: "13px" }}
          />
        </MotionBox>

        {/* Boxes: slide up from the bottom */}
        <MotionBox
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <HowItWorksBox />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HowItWorks;