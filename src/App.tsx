import React from 'react';
import MakeFlag from './pages/MakeFlag';
import MakeFlagFinish from './pages/MakeFlagFinish';
import Main from './pages/Main';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/makeFlag" element={<MakeFlag />} />
          <Route
            path="/makeFlagFinish"
            element={<MakeFlagFinish />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
