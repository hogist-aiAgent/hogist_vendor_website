import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
// import MainContainer from "../../Common/Container/Container";
import HowItWorksBox from "./HowItWorksBox";
import MainContainer from "../../Common/Container/Container";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const HowItWorks = () => {
  return (
    <MainContainer>
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
          paraSize={{ xs: "13px",lg:"14px" }}
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
    </MainContainer>
  );
};

export default HowItWorks;
