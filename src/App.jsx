import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import { Box, Stack, createTheme} from "@mui/material"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { ThemeProvider } from '@emotion/react'
import { purple,green } from "@mui/material/colors"
function App() {
  const[mode,setmode]=useState('light');
  const darkTheme=createTheme(
    {
      palette:{
        mode:mode
        ,
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
        otherColor:{
          main: green[500]
        }
      }
    }
  )
  return (
    <ThemeProvider theme={darkTheme}>
 <Box bgcolor={'background.default'} color={'text.primary'}>
    <Navbar  mode={mode} setmode={setmode}/>
    <Stack direction='row' spacing={2} justifyContent='space-between'>
    <Sidebar mode={mode} setmode={setmode}/>
    <Feed/>
    <Rightbar/>
    </Stack>
     </Box>
    </ThemeProvider>
  
  )
}

export default App
