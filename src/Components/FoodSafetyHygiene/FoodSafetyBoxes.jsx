import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const items = [
  {
    id: 1,
    title: "Kitchen hygiene",
    description:
      "Cleaning schedules, separated prep zones and documented routines across every partner kitchen.",
  },
  {
    id: 2,
    title: "Preparation standards",
    description:
      "Defined cooking, portioning and temperature-handling processes at volume.",
  },
  {
    id: 3,
    title: "Quality checks",
    description:
      "Checks at preparation and service stages so what reaches the counter is consistent.",
  },
  {
    id: 4,
    title: "Safe handling",
    description:
      "Controlled storage, transport and serving practices in line with our ISO 22000:2018 certification.",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const FoodSafetyBoxes = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
      {/* FOUR BOXES */}
      <MotionBox
        variants={grid}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr", lg: "1fr 1fr" },
          border: "1px solid #262220",
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: "#141110",
        }}
      >
        {items.map((item, i) => (
          <MotionBox
            key={item.id}
            variants={fromBottom}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              backgroundColor: "#1c1817",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            sx={{
              p: { xs: 2.5, md: 3.25 },
              bgcolor: "transparent",
              borderRight: {
                xs: "none",
                sm: i % 2 === 0 ? "1px solid #262220" : "none",
                md: "none",
                lg: i % 2 === 0 ? "1px solid #262220" : "none",
              },
              borderBottom: {
                xs: i < items.length - 1 ? "1px solid #262220" : "none",
                sm: i < 2 ? "1px solid #262220" : "none",
                md: i < items.length - 1 ? "1px solid #262220" : "none",
                lg: i < 2 ? "1px solid #262220" : "none",
              },
              cursor: "default",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#fff",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                mt: 1.25,
                fontSize: "12px",
                lineHeight: 1.7,
                color: "#9c9490",
              }}
            >
              {item.description}
            </Typography>
          </MotionBox>
        ))}
      </MotionBox>

      {/* BOTTOM BAR */}
      <MotionBox
        variants={fromBottom}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        whileHover={{
          borderColor: "#c60800",
          boxShadow: "0 14px 30px rgba(198, 8, 0, .12)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        sx={{
          bgcolor: "#141110",
          border: "1px solid #262220",
          borderRadius: "16px",
          px: { xs: 2.5, md: 3.25 },
          py: 2.5,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          cursor: "default",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "13px", lg: "14px" },
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#fff",
          }}
        >
          ISO 9001:2015 &amp; ISO 22000:2018 Certified Company
        </Typography>
      </MotionBox>
    </Box>
  );
};

export default FoodSafetyBoxes;