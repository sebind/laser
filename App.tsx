import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Research = lazy(() => import('./pages/Research'));
const Publications = lazy(() => import('./pages/Publications'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const D3Mat = lazy(() => import('./pages/D3Mat'));
const Opportunities = lazy(() => import('./pages/Opportunities'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

/**
 * B9: Skeleton loader shaped like the real page layout — never a circular spinner
 */
const PageSkeleton: React.FC = () => (
  <div
    role="status"
    aria-label="Loading page content"
    className="py-16 px-4 sm:px-8 max-w-[1200px] mx-auto flex flex-col gap-8"
  >
    <div className="flex flex-col gap-4 max-w-[680px]">
      <div className="h-12 w-3/4 rounded-xl bg-surface-secondary animate-pulse" />
      <div className="h-12 w-1/2 rounded-xl bg-surface-secondary animate-pulse" />
      <div className="h-6 w-full rounded-lg bg-surface-subtle animate-pulse mt-2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
      <div className="md:col-span-7 h-64 rounded-2xl bg-surface-secondary animate-pulse" />
      <div className="md:col-span-5 h-64 rounded-2xl bg-surface-subtle animate-pulse" />
    </div>
  </div>
);

const rawBase = import.meta.env.BASE_URL || '/';
const routerBasename = rawBase === '/' ? '/' : rawBase.replace(/\/$/, '');

const App: React.FC = () => {
  return (
    <Router basename={routerBasename}>
      <ScrollManager />
      <div className="min-h-dvh flex flex-col bg-surface-primary text-ink-primary">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/d3mat" element={<D3Mat />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Legal mode="privacy" />} />
              <Route path="/terms" element={<Legal mode="terms" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
