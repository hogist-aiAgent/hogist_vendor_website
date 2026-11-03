import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import WhyHogistBox from "./WhyHogistBox";
import WhyHogistDetails from "./WhyHogistDetails";
import MainContainer from "../../Common/Container/Container";

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
    // Outer box triggers the animations; the variants below reach the
    // children through the Grid automatically.
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "white",
        py: { xs: 4, sm: 6, md: 10 }, // padding lives here (a style prop can't take responsive values)
        overflow: "hidden", // stops a horizontal scrollbar during the slide-in
      }}
    >
      <MainContainer>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              <MotionBox
                variants={fromLeft}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <SectionIntro
                  id={8}
                  headingSize={{ xs: "28px", md: "32px" }}
                  paraSize={{ xs: "13px", lg: "14px" }}
                />
              </MotionBox>

              <MotionBox
                variants={fromBottom}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <WhyHogistBox />
              </MotionBox>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              variants={fromRight}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <WhyHogistDetails />
            </MotionBox>
          </Grid>
        </Grid>
      </MainContainer>
    </MotionBox>
  );
}

export default WhyHogist;