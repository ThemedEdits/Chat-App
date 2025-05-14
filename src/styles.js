import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export const chatStyles = {
  chatWindow: {
    height: 'calc(100vh - 128px)',
    overflowY: 'auto',
    padding: '16px',
    backgroundColor: '#1e1e1e',
  },
  messageInput: {
    padding: '16px',
    backgroundColor: '#1e1e1e',
    borderTop: '1px solid #333',
  },
  chatListItem: {
    '&:hover': {
      backgroundColor: '#333',
    },
  },
};