import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import FoodSafetyBoxes from "./FoodSafetyBoxes";
import FoodSafety1 from "../../assets/images/FoodSafety1.jpg";
import FoodSafety2 from "../../assets/images/FoodSafety2.jpg";
import MainContainer from "../../Common/Container/Container";

const CORAL = "#ff6a5c";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const imageCol = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

export default function FoodSafetyHygiene() {
  return (
    <Box
      sx={{
        bgcolor: "#111",
      
      }}
    >
      <MainContainer style={{ py: { xs: 4, sm: 6, md: 7 } }}>
        <Grid
          container
          spacing={{ xs: 4, md: 9 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Label */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: CORAL,
                }}
              >
                Food Safety &amp; Hygiene
              </Typography>

              {/* Heading */}
              <Typography
                component="h2"
                sx={{
                  mt: 2,
                  fontSize: { xs: "32px", sm: "34px", md: "35px" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                Hygiene is a process, not a promise
              </Typography>

              {/* Paragraph */}
              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: { xs: "13px", sm: "15px" },
                  lineHeight: 1.7,
                  color: "#cfc6c3",
                  maxWidth: 520,
                }}
              >
                Every cafeteria we run follows the same defined food-service
                routine, from preparation through to the serving counter.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <FoodSafetyBoxes />
              </Box>
            </MotionBox>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={imageCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "column" },
                gap: 2.25,
              }}
            >
              {[FoodSafety1, FoodSafety2].map((src, i) => (
                <MotionBox
                  key={i}
                  component="img"
                  src={src}
                  alt={
                    i === 0
                      ? "Partner kitchen, staff in uniform preparing meals at scale"
                      : "Covered service counter with hot holding equipment"
                  }
                  variants={fromRight}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  sx={{
                    display: "block",
                    width: "100%",
                    minWidth: 0,
                    // tablet: the two photos sit side by side
                    flex: { sm: 1, md: "none" },
                    aspectRatio: {
                      xs: "762 / 362",
                      sm: "4 / 3",
                      md: "762 / 362",
                    },
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              ))}
            </MotionBox>
          </Grid>
        </Grid>
      </MainContainer>
    </Box>
  );
}