import AboutSection1 from '../Features/about/AboutSection1';
import AboutSection2 from '../Features/about/AboutSection2';
import AboutSection3 from '../Features/about/AboutSection3';
import AboutSection4 from '../Features/about/AboutSection4';

import LongPizza from '../ui/Backgrounds/LongPizza';
import FourImagesRow from '../ui/Backgrounds/FourImagesRow';
import ThreeImagesRow from '../ui/Backgrounds/ThreeImagesRow';
import { maxWidthPage } from '../utils/classNames';

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
