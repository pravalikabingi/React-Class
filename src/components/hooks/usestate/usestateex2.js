import react,{ useState } from "react"



const UseState=()=>{
   const [currentValue,UpadaterFunction]= useState([
        {
            name:"pravalika",
            salary:100,
            id:1
        },
        {
            name:"sarath",
            salary:200,
            id:2
        }
    ])
    const IncrementSalary=(data)=>{
        console.log(data);

    }
    const decrementSalary=(data)=>{
        console.log(data);
    }
    return(
        <>
        {
          currentValue.map(val=><react.Fragment key={val.id}>
          <h1>{val.name}</h1>
          <h1>{val.salary}</h1>
          <button onClick={()=>IncrementSalary(val)}>Increment salary</button>
          <button onClick={decrementSalary}>decrement salary</button>

          </react.Fragment>)  
        }
        </>
    )
}
export default UseState



