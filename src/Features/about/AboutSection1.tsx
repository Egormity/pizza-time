import AboutArticle from '../../ui/AboutArticle';
import Overlay from '../../ui/Overlay';
import { maxWidthPage } from '../../utils/classNames';

export default function AboutSection1() {
  return (
    <section className='bg-about-1 border-primary-red-dark relative border-b'>
      <Overlay />

      <div className={`${maxWidthPage} pb-12 pt-32`}>
        <AboutArticle cursive='ABOUT US' heading='More than delicious food' className='relative z-20'>
          Founded in 1982 we bring pizza slice by slice to the next level! Unique branding and being in the
          pizza industry is the formula to our success. We do understand what people want and convert desires
          to unique experiences of taste. Freshness, originality, and quality are only a small part of our
          priorities. Affortable costs, located almost anywhere you go, amazing online operational system to
          order food in one click. Easy to navigate pre-order options and amazing options for corporate
          parties! At Pizza Time we care about you because you are the one who makes us special! The Pizza
          Time project was made with love for pizza by Ekaterine Mitagvaria.
        </AboutArticle>
      </div>
    </section>
  );
}
