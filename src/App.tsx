import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import ComfirmedPromise from './pages/ComfirmedPromise';
import PromiseView from './pages/PromiseView';
import FlagMeeting from './pages/FlagMeeting';
import Login from './pages/LoginForm';
import FindEmail1 from './pages/FindEmail1';
import FindEmail2 from './pages/FindEmail2';
import EmailChange1 from './pages/EmailChange1';
import EmailChange2 from './pages/EmailChange2';
import PasswordChange from './pages/PasswordChange';
import ResetPassword1 from './pages/ResetPassword1';
import ResetPassword2 from './pages/ResetPassword2';
import ResetPassword3 from './pages/ResetPassword3';
import ResetPassword4 from './pages/ResetPassword4';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route
            path="/promise-view"
            element={<PromiseView />}
          />
          <Route
            path="/flag-meeting"
            element={<FlagMeeting />}
          />
          <Route
            path="/comfirmed-promise"
            element={<ComfirmedPromise />}
          />
          <Route
            path="/email-change"
            element={<EmailChange1 />}
          />
          <Route
            path="/password-change"
            element={<PasswordChange />}
          />

          {/* 헤더 없음 */}
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
            path="/reset-password"
            element={<ResetPassword1 />}
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
          <Route
            path="/email-change-complete"
            element={<EmailChange2 />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
