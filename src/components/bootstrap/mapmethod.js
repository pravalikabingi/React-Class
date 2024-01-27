const Mapmethod=()=>{
    const method=[
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
        method.map((details)=<CardFile pro={details}/>)
        </>
    )
}
export default Mapmethod