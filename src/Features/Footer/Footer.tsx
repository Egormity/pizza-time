import { FaGithub } from 'react-icons/fa6';

import visa from '../../../public/footer/visa-icon.svg';
import masterCard from '../../../public/footer/mastercard-icon.svg';
import applePay from '../../../public/footer/applepay-icon.svg';
import googlePay from '../../../public/footer/googlepay-icon.svg';

import GenerateNavLinks from '../../ui/GenerateNavLinks';
import { footerLinks, navLinkNames } from '../../data/dataToMap';

export default function Footer() {
  return (
    <footer className='padding-page-x border-t border-zinc-800 bg-zinc-900 py-10 max700px:py-2'>
      <div className='max-width-page mx-auto grid grid-cols-3 divide-zinc-500 max700px:grid-cols-1 max700px:divide-y min700px:divide-x'>
        <div className='max700px:py-8'>
          <ul className='grid justify-items-center gap-4'>
            <GenerateNavLinks linkNames={navLinkNames} />

            <li>
              <a href='https://github.com/Egormity/pizza-time' target='_blanc' className='text-5xl'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <div className='max700px:py-8'>
          <ul className='grid justify-items-center gap-3'>
            <GenerateNavLinks linkNames={footerLinks} />
          </ul>
        </div>

        <div className='max700px:py-8'>
          <ul className='grid justify-items-center gap-3'>
            <li className='text-lg font-bold'>Have questions?</li>
            <li>8 (800) 555 35-35</li>
            <li>pizza@pizzatime.com</li>
            <li>8:00am - 9:00pm</li>
            <li className='flex gap-2'>
              <img src={visa} alt='Visa icon' className='h-9' />
              <img src={masterCard} alt='MasterCard icon' className='h-9' />
              <img src={applePay} alt='ApplePay icon' className='h-9' />
              <img src={googlePay} alt='GooglePay icon' className='h-9' />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
