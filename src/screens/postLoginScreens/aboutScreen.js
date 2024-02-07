import { useContext } from "react"
import Navbar from "../../components/navBar/navbar"
import { DataShare } from "../../navigationScreen/navigation"
import UseReducer from "../../components/hooks/useReducer/useReducer"


const AboutScreen=()=>{
    const data= useContext(DataShare)
    const {name,darkTheme}=data
    return(
        <>
        <Navbar/>
        <UseReducer/>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>


        </div>
        <h1>welcome to aboutpage</h1>
        <h2>i am managed globally {name}</h2>

        </>
    )
}
export default AboutScreen