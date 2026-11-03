import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MealCategories1 from "../../assets/images/MealCategories1.jpg";
import MealCategories2 from "../../assets/images/MealCategories2.jpg";

const RED = "#c60800";
const CORAL = "#ff6a5c";
const overlay = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const cards = [
  {
    id: 1,
    subtext: "DAILY",
    bigtext: "Breakfast",
    smalltext: "Early-shift friendly items served before work hours begin.",
    image: MealCategories1,
    variant: "feature",
    from: "left", // image card
  },
  {
    id: 2,
    subtext: "MID-SHIFT",
    bigtext: "Lunch",
    smalltext: "Rice, breads, sides and accompaniments in veg and non-veg sets.",
    variant: "light",
    from: "right",
  },
  {
    id: 3,
    subtext: "MID-SHIFT",
    bigtext: "Snacks",
    smalltext: "Tea-time items for break windows and extended shifts.",
    variant: "dark",
    from: "right",
  },
  {
    id: 4,
    subtext: "NIGHT SHIFT",
    bigtext: "Dinner",
    smalltext: "Evening and night meal service for round-the-clock sites.",
    variant: "light",
    from: "right",
  },
  {
    id: 5,
    bigtext: "Regional & custom menus",
    smalltext: "Built for mixed workforces and specific dietary requirements.",
    image: MealCategories2,
    variant: "img", // image card
    from: "left",
  },
];

const MealCard = ({ card, index }) => {
  const isFeature = card.variant === "feature";
  const isDark = card.variant === "dark";
  const isImg = card.variant === "img";
  const onDark = isDark || isImg || isFeature;
  const hasImage = isImg || isFeature;

  let background = "#fff";
  if (isDark) background = "#111";
  if (hasImage) {
    background = `${overlay}, url(${card.image}) center / cover no-repeat`;
  }

  // Glow colour: coral on dark cards so it stays visible, red on light cards
  const glow = onDark ? CORAL : RED;
  const glowRgb = onDark ? "255,106,92" : "198,8,0";

  return (
    // Outer element: grid placement + entrance animation
    <MotionBox
      initial={{ x: card.from === "left" ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      sx={{
        gridRow: { md: isFeature ? "1 / span 2" : "auto" },
        display: "flex",
      }}
    >
      {/* Inner element: card look + hover effect */}
      <Box
        sx={{
          flex: 1,
          background,
          borderRadius: "20px",
          p: { xs: 2.5, md: 3.25 },
          minHeight: { xs: isFeature ? 300 : 150, md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: hasImage ? "flex-end" : "flex-start",
          boxShadow: onDark ? "none" : "0 4px 20px rgba(0,0,0,.05)",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            // 2px glowing ring + soft outer light
            boxShadow: `0 0 0 2px ${glow}, 0 0 22px 4px rgba(${glowRgb}, 0.45), 0 14px 32px rgba(${glowRgb}, 0.25)`,
          },
        }}
      >
        {card.subtext && (
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: onDark ? CORAL : RED,
            }}
          >
            {card.subtext}
          </Typography>
        )}

        <Typography
          sx={{
            mt: card.subtext ? 0.75 : 0,
            fontSize: { xs: "20px" },
            fontWeight: 700,
            lineHeight: 1.2,
            color: onDark ? "#fff" : "#111",
          }}
        >
          {card.bigtext}
        </Typography>

        <Typography
          sx={{
            mt: 1.25,
            fontSize: { xs: "12px", lg: "13px" },
            lineHeight: 1.6,
            maxWidth: isFeature ? 300 : "none",
            color: onDark ? "#e3d3d0" : "#575049",
          }}
        >
          {card.smalltext}
        </Typography>
      </Box>
    </MotionBox>
  );
};

const MealCategoriesBox = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr" },
      gridTemplateRows: { md: "repeat(2, minmax(190px, auto))" },
      gap: 2.25,
    }}
  >
    {cards.map((card, index) => (
      <MealCard key={card.id} card={card} index={index} />
    ))}
  </Box>
);

export default MealCategoriesBox;