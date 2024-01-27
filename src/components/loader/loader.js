import { Component } from "react";
import { Audio } from 'react-loader-spinner'
class Loader extends Component{
    render(){
        return(
            <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />  
        )
    }
}
export default Loader