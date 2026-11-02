import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import headerlogo from "../../assets/images/headerlogo1.png";
import CommonButton from "../../Common/Button/CommonButton";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

const RED = "#c40a00";

const MotionBox = motion.create(Box); // older versions: motion(Box)

const Headertopic = [
  { id: 1, name: "Home" },
  { id: 2, name: "Services" },
  { id: 3, name: "Corporate Cafeteria" },
  { id: 4, name: "Menu & Pricing" },
  { id: 5, name: "Contact" },
];

const Header = () => {
  const [activeId, setActiveId] = useState(3);

  const linkSx = (isActive) => ({
    color: isActive ? RED : "#1A1A1A",
    fontSize: { md: "14px", lg: "15px" },
    fontWeight: isActive ? 600 : 500,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": { color: RED },
  });

  return (
    <>
      {/* Fixed header */}
      <MotionBox
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          pt: 2,
          px: { xs: 2, md: 2.5 },
          pointerEvents: "none", // clicks pass through the transparent padding
        }}
      >
        <Box
          sx={{
            // minHeight: { xs: 64, md: 0 },
            borderRadius: "999px",
            bgcolor: "white",
            display: "flex",
            // justifyContent: "space-between",
            width:"fit-content",
            margin:"auto",
            alignItems: "center",
            px: { xs: 2, md: 4 },
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
            pointerEvents: "auto", // re-enable clicks on the actual header
          }}
        >
          <Box>
            <Box
              component="img"
              src={headerlogo}
              alt="Hogist logo"
              sx={{ height: { xs: "60px" }, width: "auto", display: "block" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              ml: { md: 3, lg: 4.5 },
              gap: { md: 3, lg: 4.5 },
            }}
          >
            {Headertopic.map((item) => (
              <Typography
                key={item.id}
                onClick={() => setActiveId(item.id)}
                sx={linkSx(item.id === activeId)}
              >
                {item.name}
              </Typography>
            ))}
            <CommonButton
              variant="contained"
              size="medium"
            
              fontWeight={600}
             
            >
              Get a Quote
            </CommonButton>
          </Box>

          <SideMenu
            Headertopic={Headertopic}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </Box>
      </MotionBox>

      {/* Spacer so page content doesn't hide behind the fixed header */}
      <Box sx={{ height: { xs: 80, md: 106 } }} />
    </>
  );
};

export default Header;
