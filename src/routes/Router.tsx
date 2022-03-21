import { Route, Routes } from 'react-router-dom';

import KartPage from '@pages/KartPage';
import UserPage from '@pages/UserPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/kart" element={<KartPage />} />
      <Route path="/kart/user" element={<UserPage />} />
    </Routes>
  );
};
export default Router;
