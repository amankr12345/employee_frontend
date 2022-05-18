
import { Button,  Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import axios from 'axios'
import {useState} from 'react'
import {  useNavigate } from 'react-router-dom'

const UserPage=()=>{
   // const params=useParams()
    const navigate=useNavigate()
    const [input,setInput]=useState({})
    const handleChange=(e)=>{
        const {name,value}=e.target
                setInput({...input,[name]:value})

    }
    console.log(input)
    const handleSubmit=async ()=>{
        const {email,password}=input
        if(email){
        await axios.post('https://employeebackend.vercel.app/app/login',{email:email,password:password})
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
        navigate('/details') 
        }
        else{
            alert('invalid Credentials')
        }
    }
    
    return(
        <>
            <h1 style={{textAlign:'center'}}>EMPLOYEE PAGE</h1>
            <Container fixed>
                    <Box sx={{bgcolor:'#cfe8fc',height:'100vh'}}>
                            <Grid container spacing={2} >
                                
                                <Grid item lg={12} mx={24} >
                                    <TextField 
                                        name="email" 
                                        label="Email*" 
                                        variant="filled" 
                                        onChange={handleChange}
                                    />
                                    </Grid>
                                    
                                <Grid item lg={12} mx={24} >
                                    <TextField 
                                        name="password" 
                                        label="Password*" 
                                        variant="filled" 
                                        
                                        onChange={handleChange}
                                    />
                                    </Grid>
                                    
                                
                                <Grid item lg={12} mx={29} >
                                    <Button 
                                        onClick = {handleSubmit}
                                        variant="contained"
                                    >SIGN IN
                                    </Button>
                                </Grid>
                            </Grid>
                            </Box>
                    </Container>
        
        </>

    )
}

export default UserPage