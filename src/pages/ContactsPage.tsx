import ContactsForm from '../Features/contacts/ContactsForm';
import ContactUs from '../Features/contacts/ContactUs';
import { maxWidthPage } from '../utils/classNames';

export default function ContactsPage() {
  return (
    <div className='padding-page-t'>
      <section
        className={`${maxWidthPage} grid min600px:grid-cols-[5fr_1fr] min800px:grid-cols-[5fr_2fr] min1000px:grid-cols-[3fr_2fr] min1400px:grid-cols-2`}
      >
        <ContactsForm />
      </section>

      <ContactUs />
    </div>
  );
}
