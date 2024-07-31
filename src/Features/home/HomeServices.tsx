import Service from './Service';

export default function HomeServices({ padding }: { padding?: string }) {
  return (
    <section className={`max-width-page ${padding} grid gap-10 bg-zinc-900 text-center`}>
      <h1 className='text-4xl'>OUR SERVICES</h1>

      <p className='mx-auto max-w-[60rem] text-zinc-300'>
        Pizza Time provides services across all states - various foods and drinks, you choose! What makes us
        special is our teams of professionals with extensive knowledge of all the cuisine that we have to
        offer.
      </p>

      <div className='mx-auto flex flex-wrap justify-center gap-8'>
        <Service
          heading='Organic Food'
          imgNum={1}
          description='Pure and healthy organic food is our lifestyle. The products we consume have an impact on our future and we do everything to keep the future healthy'
        />

        <Service
          heading='Express Delivery'
          imgNum={2}
          description='Choose from a variety of express delivery services depending on your needs. Whether in a hurry to eat or have some plans tomorrow, we have got you covered'
        />

        <Service
          heading='Unforgettable Taste'
          imgNum={3}
          description='Our goal is to provide our customers with excellent service, great taste, and unforgettable experiences. This will be a mind-blowing experience for your taste buds'
        />
      </div>
    </section>
  );
}
