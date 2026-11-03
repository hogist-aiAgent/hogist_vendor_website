import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import WeProvideGrid from "./WeProvideGrid";
import WhatWeProvideimg from "../../assets/images/WhatWeProvide.jpg";
import MainContainer from "../../Common/Container/Container";

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
    // Outer box triggers the animations; the variants below reach the
    // children through the Grid automatically.
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "#ffffff",
       
      }}
    >
      <MainContainer style={{ py: { xs: 4, sm: 6, md: 7 } }}>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* LEFT: intro slides in from the left, image follows */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox
              variants={fromLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionIntro
                id={2}
                headingSize={{ xs: "28px", md: "35px" }}
                paraSize={{ xs: "13px",lg:"14px" }}
              />

              <Box
                component="img"
                src={WhatWeProvideimg}
                alt="Hogist cafeteria service in operation"
                sx={{
                  display: "block",
                  width: "100%",
                  mt: { xs: 3, md: 5 },
                  // tablet: wider, shorter crop
                  aspectRatio: {
                    xs: "694 / 450",
                    sm: "16 / 9",
                    md: "694 / 450",
                  },
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </MotionBox>
          </Grid>

          {/* RIGHT: slides up from the bottom */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              variants={fromBottom}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <WeProvideGrid />
            </MotionBox>
          </Grid>
        </Grid>
      </MainContainer>
    </MotionBox>
  );
};

export default WeProvide;