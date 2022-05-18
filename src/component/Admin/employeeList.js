import { Divider, ListItem, ListItemText} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
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
                <EditIcon  onClick={()=>navigate(`/update/${_id}`)}/>
                <DeleteIcon onClick={hadnleDelete} />
                <Divider variant="inset" component="li" />
            </ListItem>
            <hr/>
                 
            
        </>
    )

    }
export default ListEmployee