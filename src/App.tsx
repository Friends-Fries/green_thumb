// React
import React from 'react';

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Landing from '../pages/Landing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  
  )
}

export default App;
