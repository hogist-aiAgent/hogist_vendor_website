import { Box, Typography } from "@mui/material";
import CommonButton from "../../Common/Button/CommonButton";

const RED = "#c60800";

const OngoingServicesBar = () => {
  return (
    <Box
      sx={{
        gridColumn: { sm: "1 / -1" },
        px: { xs: 2.5, md: 3.75 },
        py: { xs: 3, md: 3.5 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: 3,
        bgcolor: RED,
        borderRadius: "20px",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
          Regular operational support
        </Typography>
        <Typography
          sx={{
            mt: 1.25,
            fontSize: "12px",
            lineHeight: 1.7,
            color: "#ffd9d6",
            maxWidth: 500,
          }}
        >
          Scheduled reviews to adjust menus, timings and service as your
          workforce changes.
        </Typography>
      </Box>
<Box>

      <CommonButton
              variant="contained"
              size="medium"
              bgcolor="#fff"
              color={RED}
             
            >
              Talk to a team
            </CommonButton>
</Box>
    </Box>
  );
};

export default OngoingServicesBar;