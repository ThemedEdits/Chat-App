import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Switch,
  Divider,
  Avatar
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  Security as SecurityIcon,
  Help as HelpIcon,
  Person as PersonIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // You would implement theme switching logic here
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: '#121212',
      color: 'white'
    }}>
      {/* Header */}
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Avatar 
          sx={{ 
            width: 80, 
            height: 80, 
            margin: '0 auto 16px',
            border: '2px solid #90caf9'
          }}
          src="/path/to/user/avatar.jpg" // Replace with your user avatar
        />
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body2" color="text.secondary">john.doe@example.com</Typography>
      </Box>

      {/* Settings List */}
      <List sx={{ width: '100%', bgcolor: '#1e1e1e', flex: 1 }}>
        {/* Account Section */}
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </ListItem>
        <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />

        {/* Notifications */}
        <ListItem>
          <ListItemIcon sx={{ color: 'white' }}>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
          <Switch 
            checked={notifications} 
            onChange={handleNotificationsToggle}
            color="primary"
          />
        </ListItem>
        <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />

        {/* Dark Mode */}
        <ListItem>
          <ListItemIcon sx={{ color: 'white' }}>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText primary="Dark Mode" />
          <Switch 
            checked={darkMode} 
            onChange={handleDarkModeToggle}
            color="primary"
          />
        </ListItem>
        <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />

        {/* Privacy */}
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy & Security" />
        </ListItem>
        <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />

        {/* Help */}
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help & Support" />
        </ListItem>
        <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />

        {/* Logout */}
        <ListItem button sx={{ color: '#f44336' }}>
          <ListItemIcon sx={{ color: '#f44336' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      <BottomNavigation />
    </Box>
  );
};

export default SettingsPage;