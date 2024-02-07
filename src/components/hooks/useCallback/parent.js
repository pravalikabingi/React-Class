import { useCallback, useState } from "react"
import TextComponent from "./text"
import ButtonComponent from "./button"



const UseCallback=()=>{

    const [age,setAge]=useState(100)
    const [salary,setSalary]=useState(10000)


    const ageIncrement=useCallback(()=>{
        setAge(age+10)
    },[age])

    const salaryIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    return(
        <>
        <TextComponent text={age}/>
        <ButtonComponent  handleChange={ageIncrement} title="increment age"/>
        <TextComponent text={salary}/>
        <ButtonComponent  handleChange={salaryIncrement} title="increment salary"/>

        
        </>
    )
}
export default UseCallback