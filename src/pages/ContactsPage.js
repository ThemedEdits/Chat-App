import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Divider,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import { 
  ArrowBack, 
  Search, 
  MoreVert,
  Message,
  Call,
  Videocam,
  Block,
  Delete,
  PersonAdd
} from '@mui/icons-material';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import { useNavigate } from 'react-router-dom';
// Sample contacts data - replace with your actual data
const contacts = [
  {
    id: '1',
    name: 'Kashan',
    status: 'Online',
    avatar: '/path/to/avatar1.jpg',
    lastSeen: '2 min ago'
  },
  {
    id: '2',
    name: 'Sohail Khan',
    status: 'Offline',
    avatar: '/path/to/avatar2.jpg',
    lastSeen: '1 hour ago'
  },
  {
    id: '3',
    name: 'Owais Bandhani😎',
    status: 'Online',
    avatar: '/path/to/avatar3.jpg',
    lastSeen: '5 min ago'
  },
  {
    id: '4',
    name: 'Dwight Schrute',
    status: 'Away',
    avatar: '/path/to/avatar4.jpg',
    lastSeen: '30 min ago'
  },
  {
    id: '5',
    name: 'Hammad Ahmed',
    status: 'Away',
    avatar: '/path/to/avatar4.jpg',
    lastSeen: '30 min ago'
  },
];
const ContactsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [contextMenu, setContextMenu] = useState({
    anchorEl: null,
    currentContact: null
  });

  const handleContextMenu = (event, contact) => {
    event.preventDefault();
    event.stopPropagation();
    setContextMenu({
      anchorEl: event.currentTarget,
      currentContact: contact
    });
  };

  const handleCloseMenu = () => {
    setContextMenu({
      anchorEl: null,
      currentContact: null
    });
  };

   const handleContactClick = (contactId) => {
  navigate(`/new-chat/${contactId}`);
};

  const handleMenuAction = (action) => {
    console.log(`${action} clicked for ${contextMenu.currentContact.name}`);
    // Implement your action logic here
    handleCloseMenu();
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: '#121212',
      color: 'white'
    }}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <IconButton edge="end" color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Box sx={{ p: 2, backgroundColor: '#1e1e1e' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <Search sx={{ color: 'text.secondary', mr: 1 }} />
            ),
            sx: {
              backgroundColor: '#2d2d2d',
              borderRadius: '24px',
              color: 'white',
              '& fieldset': { border: 'none' }
            }
          }}
        />
      </Box>

      {/* Contacts List */}
      <List sx={{ 
        flex: 1, 
        overflowY: 'auto',
        backgroundColor: '#1e1e1e'
      }}>
        {filteredContacts.map((contact) => (
          <React.Fragment key={contact.id}>
            <ListItem 
              button 
              onClick={() => navigate(`/chat/${contact.id}`)}
              sx={{ '&:hover': { backgroundColor: '#333' } }}
            >
              <ListItemAvatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  color={
                    contact.status === 'Online' ? 'success' : 
                    contact.status === 'Away' ? 'warning' : 'error'
                  }
                >
                  <Avatar alt={contact.name} src={contact.avatar} />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.status === 'Online' ? 'Online' : `Last seen ${contact.lastSeen}`}
                secondaryTypographyProps={{
                  color: contact.status === 'Online' ? 'success.light' : 'text.secondary'
                }}
              />
              <IconButton
                edge="end"
                aria-label="more"
                onClick={(e) => {
                  e.stopPropagation();
                  handleContextMenu(e, contact);
                }}
                sx={{ color: 'text.secondary' }}
              >
                <MoreVert />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" sx={{ bgcolor: '#333' }} />
          </React.Fragment>
        ))}
      </List>

      {/* Context Menu */}
      <Menu
        anchorEl={contextMenu.anchorEl}
        open={Boolean(contextMenu.anchorEl)}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 3,
          sx: {
            backgroundColor: '#2d2d2d',
            color: 'white',
            minWidth: '200px'
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleMenuAction('message')}>
          <ListItemIcon sx={{ color: 'inherit' }}>
            <Message fontSize="small" />
          </ListItemIcon>
          <ListItemText>Send Message</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('call')}>
          <ListItemIcon sx={{ color: 'inherit' }}>
            <Call fontSize="small" />
          </ListItemIcon>
          <ListItemText>Voice Call</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('video')}>
          <ListItemIcon sx={{ color: 'inherit' }}>
            <Videocam fontSize="small" />
          </ListItemIcon>
          <ListItemText>Video Call</ListItemText>
        </MenuItem>
        <Divider sx={{ bgcolor: '#444' }} />
        <MenuItem onClick={() => handleMenuAction('add')}>
          <ListItemIcon sx={{ color: 'inherit' }}>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add to Favorites</ListItemText>
        </MenuItem>
        <Divider sx={{ bgcolor: '#444' }} />
        <MenuItem onClick={() => handleMenuAction('block')} sx={{ color: '#ff5252' }}>
          <ListItemIcon sx={{ color: '#ff5252' }}>
            <Block fontSize="small" />
          </ListItemIcon>
          <ListItemText>Block Contact</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('delete')} sx={{ color: '#ff5252' }}>
          <ListItemIcon sx={{ color: '#ff5252' }}>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete Contact</ListItemText>
        </MenuItem>
      </Menu>

      <BottomNavigation />
    </Box>
  );
};

export default ContactsPage;