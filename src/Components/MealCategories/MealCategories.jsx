import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro/SectionIntro";
import MealCategoriesBox from "./MealCategoriesBox";
import MainContainer from "../../Common/Container/Container";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const MealCategories = () => {
  return (
    <MainContainer style={{ py: 7 }}>
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
            paraSize={{ xs: "13px",lg:"14px" }}
          />
        </MotionBox>

        <MealCategoriesBox />
      </MainContainer>
     
  );
};

export default MealCategories;