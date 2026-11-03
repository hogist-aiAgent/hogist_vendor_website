import { useState } from "react";
import { Box, Typography } from "@mui/material";

const LINE = "#f0e2e0";
const RED = "#c60800";

const CONTENT = [
  {
    id: 1,
    num: "01",
    bigtext: "Requirement Discussion",
    smalltext: "Headcount, shifts, meal timings, site facilities and budget range.",
  },
  {
    id: 2,
    num: "02",
    bigtext: "Menu & Meal Planning",
    smalltext: "A proposed menu cycle with veg and non-veg options for your review.",
  },
  {
    id: 3,
    num: "03",
    bigtext: "Food Trial",
    smalltext: "A tasting at your site so your team can check quality and portioning.",
  },
  {
    id: 4,
    num: "04",
    bigtext: "Cafeteria Setup / Service Planning",
    smalltext: "Counter layout, service flow, staffing and break-window schedule.",
  },
  {
    id: 5,
    num: "05",
    bigtext: "Daily Operations & Support",
    smalltext: "Service runs daily, with reviews and menu changes as needed.",
  },
];

const LAST = CONTENT.length - 1;

const HowItWorksBox = () => {
  // the last step is highlighted by default; hovering another card moves the highlight
  const [active, setActive] = useState(LAST);

  return (
    <Box
      onMouseLeave={() => setActive(LAST)}
      sx={{
        bgcolor: "#fff",
        borderRadius: "20px",
        overflow: "hidden", // keeps the dark card inside the rounded corners
        boxShadow: "0 4px 20px rgba(0,0,0,.05)",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(5, 1fr)" },
      }}
    >
      {CONTENT.map((item, index) => {
        const isActive = index === active;
        const isLast = index === LAST;

        return (
          <Box
            key={item.id}
            tabIndex={0}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            sx={{
              px: 3,
              pt: 3,
              pb: 3,
              cursor: "default",
              outline: "none",
              bgcolor: isActive ? "#111111" : "#fff",
              borderRight: { md: isLast ? "none" : `1px solid ${LINE}` },
              borderBottom: {
                xs: isLast ? "none" : `1px solid ${LINE}`,
                md: "none",
              },
              transition: "background-color .2s",
              "&:focus-visible": { boxShadow: `inset 0 0 0 2px ${RED}` },
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 800,
                lineHeight: 1.2,
                color: isActive ? RED : "#efcec9",
                transition: "color .2s",
              }}
            >
              {item.num}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                fontSize: {xs: "15px", lg: "17px"},
                fontWeight: 700,
                lineHeight: 1.25,
                color: isActive ? "#fff" : "#111111",
                transition: "color .2s",
              }}
            >
              {item.bigtext}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                fontSize: {xs: "12px", lg: "13px"},
                fontWeight: 400,
                lineHeight: 1.6,
                color: isActive ? "#e3d3d0" : "#575049",
                transition: "color .2s",
              }}
            >
              {item.smalltext}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default HowItWorksBox;