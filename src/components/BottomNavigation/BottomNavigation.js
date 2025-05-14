import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Add this line

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Chats" 
          icon={
            <motion.div whileHover={{ scale: 1.1 }}>
              <ChatIcon />
            </motion.div>
          }
          onClick={() => navigate('/')} // Add this
        />
        <BottomNavigationAction 
          label="Contacts" 
          icon={
            <motion.div whileHover={{ scale: 1.1 }}>
              <PeopleIcon />
            </motion.div>
          }
          onClick={() => navigate('/contacts')} // Add this
        />
        <BottomNavigationAction 
          label="Settings" 
          icon={
            <motion.div whileHover={{ scale: 1.1 }}>
              <SettingsIcon />
            </motion.div>
          }
          onClick={() => navigate('/settings')} // Add this
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;