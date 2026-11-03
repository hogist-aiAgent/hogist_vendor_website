import { Container } from "@mui/material";
const MainContainer = ({ children, style }) => {
  return (
    <Container
      maxWidth={{ xs: "100%", sm: "100%", md: "lg", lg: "xl" }}
      sx={{
        position: "relative",
        py: 7,
        maxWidth: "1400px",
        // px: 1,
        // overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </Container>
  );
};
export default MainContainer;
