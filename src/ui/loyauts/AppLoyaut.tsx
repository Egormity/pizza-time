import { Outlet } from 'react-router-dom';

import Navbar from '../../features/navbar/Navbar';
import LoginPopup from '../../features/account/AccountPopup';
import Footer from '../../features/footer/Footer';

export default function AppLoyaut() {
  return (
    <div className='overflow-x-hidden overflow-y-visible'>
      <Navbar />

      <main className='min-h-screen'>
        <Outlet />
      </main>

      <Footer />

      <LoginPopup />
    </div>
  );
}
