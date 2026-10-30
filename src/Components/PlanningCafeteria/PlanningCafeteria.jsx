import React from 'react'
import {Box,Typography,Grid} from "@mui/material"
import CommonButton from '../../Common/Button/CommonButton'

function PlanningCafeteria() {
  return (
    <>
    <Box
    sx={{
         bgcolor: "black",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },

    }}>
        <Grid container item={{xs:12,md:6}} spacing={3}
        sx={{
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <Grid size={{xs:12,md:6}} >
                <Typography sx={{
                    fontWeight:800,
                    fontSize:"42px",
                    color:"#fff",
                    lineHeight:1.2
                }}>
                    Planning a cafeteria for your workplace?

                </Typography>
                <Typography sx={{
                    color:"#867e78",
                    fontSize:"12px"
                }}>
                    Tell us your headcount, shifts and site, and we'll put together a cafeteria service plan and quote built around your workplace — no obligation.


                </Typography>


            </Grid>
            <Grid size={{xs:12,md:"auto"}}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:1.5,
                    alignItems:{xs:"flex-start",md:"center"},



                }}>
                     <CommonButton
            bgcolor="#1E8A4A"
            px={2}
            py={1.5}
            sx={{
              height: "100%",
              minHeight: 48,
            }}
          >
            Get a Cafeteria Service Quote
          </CommonButton>
            <Typography sx={{ color: "#8A8A8A", fontSize: "13px" }}>
              Phone: [Hogist phone] · Email: [Hogist email]
            </Typography>

                </Box>
              
            </Grid>

        </Grid>


    </Box>
    </>
  )
}

export default PlanningCafeteria
