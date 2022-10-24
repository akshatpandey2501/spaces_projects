import React from "react";
import { useState,useEffect } from "react";
import "./signup.css";
import Signupsvg from "../images/signup.svg"
function Signup(){
     const[message,setMessage] = useState("");
    
     const handleChange = event =>{
        setMessage(event.target.value);
     };
    
     const[message1,setMessage1] = useState("");
     const[error1,setError1] = useState("");
    //  const[passcorrect,setPass]=useState(false)
     const handleChange1 = event => {
        
        setMessage1(event.target.value);
     }
    //  const correctpass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
        useEffect(() => {
          if (/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(message1)) {
          setError1("")  
          console.log("hello")            
            }
          else if(message1){
            setError1("invalid password must have-number,uppercase,lowercase,symbol")
            console.log("hii")  
            } 
            
        },[message1])
       
 
     const [message2,setMessage2]=useState("")
     const[error2,setError2]=useState(null)
     const handleChange2=event=>{
              setMessage2(event.target.value);
              if(message1 !== (event.target.value)){
                setError2("password not matched")
              }else{
                setError2("");
              }
     }
    

    return(
        <div className="signup">
          <img src={Signupsvg} alt="signup" className="loginimg" />
         <p className="create">Create an account</p> 
         <p className="details">Enter your details</p>
         <label >User Name</label>
         <input type="text" id="User Name" placeholder="username" className="input" />
         <label >Emailid</label>
         {/* <p className="emailerror">{error}</p> */}
         <input type="email" id="Emaiid" placeholder="Email id" className="input1" value={message} onChange={handleChange} />
         <label >Password</label>
         <p className="error">{error1}</p>
         <input onChange={handleChange1} value={message1} type="password" id="password" placeholder="Password" className="input2"   />
         <label >Confirm Password</label>
         <p className="errorconfirm">{error2}</p>
         <input onChange={handleChange2} type="password" id="Confirm Password" placeholder="Confirm Password" value={message2} className="input3"  />
         <button className="continuebutton"><p className="continuetext">Continue</p></button>
         <p className="clicking">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
         <p className="registered">Already Registered?</p>
        </div>
    );
}
export default Signup;