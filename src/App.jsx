import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#451e5d',
    },
    secondary: {
      main: '#ffffff',
      sub : '#faac95',
    },
    accent: {
      goals: "#9B59B6",
      convo: "#f3def5"
    },
    background: {
      default: '#c8a5c2',
    },
    button:{
      primary:'#72276f',
      secondary:'#934379',
      tertiary: '#DBAFA0',
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;