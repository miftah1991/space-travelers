import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MyProfile from './pages/MyProfile';
import DragonsPage from './pages/DragonsPage';
import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/dragons" element={<DragonsPage />} />
      </Routes>
    </>
  );
}

export default App;
