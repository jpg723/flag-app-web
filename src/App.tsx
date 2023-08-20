import React from 'react';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './GlobalStyle';
import ComfirmedPromise from './pages/ComfirmedPromise';
import PromiseView from './pages/PromiseView';
import FlagMeeting from './pages/FlagMeeting';
import Login from './pages/LoginForm';
import FindEmail1 from './pages/FindEmail1';
import FindEmail2 from './pages/FindEmail2';
import PasswordChange from './pages/PasswordChange';
import ResetPassword1 from './pages/ResetPassword1';
import ResetPassword2 from './pages/ResetPassword2';
import ResetPassword3 from './pages/ResetPassword3';
import ResetPassword4 from './pages/ResetPassword4';
import Main from './pages/Main';
import ServiceInfo from './pages/ServiceInfo';
import MakeFlag from './pages/MakeFlag';
import MakeFlagFinish from './pages/MakeFlagFinish';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';
import SignUp3 from './pages/SignUp3';
import MyPage from './pages/MyPage';
import MyPageFriendsAdd from './pages/MyPageFriendsAdd';
import MyPageFriendsDelete from './pages/MyPageFriendsDelete';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* 헤더 있음 */}
            <Route element={<Header />}>
              <Route path="/" element={<Main />} />
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
                path="/password-change"
                element={<PasswordChange />}
              />
              <Route
                path="/serviceInfo"
                element={<ServiceInfo />}
              />
              <Route
                path="/makeFlag"
                element={<MakeFlag />}
              />
              <Route
                path="/makeFlagFinish"
                element={<MakeFlagFinish />}
              />
              <Route
                path="/SignUp1"
                element={<SignUp1 />}
              />
              <Route
                path="/SignUp2"
                element={<SignUp2 />}
              />
              <Route
                path="/SignUp3"
                element={<SignUp3 />}
              />
              <Route path="/MyPage" element={<MyPage />} />
            </Route>
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
              path="/MyPage_FriendsAdd"
              element={<MyPageFriendsAdd />}
            />
            <Route
              path="/MyPage_FriendsDelete"
              element={<MyPageFriendsDelete />}
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
