import AboutSection1 from '../Features/about/AboutSection1';
import AboutSection2 from '../Features/about/AboutSection2';
import AboutSection3 from '../Features/about/AboutSection3';
import AboutSection4 from '../Features/about/AboutSection4';

import LongPizza from '../ui/LongPizza';
import FourImagesRow from '../ui/FourImagesRow';
import ThreeImagesRow from '../ui/ThreeImagesRow';
import DivMaxWidth from '../ui/loyauts/DivMaxWidth';

export default function AboutPage() {
  return (
    <div>
      <AboutSection1 />

      <FourImagesRow />

      <AboutSection2 />

      <DivMaxWidth className='pt-8'>
        <ThreeImagesRow />
      </DivMaxWidth>

      <AboutSection3 />

      <LongPizza />

      <AboutSection4 />
    </div>
  );
}
