import { Box, Typography, Divider } from "@mui/material";
import SectionIntro from "../SectionIntro/SectionIntro";
import DailyEmployeeMealsimg from "../../assets/images/DAILY EMPLOYEE MEALS .jpg";

const DailyEmployeeMeals = () => {
  const RED = "#C70800";

  const points = [
    {
      id: 1,
      bigtext: "Regular meal schedules",
      smalltext:
        "Fixed daily timings for each meal, including shift and night-shift windows.",
    },
    {
      id: 2,
      bigtext: "Workforce-based meal planning",
      smalltext:
        "Quantities planned against headcount and attendance patterns to limit shortfall and waste.",
    },

    {
      id: 3,
      bigtext: "Menu variety",
      smalltext:
        "Rotating weekly cycles so employees are not served the same meals repeatedly.",
    },
    {
      id: 4,
      bigtext: "Veg and non-veg options",
      smalltext: "Separate counters or portions where your site requires both.",
    },
    {
      id: 5,
      bigtext: "Flexible meal requirements",
      smalltext:
        "Adjustments for headcount changes, visitor days, audits and overtime.",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={DailyEmployeeMealsimg}
        alt="employee-cafeteria-lunch-service"
        sx={{
          width: { xs: "100%", md: "80%" },
          borderRadius: { xs: "20px", md: "20px" },
        }}
      ></Box>
      <Box>
        <SectionIntro id={4} />
        <Divider
          sx={{
            mt: 2,
            borderColor: "#F4E9E6",
            mb: 1,
          }}
        ></Divider>
        {points.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "grid",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "5px",
                  height: "5px",
                  bgcolor: RED,
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                {item.bigtext}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#5D564F",
                fontSize: "10px",
              }}
            >
              {item.smalltext}
            </Typography>
            <Divider
              sx={{
                mt: 2,
                borderColor: "#F4E9E6",
                mb: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default DailyEmployeeMeals;
