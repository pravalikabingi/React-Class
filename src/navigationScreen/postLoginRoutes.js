import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import InvalidScreen from "../screens/invalidScreen"
import ProductDetails from "../screens/postLoginScreens/productDetails"


const PostLoginRoutes=()=>{
    return(
      <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/product" Component={ProductScreen}/>
        <Route path="/about" Component={AboutScreen}/>
        <Route path="/settings" Component={SettingScreen}/>
        
        <Route path="/product-list-view/:id" Component={ProductDetails} />
        <Route path="*" Component={InvalidScreen}/>
      </Routes>
    )
}
export default PostLoginRoutes