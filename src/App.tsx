import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLoyaut from './pages/AppLoyaut';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
            <Route path='ContactPage' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
