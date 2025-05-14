import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Message = ({ message, isMe, showAvatar, avatar }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        alignItems: 'flex-end',
        mb: 2,
        gap: 1,
      }}
    >
      {!isMe && showAvatar && (
        <Avatar src={avatar} sx={{ width: 32, height: 32 }} />
      )}
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Box
          sx={{
            maxWidth: '130%',
             minWidth: '120px', // Added minimum width
            backgroundColor: isMe ? 'primary.main' : 'background.paper',
            color: isMe ? 'primary.contrastText' : 'text.primary',
            borderRadius: isMe ? '18px 18px 0 18px' : '18px 18px 18px 0',
            padding: '8px 12px',
            boxShadow: 1,
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'right',
              color: isMe ? 'primary.contrastText' : 'text.secondary',
              opacity: 0.7,
            }}
          >
            {message.time}
          </Typography>
        </Box>
      </motion.div>
      
      {isMe && (
        <Box sx={{ visibility: 'hidden', width: 32 }}>
          {/* Empty box to balance the layout */}
        </Box>
      )}
    </Box>
  );
};

export default Message;