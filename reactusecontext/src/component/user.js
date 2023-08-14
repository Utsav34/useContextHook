import UserContext from "../context/context";
import { useContext } from "react";

const User=()=>{
const data= useContext(UserContext);
console.log("data", data)
    return(
        <>
        <h1>User Name: {data}</h1>
        </>
    )
}

export default User;