import React from 'react'
import {Box,Typography} from "@mui/material"
import WhoWeServeCard from './WhoWeServeCard'
import SectionIntro from '../SectionIntro/SectionIntro'

function WhoWeServe() {
  return (
    <Box sx={{
        dispaly:"flex",
        flexdirection:"column",
        gap:2,
         py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
    }}>
        <SectionIntro id={9}/>
        <WhoWeServeCard/>
    </Box>
  )
}

export default WhoWeServe