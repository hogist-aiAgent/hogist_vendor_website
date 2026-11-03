import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CommonButton from "../../Common/Button/CommonButton";
import MainContainer from "../../Common/Container/Container";

const MotionBox = motion.create(Box);

const GREEN = "#1e8a4a";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const PlanningCafeteria = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "#111",
      }}
    >
      <MainContainer style={{ py: { xs: 4, sm: 6, md: 7 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* left side heading and paragraph */}
          <MotionBox
            variants={fromLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{ maxWidth: 680 }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "35px" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              Planning a cafeteria for your workplace?
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 640,
                fontSize: { xs: "13px", sm: "15px", md: "13px" },
                lineHeight: 1.7,
                color: "#cfc8c3",
              }}
            >
              Tell us your headcount, shifts and site, and we'll put together a
              cafeteria service plan and quote built around your workplace — no
              obligation.
            </Typography>
          </MotionBox>

          {/* right side button and contact info */}
          <MotionBox
            variants={fromBottom}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.75,
              alignItems: { xs: "flex-start", md: "center" },
              flexShrink: 0,
            }}
          >
            <CommonButton
              bgcolor={GREEN}
              hoverBgcolor="#17703b"
              size="medium"
             fontSize={{xs:"15px",lg:"17px"}}
              fontWeight={600}
            >
              Get a Cafeteria Service Quote
            </CommonButton>

            <Typography sx={{ color: "#8a7f75", fontSize: "12px" }}>
              Phone: [Hogist phone] · Email: [Hogist email]
            </Typography>
          </MotionBox>
        </Box>
      </MainContainer>
    </MotionBox>
  );
};

export default PlanningCafeteria;