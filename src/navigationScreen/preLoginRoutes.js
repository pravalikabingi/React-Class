import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/preLoginScreens/loginscreen"
import InvalidScreen from "../screens/invalidScreen"


const PreLoginRoutes=()=>{
    return(
       <Routes>
         <Route path="/" Component={LoginScreen}/>
         <Route path="*" Component={InvalidScreen}/>
       </Routes>
    )
}
export default PreLoginRoutes