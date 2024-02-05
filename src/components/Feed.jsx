import { Favorite, FavoriteBorder, MoreVertOutlined, Send } from '@mui/icons-material'
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import Posts from './posts'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
       <Posts p={'Morning Vibes'} img={"./BilalPost.jpg"}/>
       <Posts p={'Meet Salar from Abdullahpoor ka devdas'} img={'./Bilalpost2.jpeg'}/>
        </Box>
  )
}

export default Feed