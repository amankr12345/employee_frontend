
import { useNavigate } from "react-router-dom"

const HomePage=()=>{
    const navigate=useNavigate()
    return(
        <>
        <h1 style={{textAlign:'center',color:'red',backgroundColor:'blue'}}>EMPLOYEE MANAGEMENT SYSTEM</h1>
        <button onClick={()=>navigate('/Admin')}>ADMIN</button>
        <button onClick={()=>navigate('/User')}>USERS</button>
        </>
    )
}
export default HomePage