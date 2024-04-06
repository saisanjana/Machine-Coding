import { useState } from "react";

const TwoStepLoginForm = () => {
    const [page,setPage] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const onButtonClick = (page:number) => {
        if(page===0){
            //email should be validated here
            if(email){
                setPage(1);
            }
        }else if(page===1){
            // password should be validate against email
            if(password){
                setPage(2);
            }
        }
    }

    return (page===2 ? 
        <div>Welcome! {email} {password}</div> : 
            page ===1 ? 
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                    <button onClick={()=>{onButtonClick(page)}}>Submit</button>
                </div> 
                :<div>
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    <button onClick={()=>{onButtonClick(page)}}>Submit</button>
                </div>)
}
export default TwoStepLoginForm