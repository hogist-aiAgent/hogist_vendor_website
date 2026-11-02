import { Box } from "@mui/material";
import { motion } from "framer-motion";
import WhoWeServeCard from "./WhoWeServeCard";
import SectionIntro from "../SectionIntro/SectionIntro";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const WhoWeServe = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: "42px" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 1360, mx: "auto" }}>
        <MotionBox
          variants={fromLeft}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{ mb: { xs: 3, md: 5.5 } }}
        >
          <SectionIntro
            id={9}
            headingSize={{ xs: "28px", md: "35px" }}
            paraSize={{ xs: "13px" }}
          />
        </MotionBox>

        <MotionBox
          variants={fromBottom}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <WhoWeServeCard />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default WhoWeServe;