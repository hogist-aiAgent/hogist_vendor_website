import { Box, Typography } from "@mui/material";

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
    id: 7,
    area: true,
    smalltext: "SERVICE AREAS",
    bigtext: "Corporate canteen services across Chennai and its industrial belt",
    para: "We run corporate canteen services in Chennai and across its surrounding industrial corridor — IT and corporate hubs along OMR, Guindy and Sholinganallur, and manufacturing zones in Ambattur, Sriperumbudur and Oragadam. With 200+ partner kitchens, we can place a cafeteria service close to your site and scale it as your workforce grows.",
    para1:
      "Office cafeterias and industrial canteens are run differently, and we plan for both. Our office cafeteria services suit corporate floors and IT parks where employees expect variety and quick service during short breaks; for plants and round-the-clock sites, service is geared to high volume and multiple shifts. The meal planning, hygiene process and single point of contact stay the same — only the scale and menu change.",
  },
  {
    id: 8,
    narrow: true,
    smalltext: "WHY HOGIST",
    bigtext: "Why choose Hogist as your corporate cafeteria vendor?",
    para: "Choosing the right corporate cafeteria vendor means one team owns the outcome — the food, the service and the follow-up.",
  },
  {
    id: 9,
    smalltext: "WHO WE SERVE",
    bigtext: "Workplaces we run cafeterias for",
  },
  {
    id: 10,
    wide: true,
    smalltext: "ONGOING SERVICE",
    bigtext: "The service continues after the food is delivered",
    para: "A cafeteria vendor's job doesn't end at the counter. Our corporate cafeteria management keeps running behind the scenes so daily service stays consistent.",
  },
  {
  id: 11,
  smalltext: "FOOD SAFETY & HYGIENE",
  bigtext: "Hygiene is a process, not a promise",
  para: "Every cafeteria we run follows the same defined food-service routine, from preparation through to the serving counter."
}
];

const pillStyle = {
  display: "inline-block",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#c60800",
  bgcolor: "white",
  border: "1px solid #eee",
  borderRadius: "999px",
  px: 2.25,
  py: 1.1,
};

const plainStyle = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c60800",
};

const SectionIntro = ({ id, headingSize, paraSize }) => {
      return (
    <Box>
      {SectionIntroText.map((items) => {
        if (items.id !== id) return null;

        const isHero = items.id === 1;
        const isPill = isHero;
        const isCenter = items.center;

        const eyebrow = (
          <Box>
            <Typography sx={isPill ? pillStyle : plainStyle}>
              {items.smalltext}
            </Typography>
          </Box>
        );

        const heading = (
          <Box>
            <Typography
              sx={{
                fontSize: headingSize || (isHero
  ? { xs: "36px", md: "58px" }
  : { xs: "30px", md: "40px" }),
                fontWeight: 800,
                color: "#111",
                maxWidth: isHero
                  ? 640
                  : isCenter
                  ? 600
                  : items.split
                  ? 560
                  : items.narrow
                  ? 560
                  : items.area
                  ? 720
                  : items.wide
                  ? 720
                  : 640,
                lineHeight: isHero ? 1.1 : 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {items.bigtext}
            </Typography>
          </Box>
        );

        const paraSx = {
          color: "#4a4340",
          fontWeight: 400,
fontSize: paraSize || "16px",
          maxWidth: isHero
            ? 500
            : isCenter
            ? 580
            : items.split
            ? 420
            : items.narrow
            ? 540
            : items.area
            ? 680
            : items.wide
            ? 700
            : 640,
          lineHeight: 1.7,
        };

        const paragraph = items.para ? (
          <Typography sx={paraSx}>{items.para}</Typography>
        ) : null;

        const paragraph1 = items.para1 ? (
          <Typography sx={paraSx}>{items.para1}</Typography>
        ) : null;

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
              gap: isHero ? 2.25 : 2,
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
  );
};

export default SectionIntro;