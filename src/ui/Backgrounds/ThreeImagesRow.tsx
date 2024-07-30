export default function ThreeImagesRow() {
  return (
    <>
      <div className='flex overflow-hidden rounded-2xl max500px:flex-col'>
        <div className='overflow-hidden'>
          <img src='about/img-1.jpeg' alt='Bar image 1' className='scale-125' />
        </div>

        <div>
          <img src='about/img-2.jpeg' alt='Bar image 2' />
        </div>

        <div className='overflow-hidden'>
          <img src='about/img-3.jpeg' alt='Bar image 3' className='scale-125' />
        </div>
      </div>
    </>
  );
}
