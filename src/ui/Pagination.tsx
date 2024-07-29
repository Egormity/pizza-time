import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../utils/constants';
import Button from './Button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SpinnerMini from './SpinnerMini';
import { scrollToTop } from '../utils/scrollToTop';
import { useLayoutEffect } from 'react';

export default function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get('page') || 1;
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev + '');
    setSearchParams(searchParams);
    scrollToTop();
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next + '');
    setSearchParams(searchParams);
    scrollToTop();
  }

  return (
    <div className='flex items-center justify-between gap-4 max600px:flex-col'>
      <p>
        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} &mdash;{' '}
        {currentPage === pageCount ? count : currentPage * ITEMS_PER_PAGE} of {count} results
      </p>

      <div className='flex items-center gap-6'>
        <Button variation='yellow' disabled={currentPage === 1} customFunc={prevPage}>
          <HiChevronLeft /> <span>Previous</span>
        </Button>

        {pageCount && currentPage ? (
          <p>
            {currentPage} / {pageCount}
          </p>
        ) : (
          <SpinnerMini />
        )}

        <Button variation='yellow' disabled={currentPage === pageCount} customFunc={nextPage}>
          <span>Next</span> <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}
