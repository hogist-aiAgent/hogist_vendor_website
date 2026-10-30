import { Box, Typography } from "@mui/material"
import CommonButton from "../../Common/Button/CommonButton"
const RED ="#C60800"


const OngoingServicesBar = () => {
    return (
        <Box sx={{
            px: 2,
            py: 3,
            display: "flex",
            gap: 0.5,
            bgcolor: RED,
            borderRadius:"20px",
            alignItems:"center",
            justifyContent:"space-between",
            width:"100%"

        }}>
            <Box sx={{
                display: "grid",
                gap:0.5
            }}>
                <Typography sx={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color:"white"
                }}>
                    Regular operational support

                </Typography>
                <Typography sx={{
                    fontSize: "10px",
                    fontWeight: 100,
                    color: "#FFD9D6",
                    maxWidth: 300
                }}>
                    Scheduled reviews to adjust menus, timings and service as your workforce changes.



                </Typography>

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
            }}>

            </Box>



           <CommonButton
            bgcolor="white"
        color={RED}
        border={`1.5px solid ${RED}`}
        py={1.2}
            sx={{
                fontweight:800
            }}
           
          
          >
            Talk to Our Team
          </CommonButton>
        </Box>
    )

}
export default OngoingServicesBar;
