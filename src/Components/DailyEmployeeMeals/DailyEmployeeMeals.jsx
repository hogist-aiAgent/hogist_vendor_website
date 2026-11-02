import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import DailyEmployeeMealsimg from "../../assets/images/DAILY EMPLOYEE MEALS .jpg";

const RED = "#c60800";
const LINE = "#f0e2e0";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const points = [
  {
    id: 1,
    bigtext: "Regular meal schedules",
    smalltext:
      "Fixed daily timings for each meal, including shift and night-shift windows.",
  },
  {
    id: 2,
    bigtext: "Workforce-based meal planning",
    smalltext:
      "Quantities planned against headcount and attendance patterns to limit shortfall and waste.",
  },
  {
    id: 3,
    bigtext: "Menu variety",
    smalltext:
      "Rotating weekly cycles so employees are not served the same meals repeatedly.",
  },
  {
    id: 4,
    bigtext: "Veg and non-veg options",
    smalltext: "Separate counters or portions where your site requires both.",
  },
  {
    id: 5,
    bigtext: "Flexible meal requirements",
    smalltext:
      "Adjustments for headcount changes, visitor days, audits and overtime.",
  },
];

const DailyEmployeeMeals = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: "42px" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        columnGap: { md: 8 },
        rowGap: { xs: 4, md: 0 },
        alignItems: "center",
        overflow: "hidden", // prevents horizontal scrollbar during the slide
      }}
    >
      {/* LEFT: image slides in from the left */}
      <MotionBox
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box
          component="img"
          src={DailyEmployeeMealsimg}
          alt="Employees collecting trays during lunch at a workplace cafeteria"
          sx={{
            display: "block",
            width: "100%",
            mt: { xs: 0, md: 5 },
            aspectRatio: "632 / 650",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </MotionBox>

      {/* RIGHT: content slides in from the right */}
      <MotionBox
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
        <SectionIntro
          id={4}
          headingSize={{ xs: "28px", md: "35px" }}
          paraSize={{ xs: "13px" }}
        />

        <Box sx={{ mt: 3.5, borderTop: `1px solid ${LINE}` }}>
          {points.map((item) => (
            <Box
              key={item.id}
              sx={{ py: 2.25, borderBottom: `1px solid ${LINE}` }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    flexShrink: 0,
                    bgcolor: RED,
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px" },
                    fontWeight: 700,
                    color: "#111",
                    lineHeight: 1.3,
                  }}
                >
                  {item.bigtext}
                </Typography>
              </Box>

              <Typography
                sx={{
                  pl: 3,
                  mt: 0.5,
                  color: "#5d564f",
                  fontSize: "12px",
                  lineHeight: 1.7,
                }}
              >
                {item.smalltext}
              </Typography>
            </Box>
          ))}
        </Box>
      </MotionBox>
    </Box>
  );
};

export default DailyEmployeeMeals;