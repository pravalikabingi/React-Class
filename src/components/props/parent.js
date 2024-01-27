const Parentcomponent=()=>{
    return(
        <>
        <h1>hello</h1>
        <button width="10%">
            login
        </button>
        <button width="30%">
            login
        </button>
        <button>
            login
        </button>
        <Receiver>
            <h1>hiii</h1>
            <h1>hello</h1>

        </Receiver>
        
        </>

    )
}
export default Parentcomponent

const Receiver=({children})=>{
    return(
        children
    )
}