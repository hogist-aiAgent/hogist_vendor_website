import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import ServiceAreaBox from "./ServiceAreaBox";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const ServiceArea = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "white",
        py: { xs: 4, md: 7 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        columnGap: { md: 8 },
        rowGap: { xs: 4, md: 0 },
        alignItems: "start",
        overflow: "hidden",
      }}
    >
      <MotionBox
        variants={fromLeft}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionIntro
          id={7}
          headingSize={{ xs: "28px", md: "32px" }}
          paraSize={{ xs: "13px" }}
        />
      </MotionBox>

      <MotionBox
        variants={fromBottom}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ServiceAreaBox />
      </MotionBox>
    </MotionBox>
  );
};

export default ServiceArea;