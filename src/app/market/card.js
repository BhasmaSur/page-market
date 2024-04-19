"use client";

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/joy/Avatar';

export default function ProfileCard(apiData) {
  // Replace the following line with the actual API call to get data
  const data = {
    id: 1,
    name: "bmsx2gang",
    followers: 75000,
    accountReach: 5000000,
    audienceType: "North India, Mumbai",
    pageType: "Meme",
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        overflow: 'auto',
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src="/static/images/avatar/1.jpg" size="lg" sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography level="h2" fontSize="md">
            {data.name}
          </Typography>
          <Typography level="body2">Followers: {data.followers.toLocaleString()}</Typography>
          <Typography level="body2">Reach: {data.accountReach.toLocaleString()}</Typography>
          <Typography level="body2">Audience: {data.audienceType}</Typography>
          <Typography level="body2">Type: {data.pageType}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="solid" color="primary">
          Bid
        </Button>
      </CardActions>
    </Card>
  );
}
