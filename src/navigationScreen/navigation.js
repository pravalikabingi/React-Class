
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import InvalidScreen from "../screens/invalidScreen"
import ProductDetails from "../screens/postLoginScreens/productDetails"
import { createContext, useState } from "react"
import LoginScreen from "../screens/preLoginScreens/loginscreen"
import PostLoginRoutes from "./postLoginRoutes"
import PreLoginRoutes from "./preLoginRoutes"

//create a context using createcontenxt method
export const DataShare=createContext()

const Navigation=()=>{


 const [name,setName]=useState("10kcoders")
 const [darkTheme,setDarkTheme]=useState(false)

 const [login,setLogin]=useState(false)

 const changeTheme=()=>{
  setDarkTheme(!darkTheme)
 }

 const loginTrue=()=>{
  setLogin(true)
 }

  return(
    //wrap the context for each and every component
    //add a key value pair to the provider
    //here we are passing object to the value like name:"pravalika"
    //we can trigger the function here called method like chnageTheme in it
    <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}>
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={LoginScreen}/>
        <Route path="/home" Component={HomeScreen}/>
        <Route path="/product" Component={ProductScreen}/>
        <Route path="/about" Component={AboutScreen}/>
        <Route path="/settings" Component={SettingScreen}/>
        <Route path="*" Component={InvalidScreen}/>
        <Route path="/product-list-view/:id" Component={ProductDetails} />

    </Routes>

    {
      true?<PostLoginRoutes/>:PreLoginRoutes
    }

    </BrowserRouter>
    </DataShare.Provider>
  )  
}
export default Navigation  