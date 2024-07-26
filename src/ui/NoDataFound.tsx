export default function NoDataFound({ dataName }: { dataName: string }) {
  return <h1 className='text-4xl font-black'>No {dataName} could be found..</h1>;
}
