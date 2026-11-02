import { Box, Typography } from "@mui/material";

const RED = "#c60800";
const LINE = "#ecdede";

const WeProvideGridContent = [
  {
    id: 1,
    num: "01",
    title: "Cafeteria Management",
    sum: "Day-to-day running of your cafeteria — staffing the counter, stock, service timings and coordination with your admin team.",
  },
  {
    id: 2,
    num: "02",
    title: "Daily Employee Meals",
    sum: "Recurring breakfast, lunch, snacks and dinner service built around shift patterns and headcount.",
  },
  {
    id: 3,
    num: "03",
    title: "Menu Planning",
    sum: "Weekly and monthly menu cycles with veg and non-veg options, regional preferences and rotation to avoid repetition.",
  },
  {
    id: 4,
    num: "04",
    title: "Food Preparation",
    sum: "Cooking at volume through partner kitchens or your on-site kitchen, with defined preparation and handling processes.",
  },
  {
    id: 5,
    num: "05",
    title: "Cafeteria Service Operations",
    sum: "Counter service, meal distribution and peak-hour planning so queues stay manageable during break windows.",
  },
  {
    id: 6,
    num: "06",
    title: "Ongoing Support",
    sum: "Reviews, feedback handling and menu adjustments as your workforce and requirements change.",
  },
];

const WeProvideGrid = () => {
  const total = WeProvideGridContent.length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        width: "100%",
      }}
    >
      {WeProvideGridContent.map((item, i) => {
        const isLeft = i % 2 === 0;
        const isFirstRow = i < 2;
        const isLastRow = i >= total - 2;
        const isLast = i === total - 1;

        return (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              pt: { xs: i === 0 ? 0 : 3, md: isFirstRow ? 0 : 5 },
              pb: { xs: isLast ? 0 : 3, md: isLastRow ? 0 : 4.5 },
              pr: { xs: 0, md: isLeft ? 2 : 0 },
              pl: { xs: 0, md: isLeft ? 0 : 4 },
              borderRight: {
                xs: "none",
                md: isLeft ? `1px solid ${LINE}` : "none",
              },
              borderBottom: {
                xs: isLast ? "none" : `1px solid ${LINE}`,
                md: isLastRow ? "none" : `1px solid ${LINE}`,
              },
            }}
          >
            <Typography
              sx={{
                color: RED,
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.05em",
              }}
            >
              {item.num}
            </Typography>

            <Typography
              component="h3"
              sx={{
                color: "#111",
                fontWeight: 700,
                fontSize: { xs: "18px" },
                lineHeight: 1.25,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "#575049",
                fontSize: { xs: "12px" },
                lineHeight: 1.65,
              }}
            >
              {item.sum}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default WeProvideGrid;