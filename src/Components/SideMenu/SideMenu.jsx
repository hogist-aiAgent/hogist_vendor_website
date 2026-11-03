import { useState } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CommonButton from "../../Common/Button/CommonButton";

const RED = "#b62819";
const DRAWER_CLOSE_DELAY = 300; // let the drawer release the body scroll-lock first

const SideMenu = ({
  Headertopic,
  activeId,
  onNavigate,
  onQuote,
  button = "Get a Quote",
}) => {
  const [open, SetOpen] = useState(false);

  // Close the drawer first, then scroll (a modal drawer blocks page scrolling while open)
  const closeThen = (action) => {
    SetOpen(false);
    setTimeout(action, DRAWER_CLOSE_DELAY);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        onClick={() => SetOpen(true)}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => SetOpen(false)}>
        <Box sx={{ width: 200, p: 2 }}>
          <IconButton onClick={() => SetOpen(false)}>
            <CloseIcon />
          </IconButton>
          {Headertopic.map((item) => (
            <Typography
              key={item.id}
              onClick={() => closeThen(() => onNavigate(item))}
              sx={{
                py: 1.5,
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                color: item.id === activeId ? RED : "#1A1A1A",
                "&:hover": { color: RED },
              }}
            >
              {item.name}
            </Typography>
          ))}
          <Box sx={{ mt: 2 }}>
            <CommonButton
              variant="contained"
              isOutlined={false}
              width="100%"
              fontSize="16px"
              fontWeight={500}
              height={45}
              px={2}
              py={0}
              borderRadius="12px"
              onClick={() => closeThen(onQuote)}
            >
              {button}
            </CommonButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default SideMenu;