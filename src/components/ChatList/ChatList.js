import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Badge, Divider,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chatStyles } from '../../styles';

// Sample data - replace with your actual data source
const chats = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you doing?',
    time: '10:30 AM',
    unread: 2,
    avatar: '/path/to/avatar1.jpg',
  },
  {
    id: '2',
    name: 'Michael Smith',
    lastMessage: 'Meeting at 3 PM',
    time: 'Yesterday',
    unread: 0,
    avatar: '/path/to/avatar2.jpg',
  },
  // Add more chats...
];

const ChatList = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
    navigate(`/chat/${chatId}`);
  };

  return (
    <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
      {chats.map((chat) => (
        <motion.div
          key={chat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ListItem
            button
            onClick={() => handleChatClick(chat.id)}
            sx={chatStyles.chatListItem}
            selected={selectedChat === chat.id}
          >
            <ListItemAvatar>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={chat.unread > 0 ? chat.unread : null}
                color="primary"
              >
                <Avatar alt={chat.name} src={chat.avatar} />
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={chat.lastMessage}
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondaryTypographyProps={{
                color: chat.unread > 0 ? 'primary.light' : 'text.secondary',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {chat.time}
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </motion.div>
      ))}
    </List>
  );
};

export default ChatList;