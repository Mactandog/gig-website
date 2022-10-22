
import { ThemeProvider } from '@mui/material';
import { customTheme } from '../styles/customTheme';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './landingPage'

const Index = () => {
  return (
    <ThemeProvider theme={customTheme}>
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
        </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default Index
