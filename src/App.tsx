import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from './components/LoginForm';
import FindEmail1 from './components/FindEmail1';
import FindEmail2 from './components/FindEmail2';
import EmailChange1 from './components/EmailChange1';
import EmailChange2 from './components/EmailChange2';
import PasswordChange from './components/PasswordChange';
import ResetPassword from './components/ResetPassword1';
import ResetPassword2 from './components/ResetPassword2';
import ResetPassword3 from './components/ResetPassword3';
import ResetPassword4 from './components/ResetPassword4';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/find-email"
          element={<FindEmail1 />}
        />
        <Route
          path="/find-email-complete"
          element={<FindEmail2 />}
        />
        <Route
          path="/email-change"
          element={<EmailChange1 />}
        />
        <Route
          path="/email-change-complete"
          element={<EmailChange2 />}
        />
        <Route
          path="/password-change"
          element={<PasswordChange />}
        />
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
        <Route
          path="/password-change-email"
          element={<ResetPassword2 />}
        />
        <Route
          path="/new-password"
          element={<ResetPassword3 />}
        />
        <Route
          path="/reset-password-complete"
          element={<ResetPassword4 />}
        />
      </Routes>
    </div>
  );
}
export default App;
