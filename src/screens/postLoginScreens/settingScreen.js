import { useContext } from "react"
import Navbar from "../../components/navBar/navbar"
import { DataShare } from "../../navigationScreen/navigation"
import UseCallback from "../../components/hooks/useCallback/parent"


const SettingScreen=()=>{

    const {darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbar/>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>


        </div>
        <UseCallback/>
        <h1>welcome to settingpage</h1>
        </>
    )
}
export default SettingScreen