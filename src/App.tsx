import { Routes, Route } from 'react-router-dom';
import React from 'react';
//import Header from './components/Header';
//import LoginForm from './components/LoginForm';
import PasswordReset from './components/PasswordReset';
//import EmailSent from './components/EmailSent';
//import ResetPassword from './components/ResetPassword';
//import ResetPasswordComplete from './components/ResetPasswordComplete';
import Login from './components/LoginForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <LoginForm /> */}
      {/* <PasswordReset /> */}
      {/* <ResetPassword /> */}
      {/* <ResetPasswordComplete /> */}
    </div>
  );
}
export default App;
