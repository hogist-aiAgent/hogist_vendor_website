import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const zones = [
  { id: 1, name: "OMR" },
  { id: 2, name: "Guindy" },
  { id: 3, name: "Sholinganallur" },
  { id: 4, name: "Ambattur" },
  { id: 5, name: "Sriperumbudur" },
  { id: 6, name: "Oragadam" },
];

const ServiceAreaBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        bgcolor: "#fbefec",
        borderRadius: "20px",
        p: { xs: 3, md: 4.5 },
        mt: { xs: 0, md: 5 },
      }}
    >
      <Typography
        sx={{
          color: "#c60800",
          letterSpacing: "0.14em",
          fontSize: "12px",
          fontWeight: 700,
          mb: 2,
        }}
      >
        ZONES SERVED
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
        {zones.map((item) => (
          <MotionBox
            key={item.id}
            whileHover={{
              borderColor: "#c60800",
              boxShadow: "0 10px 22px rgba(198, 8, 0, .14)",
            }}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #f0d9d4",
              borderRadius: "999px",
              px: 2,
              py: 1.5,
              fontSize: { xs: "13px", lg: "14px" },
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#3d3835",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              cursor: "default",
              willChange: "transform",
            }}
          >
            {item.name}
          </MotionBox>
        ))}
      </Box>

      <Typography
        sx={{
          color: "#7a716d",
          fontWeight: 400,
          fontSize: { xs: "12px", lg: "13px" },
          lineHeight: 1.7,
        }}
      >
        Site outside these zones? Send the location and we will confirm coverage.
      </Typography>
    </Box>
  );
};

export default ServiceAreaBox;