import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"



const ProductDetails=()=>{
    const routeInformation=useParams()
    const [ProductData,SetProductData]=useState({})
    useEffect(()=>{
        fetchEachProduct(routeInformation.id)
    },[routeInformation.id])

    const fetchEachProduct=(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            
                if(response.status===200){
                    SetProductData(response.data);
                }
                else{
                    alert("req failed")
                }
            
        })
            
        
           
        }
    
    return(
        <>
        {
           Object.keys(ProductData).length>0
           ?
           <>
           <img src={ProductData.image} alt={ProductData.category} width={100} height={100}/>
          <h1>{ProductData.category}</h1>
          <h2>{ProductData.price}</h2>
          </>
           :
           <h2>loading....</h2>
        }
         
        </>
    )
}
export default ProductDetails