import {Box,Typography} from "@mui/material"
import Hero from "./Components/HeroSection/HeroSection.jsx";
import Header from "./Components/Header/header.jsx";
import FaqSection from "./Components/FaqSection/FaqSection.jsx";
import WeProvide from "./Components/WeProvide/WeProvide.jsx";
import HowItWorks from "./Components/HowItWorks/HowItWorks.jsx";
import DailyEmployeeMeals from "./Components/DailyEmployeeMeals/DailyEmployeeMeals.jsx";
import MealCategories from "./Components/MealCategories/MealCategories.jsx";
import OngoingServices from "./Components/OngoingServices/OngoingServices.jsx";
import PlanningCafeteria from "./Components/PlanningCafeteria/PlanningCafeteria.jsx";
import ServiceArea from "./Components/ServiceArea/ServiceArea.jsx";
import WhyHogist from "./Components/WhyHogist/WhyHogist.jsx";
import WhoWeServe from "./Components/WhoWeServe/WhoWeServe.jsx";
import FoodSafetyHygiene from "./Components/FoodSafetyHygiene/FoodSafetyHygiene.jsx";
const App=()=>{
    return(
        <Box>
        <Header/>
        <Hero/>
        <WeProvide/>
        <HowItWorks/>
         <DailyEmployeeMeals/>
         <MealCategories/>
        <OngoingServices/>
        <WhoWeServe/>
                <WhyHogist/>
        <ServiceArea/>
        <FaqSection/>
        <PlanningCafeteria/>
        <FoodSafetyHygiene/>
        


    </Box>

    )
    

}
export default App;