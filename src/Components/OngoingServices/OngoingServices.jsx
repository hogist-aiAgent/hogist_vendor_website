
import { Box, Grid, Typography } from "@mui/material";
import SectionIntro from "../SectionIntro/SectionIntro";
import OngoingServicesImage from "../../assets/images/OnGoingService.jpg";
import OngoingServicesBar from "./OngoingServicesBar.jsx"

const OngoingServices = () => {
  const services = [
    {
      id: 1,
      title: "Menu coordination",
      description:
        "Ongoing menu updates aligned to seasons, feedback and changing preferences.",
    },
    {
      id: 2,
      title: "Meal planning",
      description:
        "Forward planning of quantities and cycles against your attendance patterns.",
    },
    {
      id: 3,
      title: "Service coordination",
      description:
        "Day-to-day coordination between your admin team, the counter and the kitchen.",
    },
    {
      id: 4,
      title: "Feedback handling",
      description:
        "A clear channel to raise issues, with changes actioned — not logged and forgotten.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionIntro id={6} />

          <Box
            component="img"
            src={OngoingServicesImage}
            alt="Hogist coordinator reviewing service with an HR or facility manager"
            sx={{
              borderRadius: "20px",
              width: "100%",
              display: "block",
              objectFit: "cover",
              maxHeight:150,
            }}
          />
        </Grid>

        {/* Right section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {services.map((items) => (
              <Grid size={{ xs: 12,md:6 }} key={items.id}>
                <Box
                  sx={{
                    bgcolor: "#FBEFEC",
                    borderRadius: "20px",
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#111111",
                      mb: 1,
                    }}
                  >
                    {items.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#555555",
                    }}
                  >
                    {items.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <OngoingServicesBar/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OngoingServices;
