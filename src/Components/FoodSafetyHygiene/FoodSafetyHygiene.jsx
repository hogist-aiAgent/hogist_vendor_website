import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import FoodSafetyBoxes from "./FoodSafetyBoxes";
import FoodSafety1 from "../../assets/images/FoodSafety1.jpg";
import FoodSafety2 from "../../assets/images/FoodSafety2.jpg";

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
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        bgcolor: "#111",
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
          id={11}
          headingSize={{ xs: "32px", md: "35px" }}
          paraSize={{ xs: "13px" }}
        />
        <Box sx={{ mt: 4 }}>
          <FoodSafetyBoxes />
        </Box>
      </MotionBox>

      {/* RIGHT */}
      <MotionBox
        variants={imageCol}
        sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}
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
              aspectRatio: "762 / 362",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        ))}
      </MotionBox>
    </MotionBox>
  );
}