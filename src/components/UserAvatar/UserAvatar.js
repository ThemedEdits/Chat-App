import React from 'react';
import { Avatar, Badge } from '@mui/material';
import { motion } from 'framer-motion';

const UserAvatar = ({ src, alt, size = 40, online = false }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color={online ? 'success' : 'default'}
      >
        <Avatar 
          alt={alt} 
          src={src} 
          sx={{ width: size, height: size }}
        />
      </Badge>
    </motion.div>
  );
};

export default UserAvatar;