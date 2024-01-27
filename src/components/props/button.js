const Button=({children,width})=>{
    const obj={
        text:"hello"
    }
    return(
        <button style={{width:width}}>{children}</button>
    )
}
export default Button