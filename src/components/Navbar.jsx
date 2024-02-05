import styled from '@emotion/styled'
import { Mail,NotificationAdd, MenuOpen, Home, Assignment, Group, Store, Person, Settings, ModeNight, FavoriteOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
const StyledToolbar=styled(Toolbar)(
  {
    display:'flex',
    justifyContent:"space-between"

  }
)
const Search=styled('div')(({theme})=>({backgroundColor:'white'
,padding:'0 10px',
borderRadius:'5px',
width:'40%'
}))
const Icon=styled(Box)(({theme})=>({
  display:'none',
  gap:'20px',
  alignItems:'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}))
const UserBox=styled(Box)(({theme})=>({
  display:'flex',
  gap:'10px',
  alignItems:'center',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}))

const Navbar = ({mode,setmode}) => {
  const [open,setopen]=useState(false)
  const [opnsm,setopnsm]=useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'>Shiriscripts <FavoriteOutlined sx={{color:'red'}}/></Typography>
        <MenuOpen sx={{display:{xs:'block',sm:'none'}}}  onClick={e=>setopnsm(true)} />
        <Search bgcolor={'background.default'} color={'text.primary'}><InputBase placeholder='Search...'/></Search>
        <Icon>
        <Badge color="error" badgeContent={4}>
  <Mail />
</Badge> 
<Badge color="error" badgeContent={4}>
  <NotificationAdd/>
</Badge> 
<Avatar sx={{width:'30',height:'30'}} alt="Cindy Baker" src="./Bilal.jpeg" onClick={e=>setopen(true)}/>
        </Icon>
        {/* Items */}
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl
        onClose={e=>setopnsm(false)}
        open={opnsm}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem><Home/> Home Page</MenuItem>
        <MenuItem><Assignment/> Pages</MenuItem>
        <MenuItem><Group/> Groups</MenuItem>
        <MenuItem><Store/> Market</MenuItem>
        <MenuItem><Person/> Friends</MenuItem>
        <MenuItem><Settings/> Settings</MenuItem>
        <MenuItem><ModeNight/><Switch onChange={e=> setmode(mode=='light'?'dark':'light')}/></MenuItem>
        
      </Menu>
        {/* Items */}
        {/* Online Friends */}

        {/* Online Friends */}
        <UserBox onClick={e=>setopen(true)}>
        <Avatar sx={{width:'30',height:'30'}} alt="Cindy Baker" src="./Bilal.jpeg" />
        <Typography variant='span'>
          Bilal
        </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl
        onClose={e=>setopen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick>Profile</MenuItem>
        <MenuItem onClick>My account</MenuItem>
        <MenuItem onClick>Logout</MenuItem>
        <MenuItem><Badge color="error" badgeContent={4}>
  <Mail />
</Badge> </MenuItem>
<MenuItem>
<Badge color="error" badgeContent={4}>
  <NotificationAdd/>
</Badge> </MenuItem>

      </Menu>
    </AppBar>
  )
}

export default Navbar