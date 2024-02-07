import { useReducer, useState } from "react"


const reducerFunction=(state,action)=>{

    console.log(state);
    console.log(action);
    switch(action.type){
        case "INCREMENT_ACTION":
            return {...state,age:state.age+1}
            case "DECREMENT_ACTION":
                return {...state,age:state.age-1}
        default:
            return state
    }
}

const initialState={
    age:20,
    name:"10kcoders",
    todos :[]
}

const UseReducer=()=>{
    const [currentState,dispatchFunction]=useReducer(reducerFunction,initialState)
    const [value,setValue]=useState("")
      
    const Increment=()=>{
        dispatchFunction(
            {
                type:"INCREMENT_ACTION"
            }
        )
    }

    const Decrement=()=>{
        dispatchFunction(
            {
                type:"DECREMENT_ACTION"
            }
        )

    }

    const onChangeHandler=(event)=>{
        setValue(event.target.value)
    }
    return(
        <>
        <h2>Use Reducer Example</h2>
        <h2>{currentState.age}</h2>
        <button onClick={Increment}>Increment age</button>
        <button onClick={Decrement}>decrement age</button>

        <input
        value={value}
        onChange={onChangeHandler}

        />
        </>

    )
}
export default UseReducer