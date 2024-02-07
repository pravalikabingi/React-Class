import React from "react";





const TextComponent=({text})=>{
    console.log(text,"text component re-render");
    return(
        <h1>{text}</h1>
    )
}
export default React.memo(TextComponent)