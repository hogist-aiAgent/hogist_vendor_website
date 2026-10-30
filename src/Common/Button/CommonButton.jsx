import {Button,Typography} from "@mui/material"
const CommonButton=({
    width,
    height,
     bgcolor = "#c60800",
    color = "white",
    borderRadius="10px",
    px=2 ,
    py=2,
    variant="contained",
    onClick,
    children,
    fullWidth=false,
    ...styles

})=>{
    const isOutlined=variant==="outlined"
    return(
        <Button
        onClick={onClick}
        fullWidth={fullWidth}
        sx={{
            width,
            height,
            bgcolor,
            color,
            borderRadius,
            textTransform:"none",
            fontWeight:500,
            fontSize:"12px",
            bgcolor:isOutlined?"transparent":bgcolor,
            px,
            py,
            ...styles
        }}>
            {children}
            


        </Button>

    )
}
export default CommonButton;