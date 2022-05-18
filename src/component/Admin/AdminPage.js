import { Button, Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AdminPage=()=>{
    const navigate =useNavigate()
    const [text,setText]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target
        setText({...text,[name]:value})
    }
    console.log(text)

    const handleSubmit=async()=>{
        const {name,email,password,payroll,department}=text
        await axios.post('http://localhost:5050/app/add',{name:name,email:email,password:password,payroll:payroll,
            department:department
        })
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
            navigate('/')
            alert('Employee Details Created Successfully')

    }
    const handleSignIn=async ()=>{
        const {email,password}=text
        if(password==123456 && email=='admin@gmail.com'){
        await axios.post('https://employeebackend.vercel.app/app/login',{email:email,password:password})
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
         navigate('/employee')
        }
        else{
            alert('invalide password')
        }

    }
   
    return(
        <>
        <h1 style={{textAlign:'center'}}>Admin Page</h1>
        <Container fixed>
          <Box sx={{bgcolor:'#cfe8fc',height:'100vh'}}>
            <Grid container spacing={2} >
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="name" 
                        label="Name*" 
                        variant="filled"
                       onChange={handleChange}
                    />
                </Grid>
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
                        name="payroll" 
                        label="Payroll" 
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
                    <Grid item lg={12} mx={24} >
                    <TextField 
                        name="department" 
                        label="Department" 
                        variant="filled" 
                        
                        onChange={handleChange}
                    />
                    </Grid>
                   
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >SIGN UP
                    </Button>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={2}>
                
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
                        type="password"
                        variant="filled" 
                        onChange={handleChange}
                    />
                    </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSignIn} 
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
export default AdminPage