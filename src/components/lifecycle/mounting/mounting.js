import {Component } from "react"
class Mounting extends Component{
    constructor(){
        super()
        this.state={
            message:"mounting phase",
            color:"red",
            product:[]
        }
    }
    static getDerivedStateFromProps(props){
        return {color:props.colour}
    }
    componentDidMount(){
        // document.title="flipkart"
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(response=>{
            this.setState(
                {
                    product:response
                }
            )
        })
    }
    render(){
        console.log("rendor",this.state.product);
        return(
            <>
            <h1 style={{color:this.state.color}}>Life Cycle of comoponent {this.state.message}</h1>
            {
                this.state.product.length>0
                ?
                <>{this.state.product.map((eachproduct)=>
                    <>
                        <h1>{eachproduct.id}</h1>
                        <h1>{eachproduct.title}</h1>
                    </>
                )
                }</>
                :
                <>please wait loading</>
            }
            </>
        )
    }
}
export default Mounting