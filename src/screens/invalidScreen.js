import { useNavigate } from "react-router-dom"
import Navbar from "../components/navBar/navbar"



const InvalidScreen=()=>{

    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate("/")
    }
    return(
        <>
        <Navbar/>
        <h1>Invalid Screen page not found please check the URL</h1>
        <button onClick={handleNavigate}>click  to login screen</button>
        </>
    )
}
export default InvalidScreen