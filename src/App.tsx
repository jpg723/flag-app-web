import React from 'react';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ComfirmedPromise from './pages/ComfirmedPromise';
import PromiseView from './pages/PromiseView';
import FlagMeeting from './pages/FlagMeeting';



function App() {
  return (
    <div>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/promise-view" element={<PromiseView />} />
            <Route path="/flag-meeting" element={<FlagMeeting />} />
            <Route path="/comfirmed-promise" element={<ComfirmedPromise />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;