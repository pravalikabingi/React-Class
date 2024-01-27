function Todo(){
    let details={
        name:"Hedy Lamarr's Todos",
        image:"https://i.imgur.com/yXOvdOSs.jpg",
        alt:"Hedy Lamarr",
        className:"photo",
        listitems:["Invent new traffic lights","Rehearse a movie scene","Improve the spectrum technology"]

    }
    const {name,image,alt,className,listitems}=details
    return(
    <div>
        <h1>{name}</h1>
    <img 
      src={image} 
      alt={alt} 
      class={className}
    />
    <ul>
      <li>{listitems[0]}</li>
      <li>{listitems[1]}</li>
      <li>{listitems[2]}</li>
    </ul>
    </div>
  
    )
}
export default Todo