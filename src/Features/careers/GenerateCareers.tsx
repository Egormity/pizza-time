import { useFooterPageContent } from '../../hooks/useFooterPageContent';
import Button from '../../ui/Button';
import NoDataFound from '../../ui/NoDataFound';
import Spinner from '../../ui/Spinner';

export default function GenerateCareers() {
  const { footerPageContent, isLoadingFooterPageContent } = useFooterPageContent('careers');

  if (isLoadingFooterPageContent) return <Spinner />;

  if (!footerPageContent) return <NoDataFound dataName='Careers' />;

  return (
    <div className='max-width-medium divide-y divide-zinc-500 py-8'>
      {footerPageContent.map(career => (
        <div key={career.id} className='grid grid-cols-[1fr_max-content] gap-6 py-8 text-left'>
          <h2 className='col-span-full text-lg font-bold'>{career.heading}</h2>
          <p className='text-sm text-zinc-400'>{career.description}</p>
          <div className='ml-6 flex items-end'>
            <Button variation='red' to='/ContactsPage'>
              Apply
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
