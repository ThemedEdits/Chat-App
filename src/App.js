import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { darkTheme } from './styles';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';
import ContactsPage from './pages/ContactsPage';
import NewChatPage from './pages/NewChatPage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:chatId" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/new-chat/:contactId" element={<NewChatPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;