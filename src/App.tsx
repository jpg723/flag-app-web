import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp1 from './components/SignUp1';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import MyPage from './components/MyPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp1 />} />
          <Route path="/SignUp1" element={<SignUp1 />} />
          <Route path="/SignUp2" element={<SignUp2 />} />
          <Route path="/SignUp3" element={<SignUp3 />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
