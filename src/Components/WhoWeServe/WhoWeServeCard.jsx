import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import cardimg from "../../assets/images/DAILY EMPLOYEE MEALS .jpg";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const corporateServices = [
  {
    id: 1,
    title: "Corporate Offices",
    description: "Daily cafeteria service for corporate floors and head offices.",
  },
  {
    id: 2,
    title: "IT & Technology Companies",
    description:
      "Variety-led menus and quick counter service for IT parks and campuses.",
  },
  {
    id: 3,
    title: "Manufacturing Companies",
    description: "High-volume, multi-shift meal programs for factory workforces.",
  },
  {
    id: 4,
    title: "Industrial Facilities",
    description:
      "Round-the-clock canteen operations for plants and industrial units.",
  },
  {
    id: 5,
    title: "Large Workforce Locations",
    description:
      "Peak-hour planning and scale for sites feeding hundreds to thousands daily.",
  },
];

const LAST_ID = corporateServices.length;

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const WhoWeServeCard = () => {
  return (
    <MotionBox
      variants={grid}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        },
        gap: 2.25,
      }}
    >
      {corporateServices.map((item) => {
        const isDark = item.id === LAST_ID;

        return (
          <MotionBox
            key={item.id}
            variants={fromBottom}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -12,
              // borderColor: isDark ? "#3a3a3a" : "#e4a08a",
              boxShadow: isDark
                ? "0 16px 34px rgba(0,0,0,.35)"
                : "0 16px 34px rgba(196, 93, 59, .18)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: isDark ? "#111" : "#fff",
              border: "1px solid transparent",
              boxShadow: isDark ? "0 0 0 rgba(0,0,0,0)" : "0 4px 20px rgba(0,0,0,.05)",
              cursor: "default",
              willChange: "transform",
            }}
          >
            <Box
              component="img"
              src={cardimg}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                height: "130px",
                objectFit: "cover",
              }}
            />

            <Box sx={{ p: 3.1 }}>
              <Typography
                sx={{
                  fontSize: { xs: "15px", lg: "17px" },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: isDark ? "#fff" : "#111",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.25,
                  fontSize: { xs: "12px", lg: "13px" },
                  lineHeight: 1.55,
                  color: isDark ? "#d6d0cd" : "#5d564f",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </MotionBox>
        );
      })}
    </MotionBox>
  );
};

export default WhoWeServeCard;