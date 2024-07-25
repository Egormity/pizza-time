export default function Overlay({ bgOpacity = 'bg-opacity-80' }: { bgOpacity?: string }) {
  return <div className={`${bgOpacity} absolute z-10 h-full w-full bg-zinc-950`} />;
}
