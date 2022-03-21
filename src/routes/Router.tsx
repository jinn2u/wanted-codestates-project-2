import UserPage from '@pages/UserPage';
import KartPage from '@pages/KartPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/kart" element={<KartPage />} />
      <Route path="/kart/user" element={<UserPage />} />
    </Routes>
  );
};
export default Router;
