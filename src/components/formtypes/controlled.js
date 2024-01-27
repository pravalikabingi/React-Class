import { useState } from "react"


const Controlled=()=>{
    const [userName,setUserName]=useState("")
    const[userNameError,setUserNameError]=useState("")
    const [password,setPassword]=useState("")
    const[passwordError,setPasswordError]=useState("")
    
    const userNameHandler=(event)=>{
        console.log(event.target.value);
        setUserName(event.target.value)
        if(event.target.value.length>10){
            setUserNameError("enter below 10")
        }else{
            setUserNameError("")
        }
    }
    const passwordHandler=(event)=>{
      setPassword(event.target.value)
      console.log(event.target.value);
      const result=validatePassword(event.target.value)
      if(result){
        console.log("password valid");
      }else{
        setPasswordError("password invalid")
        setPasswordError("")
       
      }
    }
    const username = "k3llydev";
    function validatePassword(psw) {
      let msg = true

  switch (true) {
  case  (psw.length < 8 || psw.length > 13):
    msg = false
    break
  case  (!(/[0-9]/.test(psw))):
    msg = false
    break
  case (psw === psw.toLowerCase()) || (psw === psw.toUpperCase()):
    msg = false
    break
  case ( psw.includes(username)):
    msg = false
    break
  }
  return msg
    }
  const submitHandler=(event)=>{
    event.preventDefault()

    const userDetails={
      userName,
      password
    }
    console.log(userDetails,"userDetails");
  }
    return(
        <>
        <form onSubmit={submitHandler} >
        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input
            type="text" className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={userName}
            onChange={userNameHandler}
            
          />
          {
            userNameError
            ?
            <h3 style={{color:"red"}}>{userNameError}</h3>
            :
            null
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={passwordHandler}
           
          />
          {
            passwordError
            ?
            <h2 style={{color:"red"}}>{passwordError}</h2>
            :
            null
          }
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
    )

}
export default Controlled