import ContactsForm from '../features/contacts/ContactsForm';
import ContactUs from '../features/contacts/ContactUs';

export default function ContactsPage() {
  return (
    <div className='padding-page-t'>
      <section
        className={`max-width-page grid min600px:grid-cols-[5fr_1fr] min800px:grid-cols-[5fr_2fr] min1000px:grid-cols-[3fr_2fr] min1400px:grid-cols-2`}
      >
        <ContactsForm />
      </section>

      <ContactUs />
    </div>
  );
}
