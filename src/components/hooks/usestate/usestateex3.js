import React,{ useState } from "react"



const Usestateex3=()=>{
    const initialValue=["apple","mango"]
    const [list,setlist]=useState(initialValue)
    const addfruit=()=>{
        const Newfruit="banana"
        setlist([...list,Newfruit])
    }
  
    return(
        <>
        <h1>hello</h1>
        <button onClick={addfruit}>click to add</button>
        <ol>
        {
            list.map((val,index)=><React.Fragment>
                
                <li>{val}</li>   
                </React.Fragment>
               
            )
        }
         </ol>
        </>

    )
}
export default Usestateex3