import Button from '../../ui/Button';
import Overlay from '../../ui/Overlay';

export default function WelcomeVideo({ padding }: { padding?: string }) {
  return (
    <section className={`${padding} relative flex h-screen items-center justify-center`}>
      <video autoPlay muted loop className='absolute left-0 top-0 h-full w-full object-cover'>
        <source src='/home/hero-bg.mp4' type='video/mp4' />
      </video>
      <Overlay />

      <div className='padding-page-x max-width-page z-20 mx-auto flex flex-col items-center gap-2 text-center'>
        <h3 className='font-cursive text-4xl text-primary-red'>Welcome</h3>
        <h1 className='text-4-5xl font-black'>TRY SOMETHING AMAZING</h1>
        <p>
          Ordering your fave Pizza is quick and easy <br /> with our app or on our website.
        </p>

        <div className='mt-4 flex gap-4'>
          <Button variation='yellow' to='/BlogPage'>
            Read Blog
          </Button>
          <Button variation='gray' to='/MenuPage'>
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
