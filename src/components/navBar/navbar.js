import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationScreen/navigation"


const Navbar=()=>{



  const sharedContext=useContext(DataShare);
  console.log(sharedContext);
  const {name}=sharedContext
    const Links={
        textDecoration:"none"
    }
    const listStyle={
        margin:7
    }
   return(
    <>
    <nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid">

  <ul className="navbar-nav">
    <li className="nav-item" style={listStyle} >
     <Link to="/"style={Links}>{name}</Link>
    </li>
    <li className="nav-item" style={listStyle}>
    <Link  to="/about" style={Links}>about</Link>
    </li>
    <li className="nav-item" style={listStyle}>
    <Link  to="/settings" style={Links}>settings</Link>
    </li>
    <li className="nav-item" style={listStyle}>
    <Link  to="/product" style={Links}>product</Link>
    </li>
    <li className="nav-item" style={listStyle}>
    <Link  to="*"style={Links}>Invalid Screen</Link>
    </li>
    
  </ul>
</div>

</nav>
    </>
   ) 
}
export default Navbar