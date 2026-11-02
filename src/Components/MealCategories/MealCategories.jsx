import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import MealCategoriesBox from "./MealCategoriesBox";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const MealCategories = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 10 },
        pb: { xs: 6, md: 12 }, // room for the hover glow at the bottom
        px: { xs: 2, sm: 4, md: "30px" },
        overflowX: "hidden", // stops horizontal scrollbar during the slide
      }}
    >
      <Box sx={{ maxWidth: 1360, mx: "auto" }}>
        {/* Intro: slides in from the left */}
        <MotionBox
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <SectionIntro
            id={5}
            headingSize={{ xs: "28px", md: "35px" }}
            paraSize={{ xs: "13px" }}
          />
        </MotionBox>

        <MealCategoriesBox />
      </Box>
    </Box>
  );
};

export default MealCategories;