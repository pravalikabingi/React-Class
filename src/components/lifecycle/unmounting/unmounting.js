import { Component, PureComponent } from "react";

class Unmounting extends Component{
    constructor(){
        super()
        this.state={
            isvisible:false,
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleVisible=()=>{
        this.setState({
            isvisible:!this.state.isvisible
        })
    }
    render(){
        return(
            <>
            <h2>Unmounting {this.state.count}</h2>
            <button onClick={this.handleVisible}>Click to alter flag</button>
            <button onClick={this.handleIncrement}>Click to increase count</button>
            {/* {
               this.state.isvisible
               ? */}
               <Child/>
               {/* :
               <h1>I am hidden</h1>
            } */}
            </>
        )
    }
}
export default Unmounting

class Child extends PureComponent{
   
    // componentWillUnmount(){
    //     alert("I am removed from dom")
    // }
    render(){
        console.log("Child")
        return(
            <>
              <h1>I am children</h1> 
              <h1>I am visible</h1> 
            </>
        )
    }
}

