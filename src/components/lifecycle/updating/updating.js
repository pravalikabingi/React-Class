import { Component } from "react";

class Update extends Component{
    constructor(){
      super()
      this.state={
        counter:0,
        color:"red",
        singleproduct:{}
      }  
    }
    handleclick=()=>{
       this.setState({
        counter:this.state.counter+1
       }) 
    }
    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps");
        return{
            color:props.favcolor
        }
    }
    getSnapshotBeforeUpdate(props,state){
        console.log(state );
        return null;
     }
    shouldComponentUpdate(){
        return true
     }
     componentDidUpdate(){

        document.title=`count ${this.state.counter}`
        fetch(`https://fakestoreapi.com/products/${this.state.counter}`)
        .then(response=>response.json())
        .then(response=>{
           console.log(response);
           this.setState({
            singleproduct:response
           })
        })
     }
     componentDidMount(){
        document.title=`count ${this.state.counter}`
     }
    render(){
        console.log("render");
        return(
            <>
            <h1>Update phase</h1>
            <h1 style={{color:this.props.favcolor}}>{this.state.counter}</h1>
            <button onClick={this.handleclick}>Increment</button>
            {
                <h2>{this.state.singleproduct?.title}</h2>
            }

            </>
        )
    }
}
export default Update