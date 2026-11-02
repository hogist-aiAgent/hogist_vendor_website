import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import WeProvideGrid from "./WeProvideGrid";
import WhatWeProvideimg from "../../assets/images/WhatWeProvide.jpg";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const WeProvide = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.55fr" },
        columnGap: { md: 10 },
        rowGap: { xs: 4, md: 0 },
        alignItems: "start",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: "30px" },
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* LEFT: intro slides in from the left, image follows */}
      <MotionBox
        variants={fromLeft}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{ maxWidth: 500 }}
      >
        <SectionIntro
          id={2}
          headingSize={{ xs: "28px", md: "35px" }}
          paraSize={{ xs: "13px" }}
        />

        <Box
          component="img"
          src={WhatWeProvideimg}
          alt="Hogist cafeteria service in operation"
          sx={{
            display: "block",
            width: "100%",
            height:"100%",
            aspectRatio: "694 / 450",
            objectFit: "cover",
            borderRadius: "20px",
            
          }}
        />
      </MotionBox>

      {/* RIGHT: slides up from the bottom */}
      <MotionBox
        variants={fromBottom}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
        <WeProvideGrid />
      </MotionBox>
    </MotionBox>
  );
};

export default WeProvide;