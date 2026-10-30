import {Box,Typography} from "@mui/material"
import SectionIntro from "../SectionIntro/SectionIntro"
import WeProvideGrid from "../WeProvideGrid.jsx/WeProvideGrid"
const WeProvide=()=>{
    return(
        <Box sx={{
            display:"grid",
            gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},
            columnGap:{md:5},
        rowGap: { xs: 4, md: 0 },
          
        alignItems:"start",
         py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor:"#fff"
        }}>
            <Box sx={{

                maxWidth:"500px"
            }}>
                <SectionIntro id={2}/>
            </Box>
            <Box>
                <WeProvideGrid/>

            </Box>

        </Box>

    )
}
export default WeProvide