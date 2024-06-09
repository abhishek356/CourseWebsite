import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {ThemeProvider,createTheme} from '@mui/material'

const theme = createTheme({
  palette:{
    primary:{
      main:'#E3D026',
      contrastText: '#242105',
      dark : '#A29415'
    },
    secondary:{
      main:'#A29415'}
    
  },

  components :{

    MuiTextField:{
      styleOverrides :{
        root:{
          width:'900px'
        }
      }
    },

   

  }
 
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
