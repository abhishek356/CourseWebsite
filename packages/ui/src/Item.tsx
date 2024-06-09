import React from 'react'
import {Course} from './common_utilites/Types/Course'
import { Box } from '@mui/material'

let Item = (title)=>{
        console.log('Inside the item component and the title'+
        'value is',title.prop)
    return(<>
    <Box sx = {{
        paddingLeft:'5px',
        borderStyle:'solid',
        borderWidth:'0px 0px 1px 0px ',
        borderColor:'black',
        borderBottomColor:"none",
        
    }}>
    <h3>{title.prop}</h3>
 </Box>
    </>)
}

export default  Item
