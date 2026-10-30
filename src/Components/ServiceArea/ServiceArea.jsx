import {Grid} from "@mui/material"
import SectionIntro from "../SectionIntro/SectionIntro"
import ServiceAreaBox from "./ServiceAreaBox"
const ServiceArea=()=>{
    return(
        <>
        <Grid item xs={12} md={6} container spacing={2} sx={{
            bgcolor:"white",
             py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        }}>
                    <SectionIntro id={7}/>
                    <ServiceAreaBox/>


        </Grid>
        </>
    )
}
export default ServiceArea;