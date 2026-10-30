import React from "react";
import SectionIntro from "../SectionIntro/SectionIntro";
import { Box, Typography, Divider } from "@mui/material";
import CommonButton from "../../Common/Button/CommonButton";
import counterImg from "../../assets/images/corporatecafeteriachennaicounter.jpg";
import contactImg from "../../assets/images/corporatecafeteriaonepointcontact.jpg";

const Hero = ({ button = "Get a Cafeteria Service Quote" }) => {
  const FeatureItem = [
    {
      id: 1,
      Title: "Daily meal service",
      smalltext: "Breakfast, lunch, snacks, dinner",
    },
    {
      id: 2,
      Title: "ISO certified",
      smalltext: "ISO 9001:2015 & ISO 22000:2018",
    },
    {
      id: 3,
      Title: "Any workforce size",
      smalltext: "Offices, plants, industrial sites",
    },
    {
      id: 4,
      Title: "200+ partner kitchens",
      smalltext: "Across Chennai and its industrial belt",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#FBEFEB",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        gap: { xs: 4, md: 2 },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1.5,
        }}
      >
        <SectionIntro id={1} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2,auto)" },
            justifyContent: { sm: "start" },

            gap: 2,
            mt: 2,
            maxWidth: { xs: 280, md: "none" },
          }}
        >
          <CommonButton
            bgcolor="#1E8A4A"
            px={2}
            py={1.5}
            sx={{
              height: "100%",
              minHeight: 48,
            }}
          >
            {button}
          </CommonButton>
          <CommonButton
            bgcolor="white"
            color="#b62819"
            border="1.5px solid #b62819"
            px={2}
            py={1.5}
            sx={{
              height: "100%",
              minHeight: 48,
            }}
          >
            Talk to Our Team
          </CommonButton>
        </Box>
        <Divider sx={{ my: 4, maxWidth: 550 }} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            columnGap: 2,
            rowGap: 3,
            maxWidth: 550,
          }}
        >
          {FeatureItem.map((item) => (
            <Box key={item.id}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "13px",
                }}
              >
                {item.Title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "10px",
                  color: "#6b6b6b",
                }}
              >
                {item.smalltext}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Box
          component="img"
          src={counterImg}
          alt="Corporate cafeteria vendor serving employees at a Chennai office cafeteria counter"
          sx={{
            maxWidth: "520px",
            borderRadius: "20px",
            width: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            component="img"
            src={contactImg}
            alt="Employees dining in an office cafeteria in Chennai with a dedicated coordinator"
            // sx={counterImg}
            sx={{
              maxWidth: 250,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              minHeight: 150,
            }}
          />

          <Box
            sx={{
              bgcolor: "#C70800",
              minHeight: 100,
              py: 3,
              px: 2,
              maxWidth: 220,
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              A dedicated cafeteria coordinator
            </Typography>
            <Typography
              sx={{
                color: "#EA8A85",
                fontSize: "10px",
                pt: 1,
              }}
            >
              One point of contact for menus, service and feedback.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
