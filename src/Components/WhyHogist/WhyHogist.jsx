import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import WhyHogistBox from "./WhyHogistBox";
import WhyHogistDetails from "./WhyHogistDetails";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

function WhyHogist() {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
        columnGap: { md: 8 },
        rowGap: { xs: 4, md: 0 },
        alignItems: "start",
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: "36px" },
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
        <MotionBox
          variants={fromLeft}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionIntro
            id={8}
            headingSize={{ xs: "28px", md: "32px" }}
            paraSize={{ xs: "13px" }}
          />
        </MotionBox>

        <MotionBox
          variants={fromBottom}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <WhyHogistBox />
        </MotionBox>
      </Box>

      <MotionBox
        variants={fromRight}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
        <WhyHogistDetails />
      </MotionBox>
    </MotionBox>
  );
}

export default WhyHogist;