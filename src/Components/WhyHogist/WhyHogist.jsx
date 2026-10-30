import { Box } from "@mui/material";
import SectionIntro from "../SectionIntro/SectionIntro";
import WhyHogistBox from "./WhyHogistBox";
import WhyHogistDetails from "./WhyHogistDetails";

function WhyHogist() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
         py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor:"white"
        
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <SectionIntro id={8} />
        <WhyHogistBox />
      </Box>

      <WhyHogistDetails />
    </Box>
  );
}

export default WhyHogist;