import { useEffect, useState } from "react"



const UseEffect2=()=>{
    const [count,Setcount]=useState(0)
    const [count1,Setcount1]=useState(0)
    useEffect(()=>{
        console.log("use effect is executing");
        UpdateCounterValue()
    },[count, count1])

    const UpdateCounterValue=()=>{
       
        document.title=`counter value ${count}`
    }
    const HandleIncrement=()=>{
        Setcount(count+1)
    }
    const HandleIncrement1=()=>{
        Setcount1(count1+1)
    }
    return(
        <>
        <h2>Useeffect2 {count}</h2>
        <button onClick={HandleIncrement}>Click to Update</button>
        <button onClick={HandleIncrement1}>Click to Update</button>
        </>
    )
}
export default UseEffect2