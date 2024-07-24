import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLoyaut from './pages/AppLoyaut';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLoyaut />}>
          <Route index element={<Navigate replace to={'HomePage'} />} />
          <Route path='HomePage' element={<HomePage />} />
          <Route path='MenuPage' element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
