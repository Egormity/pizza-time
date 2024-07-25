import { Outlet } from 'react-router-dom';
import Navbar from '../../Features/navbar/Navbar';
import Footer from '../../Features/footer/Footer';

export default function AppLoyaut() {
  return (
    <div className='overflow-y-visible'>
      <Navbar />

      <main className='min-h-[75vh]'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
