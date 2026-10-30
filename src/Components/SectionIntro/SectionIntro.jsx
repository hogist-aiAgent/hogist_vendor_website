import { Box, Typography } from "@mui/material";
const RED = "#b62819";

const SectionIntro = ({ id, smalltext, bigtext, para, maxWidth = 300 }) => {
  const SectionIntroText = [
  {
    id: 1,
    smalltext: "CORPORATE CAFETERIA & CANTEEN SERVICES",
    bigtext: "Corporate Cafeteria Vendors in Chennai",
    para: "Hogist is a corporate cafeteria vendor in Chennai providing end-to-end corporate cafeteria services for offices, IT parks and industrial sites. From menu planning and food preparation to counter service and daily operational support, one accountable team runs your workplace cafeteria — so your HR and admin staff manage a single point of contact instead of a dozen. ISO 9001:2015 and ISO 22000:2018 certified, backed by 200+ partner kitchens, at any workforce size.",
  },
  {
    id: 2,
    smalltext: "WHAT WE PROVIDE",
    bigtext: "Corporate cafeteria management services we provide",
    para: "Each part of the service can be handled by us or shared with your existing facility team.",
  },
  {
    id: 3,
    center: true,
    smalltext: "HOW IT WORKS",
    bigtext: "How our corporate cafeteria service works",
    para: "Five steps from first conversation to daily service. Most workplaces move from discussion to operations in a few weeks.",
  },
  {
    id: 4,
    smalltext: "DAILY EMPLOYEE MEALS",
    bigtext: "Employee cafeteria services and daily meal programs",
    para: "A cafeteria is a recurring commitment, not a one-off order. We plan employee cafeteria services around how your workplace actually runs.",
  },
  {
    id: 5,
    split: true,
    smalltext: "MEAL CATEGORIES",
    bigtext: "Cafeteria menu and meal options",
    para: "Menus are built per site. The categories below are the usual starting point for a workplace cafeteria.",
  },
  {
    id: 6,
    smalltext: "LET'S PLAN YOUR CAFETERIA",
    bigtext: "Planning a cafeteria for your workplace?",
    para: "Tell us your headcount, shifts and site, and we'll put together a cafeteria service plan and quote built around your workplace — no obligation.",
  },
  {
    id:7,
    smalltext:"SERVICE AREAS",
    bigtext:"Corporate canteen services across Chennai and its industrial belt",
    para:"We run corporate canteen services in Chennai and across its surrounding industrial corridor — IT and corporate hubs along OMR, Guindy and Sholinganallur, and manufacturing zones in Ambattur, Sriperumbudur and Oragadam. With 200+ partner kitchens, we can place a cafeteria service close to your site and scale it as your workforce grows.",
    para1:"Office cafeterias and industrial canteens are run differently, and we plan for both. Our office cafeteria services suit corporate floors and IT parks where employees expect variety and quick service during short breaks; for plants and round-the-clock sites, service is geared to high volume and multiple shifts. The meal planning, hygiene process and single point of contact stay the same — only the scale and menu change."

  },
  {
  id: 8,
  smalltext: "WHY HOGIST",
  bigtext: "Why choose Hogist as your corporate cafeteria vendor?",
  para: "Choosing the right corporate cafeteria vendor means having one reliable team that takes ownership of the entire experience — from food quality and daily service to employee satisfaction and ongoing support. With Hogist, your workplace cafeteria is managed seamlessly, so you can focus on your people while we take care of the food."
},
{
  id:9,
  smalltext:"WHO WE SERVE",
  bigtext:"Workplaces we run cafeterias for"
}
  
];
  // const filteritems = SectionIntroText.filter((item) => item.id == 1);
  // console.log(filteritems);
  const pillStyle = {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: 800,
    color: "#c60800",
    bgcolor: "white",
    border: "1px solid #eee",
    borderRadius: "999px",
    px: 2.5,
    py: 1,
  };
  const plainstyle = {
    fontSize: "10px",
    fontWeight: 800,
    color: "#c60800",
  };
  return (
    <Box>
      <Box>
        {SectionIntroText.map((items) => {
          const isFirst = items.id === id;
          if (!isFirst) {
            return null;
          }
          const isPill = items.id === 1;
          const isCenter = items.center;

          const eyebrow = (
            <Box>
              <Typography sx={isPill ? pillStyle : plainstyle}>
                {items.smalltext}
              </Typography>
            </Box>
          );
          const heading = (
            <Box>
              <Typography
                sx={{
                  fontSize: "42px",
                  fontWeight: 800,
                  maxWidth: 500,
                  lineHeight: 1.2,
                }}
              >
                {items.bigtext}
              </Typography>
            </Box>
          );
          const paragraph = (
            <Typography
              sx={{
                color: "#4a4340",
                fontWeight: 100,
                fontSize: "13px",
                maxWidth: 400,
                lineHeight: 1.8,
              }}
            >
              {items.para}
            </Typography>
          );
           const paragraph1 = (
            <Typography
              sx={{
                color: "#4a4340",
                fontWeight: 100,
                fontSize: "13px",
                maxWidth: 400,
                lineHeight: 1.8,
                mt:1.5
              }}
            >
              {items.para1}
            </Typography>
          );

          if (items.split) {
            return (
              <Box
                key={items.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                  gap: { xs: 2, md: 6 },
                  color: "black",
                }}
              >
                <Box sx={{ display: "grid", gap: 1 }}>
                  {eyebrow}
                  {heading}
                </Box>
                {paragraph}
              </Box>
            );
          }

          return (
            <Box
              key={items.id}
              sx={{
                display: "grid",
                gap: 1,
                color: "black",
                justifyItems: isCenter ? "center" : "start",
                textAlign: isCenter ? "center" : "left",
              }}
            >
              {eyebrow}
              {heading}
              {paragraph}
              {paragraph1}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default SectionIntro;