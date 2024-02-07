import { useContext } from "react"
import Navbar from "../../components/navBar/navbar"
import { DataShare } from "../../navigationScreen/navigation"


const ProductScreen=()=>{
   const {darkTheme}= useContext(DataShare)
    return(
        <>
        <Navbar/>

        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>


        </div>
        <h1>welcome to productpage</h1>
        </>
    )
}
export default ProductScreen