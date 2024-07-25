type FourImagesRowProps = {
  className?: string;
};

export default function FourImagesRow({ className }: FourImagesRowProps) {
  return (
    <div
      className={`${className} relative z-20 grid max600px:grid-cols-1 min500px:grid-cols-2 min900px:grid-cols-4`}
    >
      <div>
        <img src='images-row/img-1.webp' alt='Row image 1' />
      </div>

      <div>
        <img src='images-row/img-2.jpeg' alt='Row image 2' />
      </div>

      <div>
        <img src='images-row/img-3.webp' alt='Row image 3' />
      </div>

      <div className='overflow-hidden'>
        <img src='images-row/img-4.webp' alt='Row image 4' className='scale-125' />
      </div>
    </div>
  );
}
