import React from 'react';
import {Container,Box,Paper,Typography} from '@mui/material'

export let HomePage = ()=>{

return (<>
<Container>
    <div>

<Box sx = {{position:'absolute', top:'50%',left : '30%', transform :'translate(-50%,-50%)' }}>
<img src = 'https://static.vecteezy.com/system/resources/previews/001/229/443/original/woman-studying-online-course-vector.jpg' 
 alt = 'course image'style={{width:'50vw', height:'60vh', scale:'(1.2,1.2)'}}  />

</Box>

<Box sx ={{position: 'absolute',left:'60%',top:'27%'
         }}> 
    <Paper sx={{
              width : '450px',
              height:'300px'
                }} elevation={8} square><Typography variant={'h4'} sx = {{p:'20px', fontFamily:'serif'}}>
                    Save on learnings that suit your life.</Typography>
                    <Typography variant = {'h6'} sx = {{p:'20px',fontFamily:'Cursive'}} >
                        Get your courses for 10$, learn from your favourite instructors and get onboard  on a self-paced 
                        learning journey.
                    </Typography>
    </Paper>

</Box>



    </div>
</Container>
</>)
}

//style = {{height:'70vh',width:'90vw'}}