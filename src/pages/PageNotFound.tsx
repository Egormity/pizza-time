import Button from '../ui/Button';

export default function PageNotFound() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-6 text-center'>
      <h1 className='text-3xl font-black'>Page you are looking for could not be found</h1>
      <Button type='red' to={-1}>
        &larr; Go back
      </Button>
    </div>
  );
}
