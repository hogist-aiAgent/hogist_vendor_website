import { Box, Typography, } from "@mui/material"
import headerlogo from "../../assets/images/headerlogo1.png";
import CommonButton from "../../Common/Button/CommonButton";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from 'react'
const RED = "#b62819"
const Header = () => {
    const Headertopic =
        [{ id: 1, name: "Home" },
        { id: 2, name: "Service" },
        { id: 3, name: "Corporate Cafeteria" },
        { id: 4, name: "Menu&Pricing" },
        { id: 5, name: "Contact" },
        ]
    const [activeId, setActiveId] = useState(3);
    const linkSx = (isActive) => ({
        color: isActive ? RED : "#1A1A1A",
        fontSize: { xs: "10px", md: "15px" },
    "&:hover": { color: RED }
    })
    return (
            <Box sx={{ pt: 2, px: { xs: 2, md: 6 }}}>
                 <Box sx={{
                minHeight: { xs: 64, md: 80 },
                borderRadius: "100px",
                bgcolor: "white",
                // border: "3px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // boxshadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                px: { xs: 2, md: 4 }
            }}>
                <Box component="img" src={headerlogo} alt={headerlogo} sx={{ height: { xs: 48, md: 60, lg: 70 }, width: "auto", display: "block" }}></Box>
                <Box sx={{
                    display: { xs: "none", md: "flex" }, alignItems: "center", gap: { md: 3, lg: 4 }
                }}>
                    <Box sx={{
                        display: { xs: "none", md: "flex" }, alignItems: "center", gap: { md: 3, lg: 5 }
                    }}>
                        {Headertopic.map((item) => (
                            <Typography key={item.id}
                                onClick={() => setActiveId(item.id)}
                                sx={linkSx(item.id === activeId)}>
                                {item.name}
                            </Typography>
                        ))}

                    </Box>
                    <CommonButton variant="contained" isOutlined={false} width={{ xs: 30, md: 136 }}
                        fontSize={{ xs: "10px", md: "16px" }} fontWeight={500} height={{ xs: 30, md: 50 }} px={2} py={0} borderRadius={{ xs: "5px", md: "12px" }} >Get a Quote</CommonButton>
                        </Box>
                <SideMenu
                    Headertopic={Headertopic}
                    activeId={activeId}
                    setActiveId={setActiveId}

                />




            </Box>

        </Box>


    )


}
export default Header;

