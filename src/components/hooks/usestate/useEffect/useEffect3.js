import { useEffect } from "react"



const UseEffect3=()=>{
    useEffect(()=>{
        addListener()
        //if its return a function we can clean up
        return ()=>{
        removeListerner()
        }
    },[])
    //this function is adding mouse move event listener
    const addListener=()=>{
        document.addEventListener("mousemove",mouseCapture)
    }
    ////this function is removing mouse move event listener
    const removeListerner=()=>{
        
            document.removeEventListener("mousemove",mouseCapture)
        
    }

    const mouseCapture=(event)=>{
        
       
        console.log("mouse moving in home screen");
        console.log(event.clientX,"Xposition Capture");
        console.log(event.clientY,"Yposition Capture");
    }
    return(
        <>
        <h1>use effect3</h1>
        </>
    )
}
export default UseEffect3