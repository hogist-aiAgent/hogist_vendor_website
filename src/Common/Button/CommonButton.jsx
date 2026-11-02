
import { Button } from "@mui/material";

const CommonButton = ({
  bgcolor = "#c60800",
  hoverBgcolor = "#a80700",
  color = "white",
  borderRadius = "10px",
  fontSize,
  fontWeight = 500,
  variant = "contained",
  size = "medium",
  fullWidth = false,
  onClick,
  children,
  sx,
  ...rest
}) => {
  const isOutlined = variant === "outlined";

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      disableElevation
      sx={{
        borderRadius,
        fontSize,
        fontWeight,
        fontFamily: "'Poppins', sans-serif",
        textTransform: "none",
        whiteSpace: "nowrap",
        color: isOutlined ? bgcolor : color,
        bgcolor: isOutlined ? "transparent" : bgcolor,
        border: isOutlined ? `1.5px solid ${bgcolor}` : "none",
        "&:hover": {
          bgcolor: isOutlined
            ? "rgba(198, 8, 0, 0.06)"
            : hoverBgcolor,
          borderColor: bgcolor,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
