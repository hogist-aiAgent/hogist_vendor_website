import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import OngoingServicesImage from "../../assets/images/OnGoingService.jpg";
import OngoingServicesBar from "./OngoingServicesBar.jsx";

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
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "#fff",
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: "42px" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
        columnGap: { md: 9 },
        rowGap: { xs: 4, md: 0 },
        alignItems: "start",
        overflow: "hidden",
      }}
    >
      {/* LEFT */}
      <MotionBox
        variants={fromLeft}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionIntro
          id={10}
          headingSize={{ xs: "28px", md: "35px" }}
          paraSize={{ xs: "13px" }}
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
            mt: 5,
          }}
        />
      </MotionBox>

      {/* RIGHT */}
      <MotionBox
        variants={rightGrid}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
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
                fontSize: "15px",
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
                fontSize: "12px",
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
          sx={{ gridColumn: { sm: "1 / -1" } }}
        >
          <OngoingServicesBar />
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default OngoingServices;