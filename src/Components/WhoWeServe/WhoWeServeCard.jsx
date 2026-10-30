import { Box, Typography,Grid} from "@mui/material";
import cardimg from "/src/assets/images/DAILY EMPLOYEE MEALS .jpg";
 
const corporateServices = [
  {
    id: 1,
    title: "Corporate Offices",
    description:
      "Daily cafeteria service for corporate floors and head offices.",
  },
  {
    id: 2,
    title: "IT & Technology Companies",
    description:
      "Variety-led menus and quick counter service for IT parks and campuses.",
  },
  {
    id: 3,
    title: "Manufacturing Companies",
    description:
      "High-volume, multi-shift meal programs for factory workforces.",
  },
  {
    id: 4,
    title: "Industrial Facilities",
    description:
      "Round-the-clock canteen operations for plants and industrial units.",
  },
  {
    id: 5,
    title: "Large Workforce Locations",
    description:
      "Peak-hour planning and scale for sites feeding hundreds to thousands daily.",
  },
];
 
const WhoWeServeCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        height:"100%",
 
      }}
    >
      {corporateServices.map((items) => (
        <Box
          key={items.id}
          sx={{
            height:"100%",
            maxWidth:250,
            minHeight:"300px",
 
            borderRadius: "20px",
            overflow: "hidden",
            bgcolor: items.id === 5 ? "#111111" : "white",
          }}
        >
          <Box
            component="img"
            src={cardimg}
            sx={{
              width: "100%",
              height: "130px",
              objectFit: "cover",
              display: "block",
            }}
          />
 
          <Box sx={{ p:2,
            }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: items.id === 5 ? "white" : "#111",
                fontSize:"17px"
              }}
            >
              {items.title}
            </Typography>
 
            <Typography
              sx={{
                mt: 1,
                color: items.id === 5 ? "#cccccc" : "#666",
                fontSize:"14px",
                lineHeight:2
              }}
            >
              {items.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
 
export default WhoWeServeCard;
 