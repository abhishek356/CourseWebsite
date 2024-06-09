
'use client'

import {Button,Card,CssBaseline,CardContent} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import {styled} from '@mui/material/styles'

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
  export default function UploadFunciton (){

    return 
    
    (
    <>
    <CssBaseline>

  <Card variant = 'outlined'>
      <CardContent>
          <Button
          component = "label"
          variant='contained'
          tabIndex ={-1}
          startIcon={<CloudUploadIcon/>}>
              Upload file
              <VisuallyHiddenInput type = 'file'/>

          </Button>
      </CardContent>
  </Card>

</CssBaseline>
    </>)

}

 