// import reactimgs from "./reactimg.jpg"
// const CardFile=()=>{
   
//     return(
//         <>
//         <div className="card" style={{width:100%}}>
//     <img className="card-img-top" src={reactimgs} alt="Card image" style={{width:100%}} />
//     <div className="card-body">
//       <h4 className="card-title">John Doe</h4>
//       <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
//       <a href="#" className="btn btn-primary">See Profile</a>
//     </div>
//   </div>
//         </>
//     )
// }
// export default CardFile
import reactimgs from "./reactimg.jpg";

const CardFile = (props) => {
    console.log(props);
  return (
    <>
      <div className="card" style={{ width: '100' }}>
        <img className="card-img-top" src={reactimgs} alt="Card image" style={{ width: '100'}} />
        <div className="card-body">
          <h4 className="card-title" style={{color:props.pro.color}}>{props.pro.name}</h4>
          <p className="card-text">{props.pro.designation}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default CardFile;
