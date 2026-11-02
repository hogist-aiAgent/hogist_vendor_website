import { Box, Typography } from "@mui/material";

const whyHogist = [
  {
    id: 1,
    title: "One accountable team",
    description:
      "A dedicated coordinator is your single point of contact for menus, service and feedback — no chasing multiple suppliers.",
  },
  {
    id: 2,
    title: "Food-safety certified",
    description:
      "ISO 9001:2015 and ISO 22000:2018 certification means hygiene and quality are documented processes, not verbal assurances.",
  },
  {
    id: 3,
    title: "Scales with your headcount",
    description:
      "Quantities planned against attendance, so shift changes, visitor days and overtime are absorbed without shortfall or waste.",
  },
  {
    id: 4,
    title: "Customised per site",
    description:
      "Menus, counters and service flow designed around your workplace — an office pantry and a plant canteen are run differently.",
  },
  {
    id: 5,
    title: "Corporate-focused support",
    description:
      "Regular reviews and clear reporting keep your admin team informed instead of guessing what happened on the floor.",
  },
];

const border = "1px solid rgb(240, 226, 222)";

const WhyHogistDetails = () => (
  <Box sx={{ borderTop: border }}>
    {whyHogist.map((item) => (
      <Box
        key={item.id}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "210px 1fr" },
          columnGap: 3,
          rowGap: 0.5,
          py: 3.4,
          borderBottom: border,
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "rgb(17, 17, 17)",
            maxWidth: { xs: "100%", sm: "150px" },
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgb(87, 80, 73)",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default WhyHogistDetails;