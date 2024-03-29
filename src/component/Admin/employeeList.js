import { Divider, ListItem, ListItemText} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ListEmployee = ({employees:{name,email,payroll,department,password,_id}}) => {
    const navigate=useNavigate()

    const hadnleDelete=async ()=>{
        await  axios.delete(`https://employeebackend.vercel.app/app/delete/${_id}`)
        .then((response) => console.log(response))
    }


    return(
        <>
         <ListItem alignItems="flex-start">
                <ListItemText
                    primary={name}
                />
                <ListItemText
                    primary={email}

                />
                 <ListItemText
                    primary={payroll}

                />
                 <ListItemText
                    primary={password}

                />
                 <ListItemText
                    primary={department}

                />
                <button  onClick={()=>navigate(`/update/${_id}`)}>Update</button>
                <button onClick={hadnleDelete}>Delete</button>
                <Divider variant="inset" component="li" />
            </ListItem>
            <hr/>
                 
            
        </>
    )

    }
export default ListEmployee