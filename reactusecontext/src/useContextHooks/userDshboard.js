import Dashbaord from "../component/dashbaord";
import User from "../component/user";
import Detail from "../component/detail";
import UserContext from "../context/context";

const UserDshboard = ()=>{
    const userName= "Utsav";

    return(
        <>
        <UserContext.Provider value={userName}>

        
        <h1> useContextHooks</h1>
        <Dashbaord/>
        <User/>
        <Detail/>
        </UserContext.Provider>
        </>
    )
}

export default UserDshboard;