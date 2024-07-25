import AboutArticle from '../../ui/AboutArticle';
import Overlay from '../../ui/Overlay';
import { maxWidthPage } from '../../utils/classNames';

export default function AboutSection3() {
  return (
    <section className='border-primary-red-dark bg-about-2 relative border-b'>
      <Overlay />

      <div className='max-w-medium mx-auto'>
        <div className={`${maxWidthPage} py-8`}>
          <AboutArticle cursive='DEDICATED' heading='Changing the world together' className='relative z-20'>
            We believe that our success is due to our commitment to providing high-quality food and
            exceptional service. Our menu features a wide range of delicious pizzas, salads, sandwiches, pasta
            dishes, and more, all made with fresh, locally sourced ingredients. We take great care to ensure
            that each dish is prepared with the utmost attention to detail, so that every bite is as delicious
            as the last. We also understand that great food is only part of the equation. That's why we place
            a strong emphasis on delivering exceptional service to every customer who walks through our doors.
            Our team of dedicated staff members is committed to providing a warm, welcoming atmosphere that
            makes every guest feel like they are part of the family.
          </AboutArticle>
        </div>
      </div>
    </section>
  );
}
