import PerspectiveHoverContainer from '../../ui/PerspectiveHoverContainer';

type ServiceProps = {
  heading: string;
  description: string;
  imgNum: number;
};

export default function Service({ heading, description, imgNum }: ServiceProps) {
  return (
    <PerspectiveHoverContainer>
      <div className={`grid max-w-[20rem] overflow-hidden rounded-xl`}>
        <div className='flex h-32 items-center pt-4'>
          <img src={`home/service-${imgNum}.webp`} alt={`Service ${imgNum}`} />
        </div>
        <div className='z-5 relative grid gap-2 bg-zinc-800 px-5 py-4'>
          <h3 className='text-2xl'>{heading}</h3>
          <p className='text-sm text-zinc-400'>{description}</p>
        </div>
      </div>
    </PerspectiveHoverContainer>
  );
}
