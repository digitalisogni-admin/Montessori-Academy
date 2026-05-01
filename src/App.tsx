/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SubjectPage from './pages/Subject';
import StudentDashboard from './pages/StudentDashboard';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';
import Pedagogy from './pages/Pedagogy';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AccessibilityMenu from './components/AccessibilityMenu';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import LiquidBackground from './components/LiquidBackground';
import { AnimatePresence, motion } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error AnimatePresence needs key to track route changes */}
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/ressources" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Resources />
            </motion.div>
          } 
        />
        <Route 
          path="/pedagogie" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Pedagogy />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Contact />
            </motion.div>
          } 
        />
        <Route 
          path="/legal" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Legal />
            </motion.div>
          } 
        />
        <Route 
          path="/enseignement/:id" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SubjectPage />
            </motion.div>
          } 
        />
        <Route 
          path="/student" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <StudentDashboard />
            </motion.div>
          } 
        />
        <Route 
          path="*" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <NotFound />
            </motion.div>
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
