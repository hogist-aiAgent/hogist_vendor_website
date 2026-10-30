import { Box, Grid, Typography } from "@mui/material";
import MealCategories1 from "../../assets/images/MealCategories1.jpg";
import MealCategories2 from "../../assets/images/MealCategories2.jpg";
const RED = "#C70800";
const overlay = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))";

const imageCard = {
  subtext: "DAILY",
  bigtext: "Breakfast",
  smalltext: "Early-shift friendly items served before work hours begin.",
  image: MealCategories1,
};

const cards = [
  {
    id: 1,
    subtext: "MID-SHIFT",
    bigtext: "Lunch",
    smalltext: "Rice, breads, sides and accompaniments in veg and non-veg sets.",
    variant: "light",
  },
  {
    id: 2,
    subtext: "MID-SHIFT",
    bigtext: "Snacks",
    smalltext: "Tea-time items for break windows and extended shifts.",
    variant: "dark",
  },
  {
    id: 3,
    subtext: "NIGHT SHIFT",
    bigtext: "Dinner",
    smalltext: "Evening and night meal service for round-the-clock sites.",
    variant: "light",
  },
  {
    id: 4,
    bigtext: "Regional & custom menus",
    smalltext: "Built for mixed workforces and specific dietary requirements.",
    image: MealCategories2,
    variant: "img",
  },
];

// LEFT BOX
const ImgBox = () => (
  <Box
    sx={{
      backgroundImage: `${overlay}, url(${imageCard.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "20px",
      p: { xs: 2.5, md: 3.5 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    }}
  >
    <Typography sx={{ fontSize: "10px", fontWeight: 800, letterSpacing: 0.5, color: "#FF6A5C" }}>
      {imageCard.subtext}
    </Typography>
    <Typography sx={{ mt: 1.5, fontSize: "22px", fontWeight: 800, color: "#fff" }}>
      {imageCard.bigtext}
    </Typography>
    <Typography sx={{ mt: 1.5, fontSize: "12px", lineHeight: 1.7, maxWidth: 340, color: "#d6d6d6" }}>
      {imageCard.smalltext}
    </Typography>
  </Box>
);

// RIGHT BOX
const CardBox = () => (

  <Box
  //     sx={{
  //       display: "grid",
  // // in MealCategoriesBox
  // gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  //       gridAutoRows: { sm: "1fr" },
  //       gap: 2.5,
  //       height: "100%",
  //       width:"100%"
  //     }}
  >
    <Grid container spacing={2}>
      {cards.map((items) => {
        const isDark = items.variant === "dark";
        const isImg = items.variant === "img";
        const onDark = isDark || isImg;

        let background = "#fff";
        if (isDark) background = "#111";
        if (isImg) background = `${overlay}, url(${items.image}) center / cover no-repeat`;

        return (
          <Grid size={{ xs: 12, md: 6 }} key={items.id}  sx={{
                background,
                borderRadius: "20px",
                p: { xs: 2.5, md: 2},
                minHeight: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: isImg ? "center" : "flex-start",
                textAlign: isImg ? "center" : "left",
                alignItems: isImg ? "center" : "stretch",
                boxShadow: onDark ? "none" : "0 10px 40px rgba(0,0,0,.06)",
              }}>


            <Box
              
             
            >
              {items.subtext && (
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: 0.5,
                    color: onDark ? "#FF6A5C" : RED,
                  }}
                >
                  {items.subtext}
                </Typography>
              )}
              <Typography
                sx={{
                  mt: items.subtext ? 1.5 : 0,
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: onDark ? "#fff" : "#111",
                }}
              >
                {items.bigtext}
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: "12px",
                  lineHeight: 1.7,
                  color: onDark ? "#d6d6d6" : "#575049",
                }}
              >
                {items.smalltext}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

const MealCategoriesBox = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 2.5,
      alignItems: "stretch",
    }}
  >
    <ImgBox />
    <CardBox />
  </Box>
);

export default MealCategoriesBox;