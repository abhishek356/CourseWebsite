import React from 'react'
import useState from 'react'
import { AppBar, Toolbar, Typography,Button,Box,Tooltip,IconButton, Container} from '@mui/material';
import {Search,SearchIconWrapper,StyledInputBase,HoverReveal} from './custom'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {allCourses} from './common_utilites/atoms/atoms';
import { Course } from './common_utilites/Types/Course';
import SearchResult from './SearchResult'

import SearchIcon from '@mui/icons-material/Search'

let Topbar = ()=>{


    let [filteredResult,setFilterCourse] = React.useState<Course[]>([])
    let AllCourses = useRecoilValue<Course[]>(allCourses);
    console.log(`the list of courses saved in the atom`,AllCourses)
    console.log(`this is app bar component`);
    let navigate = useNavigate();

    let handleSignUp = ()=>{

        alert('SignUp clicked !');
        navigate('/SignUp')
    }
    
    let handleLogin=()=>{
        navigate('/Login')
    }

    let handleSearch=(e)=>{
        console.log(e.target.value);
        console.log(`filtered Courses are ${JSON.stringify(filteredResult)}`)

        let filtercourse:Course[]=[]

        if(e.target.value)
        {
            filtercourse = AllCourses.filter((course:Course)=>{
                return course.title.toLowerCase().includes((e.target.value).toLowerCase());
            })
        }
        else{
            setFilterCourse([])
        }

         
        console.log(`the courses that are matching are `+JSON.stringify(filtercourse))
                   setFilterCourse(filtercourse)
    }
  
    if(filteredResult==null || filteredResult==undefined)
    {
        setFilterCourse([])
    }

    return (<>
    <div>
 <AppBar>
    <Toolbar>
    <div style = {{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    position:'relative'
}}>

<div><Typography 
variant = {'h5'} 
gutterBottom={true}>
    Coursera</Typography>
</div>
<Box>

<Search style ={{
    marginRight:'900px',
    position:'relative'
}}>
    <SearchIconWrapper>
    <SearchIcon/>
    </SearchIconWrapper>

    <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>handleSearch(event)}
            />


<div>{filteredResult!=null ? <SearchResult props={filteredResult}/>
:null }</div>


    </Search>
             
           
{/*            
    style={{
                                     
                                     color:'red',
                                        position:'absolute',
                                        width:'100%',
                                        top:'100%'
                                         
                                     }}  */}
                        
    
</Box>

<div style = {{ borderLeft:'100px'}}>
    <Tooltip title = 'Add To Cart' placement = 'bottom-end'>
        <AddShoppingCartOutlinedIcon sx={{position:'absolute',top:'20%',right:'13%'}}/>
    </Tooltip>
    <Button 
        variant = 'text' 
        size = 'medium'
        sx = {{
            margin:'3px', 
            textTransform:'none', 
            color :'black'}} 
            disableFocusRipple onClick={(event)=> handleLogin()}>
                Log in</Button>
    
    <Button 
        variant = 'contained' 
        size = "medium" 
        sx = {{
        margin:'3px',
        bgcolor:'primary.dark', 
        textTransform:'none'} }
        onClick = {()=>{
            handleSignUp()
                 }}>Sign up</Button>

</div>

</div>

    </Toolbar>

    
    </AppBar>
       </div>
    </>);
}

export default Topbar