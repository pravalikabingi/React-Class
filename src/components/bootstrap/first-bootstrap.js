import CardFile from "./card"

const FirstBootstrap=()=>{
    const profile=[
        {
            name:"pravalika",
            designation:"React Developer",
            color:"brown"


        },
        {
            name:"Sai rediee",
            designation:"Multitask/all Rounder",
            color:"red"


        },
        {
            name:"akhil",
            designation:"React Developer",
            color:"blue"


        }


    ]
    return(
        <>
        <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First React Application</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      {/* <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p> */}
      <CardFile pro={profile[0]}/>
    </div>
    <div class="col-sm-4">
      {/* <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p> */}
      <CardFile pro={profile[1]}/>
    </div>
    <div class="col-sm-4">
      {/* <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p> */}
      <CardFile pro={profile[2]}/>
    </div>
  </div>
</div>
</>
    )
}
export default FirstBootstrap