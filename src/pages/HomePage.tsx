import { useSearchParams } from 'react-router-dom';
import HomeServices from '../Features/home/HomeServices';
import MainInfo from '../Features/home/MainInfo';
import MenuPricing from '../Features/home/MenuPricing';
import PizzaMealsSection from '../Features/home/PizzaMealsSection';
import PizzaTimeSection from '../Features/home/PizzaTimeSection';
import RecentFromBlog from '../Features/home/RecentFromBlog';
import Stats from '../Features/home/Stats';
import WelcomeVideo from '../Features/home/WelcomeVideo';
import FourImagesRow from '../ui/Backgrounds/FourImagesRow';
import LongOffice from '../ui/Backgrounds/LongOffice';
import BlogPost from '../ui/BlogPost';
import MapAndContacts from '../Features/home/MapAndContacts';

export default function HomePage() {
  const [searchParams, getSearchParams] = useSearchParams();

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
