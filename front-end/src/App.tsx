import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import RegisterCapital from './pages/RegisterCapital';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/financeiro" element={<RegisterCapital />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
