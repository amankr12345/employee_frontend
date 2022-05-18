import axios from "axios"
import { useState,useEffect } from "react"
//import { useParams } from "react-router-dom"

const UserDetail=({input:{name,email,payroll,department}})=>{
    
    return(
        <>
           <h4>{name}</h4>
           <h4>{email}</h4>
           <h4>{payroll}</h4>
           <h4>{department}</h4>
        </>
    )
}

export default UserDetail
