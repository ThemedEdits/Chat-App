import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatList from '../components/ChatList/ChatList';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Messages
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <ChatList />
      
      <BottomNavigation />
    </Box>
  );
};

export default HomePage;