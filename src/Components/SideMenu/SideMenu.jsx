import { useState } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../Header/header";
import CommonButton from "../../Common/Button/CommonButton";

const RED = "#b62819";

const SideMenu = ({
  Headertopic,
  activeId,
  setActiveId,
  button = "Get a Quote",
}) => {
  const [open, SetOpen] = useState(false);
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
        <MenuOutlinedIcon
          sx={{
            dispay: { xs: "flex", md: "none" },
          }}
        />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => SetOpen(false)}>
        <Box sx={{ width: 200, p: 2 }}>
          <IconButton onClick={() => SetOpen(false)}>
            <CloseIcon
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            />
          </IconButton>
          {Headertopic.map((item) => (
            <Typography
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                SetOpen(false);
              }}
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
              onClick={() => SetOpen(false)}
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
