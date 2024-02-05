import { Avatar, AvatarGroup, Box, ImageList, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
    sx={{display:{xs:'none',sm:'block'}}}
    >
      <Box sx={{position:'fixed'}}>
    <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
    <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="./Aiza.jpeg" />
  <Avatar alt="Travis Howard" src="./danish.jpeg" />
  <Avatar alt="Cindy Baker" src="./Sarah-Khan.jpg" />
  <Avatar alt="Agnes Walker" src="./Bilal.jpeg" />
  <Avatar alt="Trevor Henderson" src="./NoorZafar.jpeg" />
  <Avatar alt="Remy Sharp" src="./dananeer.jpeg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100}>Latest Posts</Typography>
<ImageList>
  
</ImageList>
      </Box>
      
        </Box>
  )
}

export default Rightbar