import { useEffect, useState } from "react"
import axios from "axios"



const UseEffect=()=>{
    const [productListing,setproductListing]=useState([])
    useEffect(()=>{
        fetchData()
        console.log("component mount");
    },[])
    
    //the function is used for fetching the data from server to client
    const fetchData=()=>{
        //axios
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                //successfully data came
                setproductListing(response.data)
            }
        });
    }
    return(
        <>
        <h1>UseEffect causes a side effects in functinal based component</h1>
        {
            productListing.length>0 && productListing.map(product=><ProductListing key={product.id} data={product}/>)
        }
        </>
    )
}
export default UseEffect


export const ProductListing=({data})=>{
    return(
        <>
        <div>
            <h2>{data.title}</h2>
        </div>
        </>
    )
}