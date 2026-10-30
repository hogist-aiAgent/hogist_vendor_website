import { Box } from "@mui/material";
import SectionIntro from "../SectionIntro/SectionIntro";
import MealCategoriesBox from "./MealCategoriesBox";

const MealCategories = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 1300, mx: "auto" }}>
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <SectionIntro id={5} />
        </Box>
        <MealCategoriesBox />
      </Box>
    </Box>
  );
};
export default MealCategories;