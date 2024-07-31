export default function ContactUs() {
  return (
    <section className='bg-primary-yellow-light'>
      <div className={`max-width-page grid grid-cols-2 gap-8 pb-32 pt-10 max1000px:grid-cols-1`}>
        <div>
          <h1 className='text-6xl font-black'>Contact us</h1>
          <p className='mt-4 max-w-[30rem]'>
            We greatly anticipate your response and are eager to receive any inquiries you might have. Please
            do not hesitate to reach out to us should you require any further clarification or assistance.
            Your feedback and questions are of utmost importance to us, and we are here to provide the support
            you need. Looking forward to hearing from you!
          </p>
        </div>

        <div className='bg-contacts h-[22.5rem] w-[27.5rem] overflow-hidden rounded-2xl shadow-md ring-2 ring-primary-yellow-light duration-primary hover:shadow-primary-yellow hover:ring-primary-yellow max1000px:row-start-1 max1000px:row-end-2 max1000px:w-full min1000px:-translate-y-36 min1000px:justify-self-end' />
      </div>
    </section>
  );
}
