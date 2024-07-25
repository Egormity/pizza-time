import { useQuery } from '@tanstack/react-query';
import { getFooterPageContent } from '../services/apiFooterPages';

export function useFooterPageContent(select: string) {
  const {
    data: { data: footerPageContent, count } = {},
    error,
    isLoading: isLoadingFooterPageContent,
  } = useQuery({
    queryKey: [select],
    queryFn: () => getFooterPageContent(select),
  });

  return { footerPageContent, error, isLoadingFooterPageContent, count };
}
