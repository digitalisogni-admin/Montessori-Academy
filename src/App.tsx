/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AccessibilityMenu from './components/AccessibilityMenu';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import LiquidBackground from './components/LiquidBackground';
import { AnimatePresence, motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

// Lazy load pages for code splitting and better initial load performance
const Home = lazy(() => import('./pages/Home'));
const SubjectPage = lazy(() => import('./pages/Subject'));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Resources = lazy(() => import('./pages/Resources'));
const Pedagogy = lazy(() => import('./pages/Pedagogy'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <Loader2 className="w-8 h-8 animate-spin text-brand-text/50" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Home />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/ressources"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Resources />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/pedagogie"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Pedagogy />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Contact />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/legal"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Legal />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/enseignement/:id"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <SubjectPage />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="/student"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <StudentDashboard />
                </motion.div>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <NotFound />
                </motion.div>
              </Suspense>
            }
          />
        </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="relative min-h-screen bg-transparent text-brand-text font-sans transition-colors duration-300 flex flex-col">
            <LiquidBackground />
            <ScrollProgressBar />
            <Navigation />
            <div className="flex-1">
              <AnimatedRoutes />
            </div>
            <Footer />
            <ChatWidget />
            <AccessibilityMenu />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
