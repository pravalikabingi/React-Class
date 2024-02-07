import React from "react";



const ButtonComponent=({handleChange=()=>{},title="button"})=>{
    console.log(title,"button component re-render");
    return(
        <button onClick={handleChange}>{title}</button>
    )
}
export default React.memo(ButtonComponent)