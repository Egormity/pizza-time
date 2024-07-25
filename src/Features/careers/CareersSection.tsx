import FooterPageLoyaut from '../../ui/loyauts/FooterPageLoyaut';
import GenerateCareers from './GenerateCareers';

export default function CareersSection() {
  return (
    <FooterPageLoyaut heading='Careers'>
      <p className='mt-4 text-center text-zinc-400'>
        If you think you can add value with your expertise, passion, and hard work, you might be the ONE!
      </p>
      <GenerateCareers />
    </FooterPageLoyaut>
  );
}
