import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, IconButton, Avatar, Typography } from '@mui/material';
import { Send, ArrowBack } from '@mui/icons-material';

const NewChatPage = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  // Fetch contact details based on contactId
  const contact = {
    id: contactId,
    name: 'Contact Name', // Fetch actual contact details
    avatar: '/path/to/avatar.jpg'
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    const newMsg = {
      id: Date.now(),
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString()
    };
    
    setMessages([...messages, newMsg]);
    setMessage('');
    
    // Simulate reply
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: 'Thanks for your message!',
        sender: 'other',
        time: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #333' }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <Avatar src={contact.avatar} sx={{ mx: 2 }} />
        <Typography variant="h6">{contact.name}</Typography>
      </Box>
      
      {/* Messages */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {messages.map(msg => (
          <Box key={msg.id} sx={{ 
            display: 'flex', 
            justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
            mb: 2
          }}>
            <Box sx={{
              bgcolor: msg.sender === 'me' ? 'primary.main' : 'grey.800',
              color: msg.sender === 'me' ? 'white' : 'text.primary',
              p: 2,
              borderRadius: 2,
              maxWidth: '130%'
            }}>
              {msg.text}
            </Box>
          </Box>
        ))}
      </Box>
      
      {/* Input */}
      <Box sx={{ p: 2, borderTop: '1px solid #333' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSendMessage}>
                <Send />
              </IconButton>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default NewChatPage;