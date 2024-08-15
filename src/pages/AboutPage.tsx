import AboutSection1 from '../features/about/AboutSection1Food';
import AboutSection2 from '../features/about/AboutSection2Together';
import AboutSection3 from '../features/about/AboutSection3Feedback';
import AboutSection4 from '../features/about/AboutSection4Join';

import LongPizza from '../ui/Backgrounds/LongPizza';
import FourImagesRow from '../ui/Backgrounds/FourImagesRow';
import ThreeImagesRow from '../ui/Backgrounds/ThreeImagesRow';

export default function AboutPage() {
  return (
    <div>
      <AboutSection1 />

      <FourImagesRow />

      <AboutSection2 />

      <div className={`max-width-page pt-8`}>
        <ThreeImagesRow />
      </div>

      <AboutSection3 />

      <LongPizza />

      <AboutSection4 />
    </div>
  );
}
