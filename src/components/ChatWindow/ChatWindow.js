import React from 'react';
import { Box } from '@mui/material';
import Message from '../Message/Message';
import { chatStyles } from '../../styles';
import { motion } from 'framer-motion';

const ChatWindow = ({ messages, chatData, messagesEndRef }) => {
  return (
    <Box sx={chatStyles.chatWindow}>
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: message.sender === 'me' ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Message
            message={message}
            isMe={message.sender === 'me'}
            showAvatar={index === 0 || messages[index - 1].sender !== message.sender}
            avatar={chatData.avatar}
          />
        </motion.div>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};


export default ChatWindow;