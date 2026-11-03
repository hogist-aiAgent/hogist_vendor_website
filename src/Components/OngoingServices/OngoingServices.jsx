import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import OngoingServicesImage from "../../assets/images/OnGoingService.jpg";
import OngoingServicesBar from "./OngoingServicesBar.jsx";
import MainContainer from "../../Common/Container/Container";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const services = [
  {
    id: 1,
    title: "Menu coordination",
    description:
      "Ongoing menu updates aligned to seasons, feedback and changing preferences.",
  },
  {
    id: 2,
    title: "Meal planning",
    description:
      "Forward planning of quantities and cycles against your attendance patterns.",
  },
  {
    id: 3,
    title: "Service coordination",
    description:
      "Day-to-day coordination between your admin team, the counter and the kitchen.",
  },
  {
    id: 4,
    title: "Feedback handling",
    description:
      "A clear channel to raise issues, with changes actioned — not logged and forgotten.",
  },
];

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const rightGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const OngoingServices = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
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
              <SectionIntro
                id={10}
                headingSize={{ xs: "28px", md: "35px" }}
                paraSize={{ xs: "13px",lg:"14px" }}
              />
              <Box
                component="img"
                src={OngoingServicesImage}
                alt="Hogist coordinator reviewing service with an HR or facility manager"
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "694 / 305",
                  objectFit: "cover",
                  borderRadius: "20px",
                  mt: { xs: 3, md: 5 },
                }}
              />
            </MotionBox>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              variants={rightGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                display: "grid",
                // tablet: 2 columns, narrow desktop (900-1199px): 1 column so text isn't squeezed
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "1fr",
                  lg: "1fr 1fr",
                },
                gap: 2.25,
              }}
            >
              {services.map((item) => (
                <MotionBox
                  key={item.id}
                  variants={fromRight}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{
                    y: -6,
                    borderColor: "#e4a08a",
                    boxShadow: "0 14px 30px rgba(196, 93, 59, 0.18)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  sx={{
                    bgcolor: "#fbefeb",
                    borderRadius: "20px",
                    p: { xs: 2.5, md: 3.75 },
                    border: "1px solid transparent",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    cursor: "default",
                    willChange: "transform",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", lg: "17px" },
                      fontWeight: 700,
                      color: "#111",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.25,
                      fontSize: { xs: "12px", lg: "13px" },
                      lineHeight: 1.7,
                      color: "#5d564f",
                    }}
                  >
                    {item.description}
                  </Typography>
                </MotionBox>
              ))}

              <MotionBox
                variants={fromBottom}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{ gridColumn: "1 / -1" }}
              >
                <OngoingServicesBar />
              </MotionBox>
            </MotionBox>
          </Grid>
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default OngoingServices;