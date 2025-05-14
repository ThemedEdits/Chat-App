import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  TextField, 
  InputAdornment,
  Avatar
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  Mood as MoodIcon
} from '@mui/icons-material';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';


const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Sample data - replace with your actual data source
  const chatData = {
    id: '1',
    name: 'John Doe',
    avatar: '/path/to/avatar1.jpg',
  };

  // Sample messages - replace with your actual data source
  const sampleMessages = [
    {
      id: '1',
      text: 'Hey there!',
      sender: 'other',
      time: '10:30 AM',
    },
    {
      id: '2',
      text: 'Hi! How are you?',
      sender: 'me',
      time: '10:32 AM',
    },
  ];

  useEffect(() => {
    // Simulate loading messages
    setMessages(sampleMessages);
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate reply
    setTimeout(() => {
      const reply = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message!',
        sender: 'other',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh',bottom: '56px', }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Avatar 
            src={chatData.avatar} 
            alt={chatData.name} 
            sx={{ width: 32, height: 32, marginRight: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {chatData.name}
          </Typography>
        </Toolbar>
      </AppBar>

      <ChatWindow messages={messages} chatData={chatData} messagesEndRef={messagesEndRef} />

      <Box sx={{
      position: 'fixed',
      bottom: '56px', // Position above bottom navigation
      left: 0,
      right: 0,
      backgroundColor: '#1e1e1e',
      borderTop: '1px solid #333',
      padding: '8px 16px'
    }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          multiline
          maxRows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" color="inherit">
                  <AttachFileIcon />
                </IconButton>
                <IconButton edge="start" color="inherit">
                  <MoodIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  edge="end" 
                  color="primary" 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              backgroundColor: '#2d2d2d',
              borderRadius: '24px',
              padding: '8px 16px',
            }
          }}
        />
      </Box>

      <BottomNavigation />
    </Box>
  );
};

export default ChatPage;