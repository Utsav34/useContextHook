import { useContext } from "react";
import UserContext from "../context/context";

const Detail=()=>{
    const data = useContext(UserContext)
    return(
        <>
        <h1>User Detail{data}</h1>
        </>
    )
}

export default Detail;