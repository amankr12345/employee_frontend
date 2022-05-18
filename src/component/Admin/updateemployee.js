

import { Button, Grid, TextField ,Box,Modal,Typography} from "@mui/material"
import axios from 'axios'
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const UpdateEmployee=()=>{
    const params=useParams()
    const navigate=useNavigate()
    const [update,setUpdate]=useState({})
    const [open, setOpen] = useState(false)
    const handleChange = (event) =>{
        const {name,value} = event.target
        setUpdate({...update,[name]:value})
    }
    
  const handleOpen =async () => {
    await axios.put(`https://employeebackend.vercel.app/app/update/${params.id}`,update)
    .then(res=>console.log(res))
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    navigate('/employee')
  }

    
    return(
        <>
        <Grid container spacing={2}>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="name" 
                        label=" Name" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="payroll" 
                        label="payroll" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="department" 
                        label="Department" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                </Grid>

               < Button onClick={handleOpen}>Update</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        aler!!!!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Updated Employee successfully
                    </Typography>
                    </Box>
                </Modal>
            </Grid>
        
        </>
    )
}

export default UpdateEmployee