import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { CaseStudiesListPage } from './pages/CaseStudiesListPage';
import { CaseStudyFullPage } from './pages/CaseStudyFullPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ContactPage } from './pages/ContactPage';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies"
          element={
            <PageTransition>
              <CaseStudiesListPage />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies/:slug"
          element={
            <PageTransition>
              <CaseStudyFullPage />
            </PageTransition>
          }
        />
        <Route
          path="/technology"
          element={
            <PageTransition>
              <TechnologyPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
