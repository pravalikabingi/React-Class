import { useState } from "react";


function Circles() {
    const[circles,setCircles]=useState([])
    const addCircle=()=>{
        setCircles([...circles,false])
    }
    const Circleclick=(index)=>{
        console.log(index);
        console.log(circles);
    }
    return(
        
        <>
        <button on onClick={addCircle}>add Circles</button>
        <h2>total circles={circles.length}</h2>
        {
            circles.map((value,index)=>
            
            <div key={index} style={{width:100,height:100,border:"2px solid black",borderRadius:"50%",backgroundColor:value?"red":"lightpink"}} onClick={()=>Circleclick(index)}>

            </div>
            )
        }
        </>
    )
}
export default Circles