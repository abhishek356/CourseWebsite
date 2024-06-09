import React from 'react'
import {Container,Box,Card,CardContent, Typography, TextField,Button} from '@mui/material'
import { SignUpButton } from './custom'
import {LoadData} from './LoadData'
import { useState } from 'react'
import { userCred } from './common_utilites/atoms/atoms';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { BASE_URL } from './common_utilites/utilites';
import { useNavigate } from 'react-router-dom'

let SignUp = ()=>{

    let [username,setUsername] = useState<string>('');
    let [password,setPassword] = useState<string>('');
    let navigate = useNavigate();

    let UserCred = useSetRecoilState(userCred)

       UserCred({username,password});

    let handleSignUp = async () =>{

        try{

            let res = await axios.post(`${BASE_URL}/users/signup`,{

                username,password

            })
            console.log(`backend sign up `,res)
            navigate('/Login')

        }
        catch(e){
            console.log(`error occured while sign up`,e)
        }
            
    }

    return(<>
    <Container>
        <Box>
            <Card sx = {{position:'absolute', top : '20%', right:'25%', width:'25%', height:'70%',padding:'0'}}>
              
                <CardContent sx={{position:'relative',padding:'0'}}>
                    
                    <Box sx={{position:'absolute',
                             top:'20%',
                             left:'25%',
                             padding:'0'
                            }}>
                    <Typography variant = {'h6'} sx={{marginLeft:'50px'}} >SignUp</Typography>
                    </Box>
                    <br/>
                    <br/>
                   <Box sx={{position:'absolute',
                             top:'120%',
                             left:"10%",
                             }}>
                   
                   <TextField 
                    variant = "outlined" 
                    label = 'username' 
                    color='secondary'
                    sx={{
                    '& .MuiInputBase-root':{
                        position:'absolute',
                        marginRight:"45px",
                        width:'300px',
                     }}}

                     onChange={(e)=>setUsername(e.target.value)}
                    />

                    <br/>
                    <br/>

                    <TextField 
                    variant = "outlined" 
                    label = 'password' 
                    color={'secondary'}
                    sx={{
                        marginTop:'60px',
                    '& .MuiInputBase-root':{
                        position:'absolute',
                        marginRight:"45px",
                        width:'300px',
                     },
                    
                    '& .MuiFormLabel-root': {
                        // Styles for the label
                        color: 'secondary',
                      },
                    }}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
{/* 
                    <Button 
                    variant="contained" 
                    size = 'large' 
                    value ='Submit' 
                    >
                            Submit
                    </Button> */}
                    <br/>
                    <br/>
                    <SignUpButton variant="contained" disableElevation sx={{
                       marginTop : '80px',
                       marginRight:'40px',
                       marginLeft:'11px',
                       height:'45px'
                    }}
                    onClick={()=>handleSignUp()}>Submit</SignUpButton>
                    
                  
                    </Box>
                </CardContent>
            </Card>

            <Card sx = {{
                position:'absolute', 
                top : '20%', 
                right:'50%', 
                width:'25%', 
                height:'70%',
                margin:'0',
                padding:'0px'}}>

                <CardContent sx = {{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'0',
                    padding:'0'
                }}>

                    <img 
                    src ='https://i.pinimg.com/originals/0a/f1/54/0af15482c30daa33fb629600772461bf.jpg'
                    style = {{width:'400px',
                              height:'500px',
                              objectFit:'cover',}}/>
                
                </CardContent>
            
            </Card>
        </Box>

    </Container>
    </>)
}


export default SignUp