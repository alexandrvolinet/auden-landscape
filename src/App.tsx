import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const path = redirect.replace(/^\/auden-landscape/, '') || '/';
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <HelmetProvider>
      <BrowserRouter basename="/auden-landscape">
        <RedirectHandler />
        <ScrollToTop />
        <Helmet>
          <title>Auden Landscape Architecture | Premium Garden & Park Design Studio</title>
          <meta
            name="description"
            content="Auden Landscape Architecture crafts bespoke residential gardens, public parks, and architectural landscapes. Specializing in natural stone, water features, and spatial harmony since 2014."
          />
        </Helmet>
        <ErrorBoundary>
          <Routes>
            <Route
              element={
                <MainLayout
                  isQuoteOpen={isQuoteOpen}
                  onOpenQuote={handleOpenQuote}
                  onCloseQuote={handleCloseQuote}
                />
              }
            >
              <Route index element={<Home onOpenQuote={handleOpenQuote} />} />
              <Route path="projects/:id" element={<ProjectPage onOpenQuote={handleOpenQuote} />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
