import { AccountBox, Assignment, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, Switch } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react'

const Sidebar = ({mode,setmode}) => {
  return (
    <Box flex={1} p={2}
    sx={{display:{xs:'none',sm:'block'}}}
    >
  <Box sx={{position:'fixed'}}>
  <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#pages'>
              <ListItemIcon>
                <Assignment/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#group'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#market'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#friends'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#settings'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#profile'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#profile'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
               <Switch onChange={e=> setmode(mode=='light'?'dark':'light')}/>
            </ListItemButton>
          </ListItem>

  </Box>
        </Box>
  )
}

export default Sidebar