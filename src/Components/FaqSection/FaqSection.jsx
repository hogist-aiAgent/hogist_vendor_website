import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MainContainer from "../../Common/Container/Container";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);
const MotionTypography = motion.create(Typography);

const RED = "#c60800";

const Faq = [
  {
    id: 1,
    qn: "Who are the best corporate cafeteria vendors in Chennai?",
    ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
  },
  {
    id: 2,
    qn: "What should I look for when choosing a corporate cafeteria vendor?",
    ans: "Confirm valid ISO 22000 / FSSAI certification, menu flexibility for a mixed workforce, ability to scale with your headcount, a single coordinator, a food trial before commitment, and ongoing operational support as part of the service.",
  },
  {
    id: 3,
    qn: "What do corporate cafeteria management services include?",
    ans: "Menu planning, food preparation, counter staffing, service operations and ongoing support — either fully managed by us or shared with your existing facility team.",
  },
  {
    id: 4,
    qn: "Do you provide office cafeteria services and industrial canteen services?",
    ans: "Yes. We run office cafeteria services for corporate floors and IT parks, and corporate canteen services in Chennai for factories and industrial sites with multiple and night shifts.",
  },
  {
    id: 5,
    qn: "How is pricing for employee cafeteria services calculated?",
    ans: "Pricing depends on headcount, meal types, menu and service model. After a requirement discussion, you receive a quote built around your site.",
  },
  {
    id: 6,
    qn: "Can you handle multiple shifts and night-shift meals?",
    ans: "Yes. We plan fixed schedules for day, evening and night shifts, including round-the-clock sites, with quantities matched to attendance.",
  },
  {
    id: 7,
    qn: "Do you offer a food trial before we commit?",
    ans: "Yes. We arrange a tasting at your site so your team can check quality and portioning before daily service begins.",
  },
  {
    id: 8,
    qn: "Are your kitchens food-safety certified?",
    ans: "Yes. Hogist is ISO 9001:2015 and ISO 22000:2018 certified, and hygiene is followed as a documented process across every partner kitchen.",
  },
];

const LAST_ID = Faq.length;

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const FaqSection = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      
    >
      <MainContainer style={{ py: { xs: 4, sm: 6, md: 7 } }}>
        <MotionTypography
          variants={fromLeft}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: RED,
          }}
        >
          FAQ
        </MotionTypography>

        <MotionTypography
          component="h2"
          variants={fromLeft}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          sx={{
            mt: 0.5,
            mb: { xs: 3, md: 4 },
            fontSize: { xs: "28px", sm: "32px", md: "35px" },
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#111",
          }}
        >
          Questions HR and admin teams ask us
        </MotionTypography>

        <MotionBox
          variants={grid}
          sx={{
            display: "grid",
            // tablet and up: 2 columns
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gridAutoRows: { sm: "minmax(150px, auto)" },
            gap: 2,
          }}
        >
          {Faq.map((item) => {
            const isDark = item.id === LAST_ID;

            return (
              <MotionBox
                key={item.id}
                variants={fromBottom}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  borderColor: isDark ? "#3a3a3a" : RED,
                  boxShadow: isDark
                    ? "0 16px 34px rgba(0,0,0,.35)"
                    : "0 14px 30px rgba(198, 8, 0, .12)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                sx={{
                  bgcolor: isDark ? "#111" : "#fff",
                  borderRadius: "16px",
                  border: "1px solid transparent",
                  boxShadow: isDark
                    ? "0 0 0 rgba(0,0,0,0)"
                    : "0 2px 10px rgba(0,0,0,.04)",
                  p: { xs: 2.5, md: 3.5 },
                  boxSizing: "border-box",
                  minHeight: { xs: 0, sm: 150 },
                  cursor: "default",
                  willChange: "transform",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: "15px", lg: "17px" },
                    fontWeight: 700,
                    lineHeight: 1.35,
                    color: isDark ? "#fff" : "#111",
                  }}
                >
                  {item.qn}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: { xs: "12px", lg: "13px" },
                    lineHeight: 1.7,
                    color: isDark ? "#d6d0cd" : "#5d564f",
                  }}
                >
                  {item.ans}
                </Typography>
              </MotionBox>
            );
          })}
        </MotionBox>
      </MainContainer>
    </MotionBox>
  );
};

export default FaqSection;