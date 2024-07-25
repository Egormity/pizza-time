import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLoyaut from './ui/loyauts/AppLoyaut';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundsPage from './pages/RefundsPage';
import TermsPage from './pages/TermsPage';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 1 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition='bottom-left' />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLoyaut />}>
            <Route index element={<Navigate replace to={'HomePage'} />} />
            <Route path='HomePage' element={<HomePage />} />
            <Route path='MenuPage' element={<MenuPage />} />
            <Route path='BlogPage' element={<BlogPage />} />
            <Route path='AboutPage' element={<AboutPage />} />
            <Route path='ContactsPage' element={<ContactsPage />} />

            <Route path='CareersPage' element={<CareersPage />} />
            <Route path='PrivacyPage' element={<PrivacyPage />} />
            <Route path='RefundsPage' element={<RefundsPage />} />
            <Route path='TermsPage' element={<TermsPage />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
