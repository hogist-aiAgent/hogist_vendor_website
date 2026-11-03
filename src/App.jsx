import { Box } from "@mui/material";
import Hero from "./Components/HeroSection/HeroSection.jsx";
import Header from "./Components/Header/Header.jsx";
import FaqSection from "./Components/FaqSection/FaqSection.jsx";
import WeProvide from "./Components/WeProvide/WeProvide.jsx";
import HowItWorks from "./Components/HowItWorks/HowItWorks.jsx";
import DailyEmployeeMeals from "./Components/DailyEmployeeMeals/DailyEmployeeMeals.jsx";
import MealCategories from "./Components/MealCategories/MealCategories.jsx";
import OngoingServices from "./Components/OngoingServices/OngoingServices.jsx";
import PlanningCafeteria from "./Components/PlanningCafeteria/PlanningCafeteria.jsx";
import ServiceArea from "./Components/ServiceArea/ServiceArea.jsx";
import WhyHogist from "./Components/WhyHogist/WhyHogist.jsx";
import WhoWeServe from "./Components/WhoWeServe/WhoWeServe.jsx";
import FoodSafetyHygiene from "./Components/FoodSafetyHygiene/FoodSafetyHygiene.jsx";

// Offset so a section's top isn't hidden behind the fixed header after scrolling
const anchor = { scrollMarginTop: { xs: "72px", md: "90px" } };

const App = () => {
  return (
    // overflowX "clip" (not "hidden") hides the slide-in animations' sideways overflow
    // without creating a scroll container, so the sticky header keeps working
    <Box sx={{ position: "relative", overflowX: "clip" }}>
      <Header />

      {/* ids here must match `target` in Header.jsx */}
      <Box id="home" sx={anchor}>
        <Hero />
      </Box>

      <Box id="services" sx={anchor}>
        <WeProvide />
      </Box>

      <Box id="corporate-cafeteria" sx={anchor}>
        <HowItWorks />
      </Box>

      <DailyEmployeeMeals />

      <Box id="menu-pricing" sx={anchor}>
        <MealCategories />
      </Box>

      <FoodSafetyHygiene />
      <OngoingServices />
      <WhoWeServe />
      <WhyHogist />
      <ServiceArea />
      <FaqSection />

      <Box id="contact" sx={anchor}>
        <PlanningCafeteria />
      </Box>
    </Box>
  );
};
export default App;
