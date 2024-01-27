function Apicall() {
    const fetchdata=()=>{
        try{
        fetch("'https://fakestoreapi.com/products/1")
        .then(api=>api.json)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        }catch(error){
            console.log("error")
            alert("something went wrong")
        }
    }
    return(
        <div>
            <h1>
                Apicall
            </h1>
            <button onClick={fetchdata}>click me to fetch data</button>
        </div>
    )
}
export default Apicall
