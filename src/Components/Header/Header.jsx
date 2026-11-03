import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import headerlogo from "../../assets/images/headerlogo1.png";
import CommonButton from "../../Common/Button/CommonButton";
import MainContainer from "../../Common/Container/Container";
import SideMenu from "../SideMenu/SideMenu";

const RED = "#c40a00";

const MotionBox = motion.create(Box); // older versions: motion(Box)

// `target` must match the id of the section wrapper in App.jsx
const Headertopic = [
  { id: 1, name: "Home", target: "home" },
  { id: 2, name: "Services", target: "services" },
  { id: 3, name: "Corporate Cafeteria", target: "corporate-cafeteria" },
  { id: 4, name: "Menu & Pricing", target: "menu-pricing" },
  { id: 5, name: "Contact", target: "contact" },
];

const QUOTE_TARGET = "contact"; // "Get a Quote" scrolls here
const SPY_OFFSET = 140; // px below the top of the viewport used to pick the active item

const Header = () => {
  const [activeId, setActiveId] = useState(1);
  const clickLock = useRef(0); // timestamp: pause scroll-spy while a click-scroll is running

  const scrollToTarget = (target) => {
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavigate = (item) => {
    setActiveId(item.id);
    clickLock.current = Date.now();
    scrollToTarget(item.target);
  };

  const handleQuote = () => {
    const contact = Headertopic.find((i) => i.target === QUOTE_TARGET);
    if (contact) handleNavigate(contact);
  };

  // Scroll-spy: highlight the menu item for the section currently on screen
  useEffect(() => {
    const sections = Headertopic.map((item) => ({
      id: item.id,
      element: document.getElementById(item.target),
    }));
    let frameId = null;

    const onScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        if (Date.now() - clickLock.current < 1000) return;

        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        let current = Headertopic[0].id;
        for (const section of sections) {
          if (
            section.element &&
            section.element.getBoundingClientRect().top <= SPY_OFFSET
          ) {
            current = section.id;
          }
        }
        if (atBottom) current = Headertopic[Headertopic.length - 1].id;

        setActiveId((active) => (active === current ? active : current));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const linkSx = (isActive) => ({
    color: isActive ? RED : "#1A1A1A",
    fontSize: { md: "15px", lg: "14.4px" },
    fontWeight: isActive ? 600 : 500,
    whiteSpace: "nowrap",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s",
    "&:hover": { color: RED },
  });

  return (
    <>
      {/* Sticky header: stays in the page flow (no overlap, no spacer needed),
          the white bar sits inside MainContainer so it lines up with the sections */}
      <MotionBox
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          position: "sticky",
          top: 0,
          pt: "5px",
          zIndex: 1100,
          pointerEvents: "none", // clicks pass through the transparent strip
        }}
      >
        <MainContainer style={{ py: 0 }}>
        <Box
          sx={{
            borderRadius: "15px",
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box", // keep the padding inside the 100% width (no right overflow)
            px: { xs: 2, md: 3, lg: 4 },
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
            pointerEvents: "auto", // re-enable clicks on the actual header
          }}
        >
          <Box
            component="img"
            src={headerlogo}
            alt="Hogist logo"
            onClick={() => handleNavigate(Headertopic[0])}
            sx={{
              height: { xs: "60px" },
              width: "auto",
              display: "block",
              cursor: "pointer",
            }}
          />

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              ml: { md: 2, lg: 4.5 },
              gap: { md: 2, lg: 4.5 },
            }}
          >
            {Headertopic.map((item) => (
              <Typography
                key={item.id}
                component="a"
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item);
                }}
                sx={linkSx(item.id === activeId)}
              >
                {item.name}
              </Typography>
            ))}
            <CommonButton
              variant="contained"
              size="medium"
              fontWeight={600}
              fontSize={{ xs: "15px", lg: "17px" }}
              onClick={handleQuote}
            >
              Get a Quote
            </CommonButton>
          </Box>

          <SideMenu
            Headertopic={Headertopic}
            activeId={activeId}
            onNavigate={handleNavigate}
            onQuote={handleQuote}
          />
        </Box>
        </MainContainer>
      </MotionBox>
    </>
  );
};

export default Header;
