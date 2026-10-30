import {Box,Typography,Grid} from "@mui/material"

const WhyHogistBox=()=>{
    return(
       <Box
  sx={{
    width: "100%",
    maxWidth: 400,
    border: "1px solid rgb(240, 226, 222)",
    borderRadius: "14px",
    p: "22px",
    boxSizing: "border-box",
  }}
>
    <Typography sx={{
  fontSize: "13px",
  fontWeight: 700,
  color: "rgb(198, 8, 0)",
}}>
CERTIFIED

    </Typography>
    <Typography sx={{
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "rgb(87, 80, 73)",
}}>
    ISO 9001:2015 & ISO 22000:2018 certified company, with 200+ partner kitchens.



    </Typography>

</Box>


    )
}
export default WhyHogistBox