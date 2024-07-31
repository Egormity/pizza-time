import Map from '../../ui/Map';

const grayText = `font-light text-zinc-400`;

export default function MapAndContacts({ padding }: { padding?: string }) {
  return (
    <section className={`${padding} max-width-page grid grid-cols-2 gap-x-20 gap-y-10 max1000px:grid-cols-1`}>
      <Map className='h-full w-full max1000px:h-[32.5rem]' />

      <div className='grid gap-4 max1000px:row-start-1'>
        <div>
          <h1 className='text-2xl font-medium'>Contact Us</h1>
          <p className={grayText}>
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div>
          <h3 className='font-medium'>Customer Support:</h3>
          <p className={grayText}>
            Our dedicated customer support team is ready to assist you with any inquiries you may have.
          </p>
          <p className={grayText}>- Email: support@pizzatime.com</p>
          <p className={grayText}>- Phone: 8 (800) 555 35-35</p>
          <p className={grayText}>- Hours: Monday - Friday, 8:00am - 9:00pm (EST)</p>
        </div>

        <div>
          <h3 className='font-medium'>Customer Support:</h3>
          <p className={grayText}>
            If you have general questions about our company, partnerships, or anything else, feel free to get
            in touch.
          </p>
          <p className={grayText}>- Email: info@pizzatime.com</p>
        </div>

        <div>
          <h3 className='font-medium'>Feedback and Suggestions:</h3>
          <p className={grayText}>
            We value your feedback and are always striving to improve. If you have any suggestions, comments,
            or ideas on how we can enhance our offerings, please let us know.
          </p>
          <p className={grayText}>- Email: feedback@pizzatime.com</p>
        </div>
      </div>
    </section>
  );
}
