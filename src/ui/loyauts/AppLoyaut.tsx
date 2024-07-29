import { Outlet } from 'react-router-dom';
import Navbar from '../../Features/navbar/Navbar';
import Footer from '../../Features/footer/Footer';
import LoginPopup from '../../Features/account/AccountPopup';

export default function AppLoyaut() {
  return (
    <div className='overflow-y-visible'>
      <Navbar />

      <main className='min-h-screen'>
        <Outlet />
      </main>

      <LoginPopup />

      <Footer />
    </div>
  );
}
