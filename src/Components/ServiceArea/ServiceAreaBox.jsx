import React from 'react'
import {Box,Typography,Grid} from "@mui/material"

function ServiceAreaBox() {
      const zones = [
    { id: 1, name: "OMR" },
    { id: 2, name: "Guindy" },
    { id: 3, name: "Sholinganallur" },
    { id: 4, name: "Ambattur" },
    { id: 5, name: "Sriperumbudur" },
    { id: 6, name: "Oragadam" },
  ];

  return (
    <>
    <Box sx={{
        width:"100%",
        height:"100%",
        bgcolor:"rgb(251, 239, 236)",
        borderRadius:"18px",
        maxWidth:"520px",
        maxHeight:"320px",
        p:"32px"
        
    }}>
        <Grid item xs={12} >
            <Typography sx={{
                color:" rgb(198, 8, 0)",
                letterSpacing: "0.14em",
                fontSize:"12px",
                fontWeight:700,
                          mb: 2,

            }}>
                ZONES SERVED
                </Typography>
                 <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          mb: 2,
        }}
      >
        {zones.map((items)=>(
                    <Box key={items.id}
                    
 sx={{
    bgcolor: "rgb(255, 255, 255)",
    border: "1px solid rgb(240, 217, 212)",
    borderRadius: "999px",
    p: "12px 20px",
    fontSize: "14.5px",
    fontWeight: 500,
    color: "rgb(61, 56, 53)",
  }}
>
    {items.name}
                    </Box>
                ))}
      </Box>
                
                <Typography sx={{
                    color:"rgb(122, 113, 109)",
                    fontWeight:400,
                    fontSize:"14px"

                }}>
                    Site outside these zones? Send the location and we will confirm coverage.


                    

                </Typography>
             
        </Grid>

    </Box>

    </>
  )
}

export default ServiceAreaBox
