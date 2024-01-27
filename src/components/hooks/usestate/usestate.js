import { useState } from "react"



const UsestateExample=()=>{
    
const[currentValue,UpadaterFunction]=useState(100)
const [timer,setTimer]=useState(100)

const handleIncrement=()=>{
    UpadaterFunction(currentValue+1)
}
const handleTimer=()=>{
    
    setInterval(()=>{
        setTimer(timer=>timer-1)
        
    
    },1000)
}
    return(
        <>
        <h1>Usestate {currentValue}</h1>
        <h1 style={{color:timer>90?"red":"blue"}}>timer {timer}</h1>
        <button onClick={handleIncrement}>click to increase</button>
        <button onClick={handleTimer}>click to increase timer</button>
        </>
    )
}
export default UsestateExample