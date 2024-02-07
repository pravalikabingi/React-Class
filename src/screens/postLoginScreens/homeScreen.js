import { useEffect, useState } from "react"
// import UseEffect from "../../components/hooks/usestate/useEffect/useEffect1"
// import UseEffect2 from "../../components/hooks/usestate/useEffect/useEffect2"
// import UseEffect3 from "../../components/hooks/usestate/useEffect/useEffect3"
import Navbar from "../../components/navBar/navbar"
import axios from "axios"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataShare } from "../../navigationScreen/navigation"



const HomeScreen=()=>{
    
        const [productListing,setproductListing]=useState([])
        const [totalPrice,SettotalPrice]=useState(null)
        const {darkTheme,changeTheme}= useContext (DataShare)



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
                    const newResponse=response.data.map(eachObj=>{
                        return {...eachObj,count:1,total:eachObj.price}
                    })
                    //successfully data came
                    setproductListing(newResponse)
                    const result=SumofPrices(response.data)
                    SettotalPrice(result)
                    console.log(result);
                }
            });
        }
        //this function is for calculating the sum of prices
        const SumofPrices=(arrayofObjects)=>{
            const result=arrayofObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
            return result
        }
        const handleIncrement=(data)=>{
            console.log(data);
            console.log(productListing);

        }


        const controlTheme=()=>{
            changeTheme()
        }
        
    return(
        <>
        <Navbar/>
        {/* <UseEffect/> */}
        {/* <UseEffect2/> */}
        {/* <UseEffect3/> */}

        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>
             

        </div>

        <button onClick={controlTheme}>changeTheme</button>



        <h1>welcome to homepage</h1>
        <h1>Total value of Products:{totalPrice}</h1>
        {
            productListing.length>0 && productListing.map(product=><ProductListingcomponent key={product.id} data={product} handleIncrement={handleIncrement}/>)
        }
        
        </>
    )
}
export default HomeScreen

export const ProductListingcomponent=({data,handleIncrement})=>{
    return(
        <>
        <div>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} width={100} height={100}/>
            <button onClick={()=>handleIncrement(data)}>increment</button>
            <button>decrement</button>
            <Link to={`/product-list-view/${data.id}`}>
            <button>click to view</button>
            </Link>
            <h2>{data.count}</h2>
            <h3>{data.price}</h3>
        </div>
        </>
    )
}