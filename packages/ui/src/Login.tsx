import React from 'react'
import {Container,Card, Box, CardContent, CardHeader, Typography, TextField} from '@mui/material'
import { SignUpButton } from './custom'
import { useState } from 'react'
import  {userCred,userCourse} from './common_utilites/atoms/atoms';
import { useSetRecoilState } from 'recoil';
import { Cred } from './common_utilites/Types/Course';
import  axios  from 'axios';
import { BASE_URL } from './common_utilites/utilites';
import { useNavigate } from 'react-router-dom';

export let Login =()=>{

let [username,setUsername] = useState<string>('');
let [password,setPassword] = useState<string>('');
let navigate = useNavigate();

let UserCred = useSetRecoilState<Cred>(userCred);
let UserCourse = useSetRecoilState<number[]>(userCourse); 

    let handleLogin=async ()=>{
        try{
            let res = await axios.post(`${BASE_URL}/users/login`,{
                username,password
            });
            UserCred({username,password});
            localStorage.setItem('token',res.data.token);
            UserCourse(res.data.purchasedCourses);
        
    
            console.log(`request received after login of user`,res)
            navigate('/UserHomepage');
        }
        catch(err)
        {
            console.log(`error occured during login`,err)
        }
        }
        

    return(
        <>
        
            <Box  >
            <Card sx={
                    {
                position:'absolute',       
                width:'25vw',
                height:'65vh',
                 top:'50%',
                 left:'50%',
                 transform:'translate(-50%,-50%)'
                    }
                }
                >
                <CardContent sx={{
                        position:'relative',
                        top:'30%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        display:'grid',
                        placeItems:'center'
                    }} >
                    < CardHeader title={'Login'} sx={{
                        position:'absolute',
                        top:'30%',
                        left:'50%',
                        transform:'translate(-50%,-50%)'
                    }}/>
                        
                    <br/>
                    <br/>
                    <br/>
                    <TextField 
                    
                    variant='outlined' 
                    label="username"
                    fullWidth={true}
                    sx={{

                        marginTop:'130px',
                        width:'300px',
                       
    }}
    onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
                    <br/>

<TextField 
                    
                    variant='outlined' 
                    label="password"
                    fullWidth={true}
                    sx={{
                        width:'300px',
                      
                    }}
                    onChange={(e)=>setPassword(e.target.value)}/>

                    <br/>
                    <br/>

                       <SignUpButton 
                       variant="contained"
                       disableElevation
                       fullWidth={true}
                       sx={{
                       top:'65%',
                       width:'380px',
                       height:'50px'
                       }} 
                       onClick={()=>handleLogin()}>
                         Submit
                       </SignUpButton>

                </CardContent>
            
            </Card>
            

            </Box>
        
        </>
    )

}