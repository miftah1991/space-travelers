import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import React from 'react';
import MainHeader from './components/MainHeader';
import MyProfile from './pages/MyProfile';
import DragonsPage from './pages/DragonsPage';
import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  return (
    <>
      <React.Suspense fallback={<Spinner animation="border" />}>
        <Router>
          <MainHeader />
          <Routes>
            <Route path="/" element={<RocketsPage />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/dragons" element={<DragonsPage />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
