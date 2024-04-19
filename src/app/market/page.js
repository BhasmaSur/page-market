"use client";
import Head from 'next/head';
import Box from '@mui/joy/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/joy/Toolbar';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Search from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import ProfileCard from './card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Market</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Page Market
          </Typography>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Repeat the <ProfileCard /> component for the number of cards you want to display */}
          <ProfileCard />
          {/* ... other cards */}
        </Box>
      </Box>
    </>
  );
}
