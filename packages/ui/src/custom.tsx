import React from 'react'
import {styled, alpha, makeStyles} from '@mui/material/styles'
import { InputBase,Button} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Autocomplete from '@mui/material';


export let Search = styled('div')(({theme})=>({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white,0.15),
    '&:hover':{
        backgroundColor: alpha(theme.palette.common.white,0.25)
    },
    
    marginRight: theme.spacing(2),
    marginLeft:0,
    width:'100%',

    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(1),
        width:'auto',
    }
    
}));


export let SearchIconWrapper = styled('div')(({theme})=>({

    padding : theme.spacing(0,2),
    height:'100%',
    position : 'absolute',
    pointerEvents:'none',
    display : 'flex',
    alignItems :'center',
    justifyContent:'center'

}));


export let StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  export let HoverReveal = styled(AddShoppingCartOutlinedIcon)(({theme})=>({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'black',
   
    '&:hover':{
      backgroundColor :  alpha(theme.palette.common.white,0.25)
  },

  }))

  export let SignUpButton = styled(Button)(({theme})=>({
    
      MuiButton:{
         defaultProps:{
           disableRipple:true,
           disableElevation:true,
         },
         styleOverrides:{
           root:{
             width:'450px',
             textTransform:'none',
             fontSize:'1em'
           }
         }
       },

       '&.MuiButton-root': {
        positon:'absolute',
        width: '275px', // Adjust the width as needed
        textTransform: 'none',
        fontSize: '1em',

      },
 
  }))