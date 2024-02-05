import React from 'react'
import { Favorite, FavoriteBorder, MoreVertOutlined, Send } from '@mui/icons-material'
import { Avatar,Card, CardActionArea, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
const Posts = ({p,img}) => {
  return (
    <div>
         <Card sx={{marginX:'10'}}>
      <CardHeader 
        avatar={
          <Avatar src='Bilal.jpeg' aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Bilal Abbas Khan"
        subheader="05 Jan, 2024"
      />
      <CardMedia
        component="img"
        height='20%'
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {p}
        </Typography>
      </CardContent>
      <CardActionArea disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
<Checkbox
/>
        </IconButton>
        <IconButton aria-label="share">
          <Send/>
        </IconButton>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Posts