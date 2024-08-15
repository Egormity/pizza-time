import { useSearchParams } from 'react-router-dom';
import HomeServices from '../features/home/HomeServices';
import MainInfo from '../features/home/MainInfo';
import MenuPricing from '../features/home/MenuPricing';
import PizzaMealsSection from '../features/home/PizzaMealsSection';
import PizzaTimeSection from '../features/home/PizzaTimeSection';
import RecentFromBlog from '../features/home/RecentFromBlog';
import Stats from '../features/home/Stats';
import WelcomeVideo from '../features/home/WelcomeVideo';
import FourImagesRow from '../ui/Backgrounds/FourImagesRow';
import LongOffice from '../ui/Backgrounds/LongOffice';
import BlogPost from '../ui/BlogPost';
import MapAndContacts from '../features/home/MapAndContacts';

export default function HomePage() {
  const [searchParams] = useSearchParams();

  return searchParams.get('post') ? (
    <BlogPost />
  ) : (
    <div>
      <WelcomeVideo />

      <PizzaTimeSection padding='py-6' />

      <LongOffice />

      <MainInfo padding='py-16' />

      <HomeServices padding='pt-8' />

      <PizzaMealsSection padding='py-16' />

      <MenuPricing />

      <FourImagesRow className='mt-14' />

      <Stats margin='mb-14' />

      <RecentFromBlog />

      <MapAndContacts padding='py-16' />
    </div>
  );
}
