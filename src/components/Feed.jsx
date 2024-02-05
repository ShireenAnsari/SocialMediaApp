import { Favorite, FavoriteBorder, MoreVertOutlined, Send } from '@mui/icons-material'
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import Posts from './posts'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
       <Posts p={'BreakFast Time'} name={'Alice Joy'} img='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'/>
       <Posts p={'Meet Salar from Abdullahpoor ka devdas'} name={'Bilal Abbas Khan'} img={'./Bilalpost2.jpeg'}/>
        </Box>
  )
}

export default Feed