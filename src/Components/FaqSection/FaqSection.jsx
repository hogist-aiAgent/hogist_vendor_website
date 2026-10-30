import { Box, Typography } from "@mui/material";
const FaqSection = () => {
  const Faq = [
    {
      id: 1,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 2,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 3,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 4,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 5,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 6,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 7,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
    {
      id: 8,
      qn: "Who are the best corporate cafeteria vendors in Chennai?",
      ans: "The right vendor depends on your workforce size, shift pattern and food-safety needs. Look for ISO 22000 certification, menu flexibility and a single point of contact. Hogist offers all three, with 200+ partner kitchens across Chennai to serve offices and industrial sites at any scale.",
    },
  ];
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography
        sx={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#CA160E",
        }}
      >
        FAQ
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "800",
          pt: 1,
          pb: 1,
        }}
      >
        Questions HR and admin teams ask us
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {Faq.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              bgcolor: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              maxWidth: { xs: "300px", sm: "500px", md: "650px" },
              px: 1,
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "#151515",
                fontWeight: 600,
              }}
            >
              {item.qn}
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                lineHeight: 2,
                color: "#69635D",
              }}
            >
              {item.ans}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default FaqSection;
