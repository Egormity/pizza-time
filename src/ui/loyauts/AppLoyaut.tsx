import { Outlet } from 'react-router-dom';

import Navbar from '../../Features/navbar/Navbar';
import LoginPopup from '../../Features/account/AccountPopup';
import Footer from '../../Features/footer/Footer';

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
