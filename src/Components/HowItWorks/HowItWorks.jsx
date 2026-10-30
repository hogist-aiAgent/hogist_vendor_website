import { Box, Typography } from "@mui/material";
import SectionIntro from "../SectionIntro/SectionIntro";
import HowItWorksBox from "./HowItWorksBox";
const HowItWorks = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 4, md: 10 },
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb:{xs:4,md:1}
            }}
          >
            <SectionIntro id={3} />
          </Box>
        </Box>
      </Box>

      <HowItWorksBox />
    </>
  );
};
export default HowItWorks;
