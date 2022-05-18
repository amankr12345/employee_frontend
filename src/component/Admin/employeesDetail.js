import {useState,useEffect} from 'react'
import axios from 'axios'
import ListEmployee from './employeeList'

const EmployeeDetail=()=>{
    const [employee,setEmployee]=useState([])

    useEffect(()=>{
        axios.get('https://employeebackend.vercel.app/app/get')
        .then(res=>setEmployee(res.data))
    })
    console.log(employee)

    return(
        <>
        {
            employee.map(
                employees=><ListEmployee
                        
                        employees={employees}/>
            )
            
        }
        </>
    )
}
export default EmployeeDetail