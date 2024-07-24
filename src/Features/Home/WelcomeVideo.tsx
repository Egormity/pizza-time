import Button from '../../ui/Button';

export default function WelcomeVideo() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center text-center'>
        <h3 className='font-cursive text-primary-red text-4xl'>Welcome</h3>
        <h1 className='text-4-5xl font-black'>TRY SOMETHING AMAZING</h1>
        <p>Ordering your fave Pizza is quick and easy</p>
        <p>with our app or on our website.</p>
        <div className='flex gap-4 mt-4'>
          <Button type='red'>Read Blog</Button>
          <Button type='yellow'>View Menu</Button>
        </div>
      </div>
    </section>
  );
}
