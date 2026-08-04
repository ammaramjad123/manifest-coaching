import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AnxietyDepressionPage from './pages/AnxietyDepressionPage';
import TraumaPTSDPage from './pages/TraumaPTSDPage';
import WomenIssuesPage from './pages/WomenIssuesPage';
import LifeCoachingPage from './pages/LifeCoachingPage';
import ImmigrationEvaluationsPage from './pages/ImmigrationEvaluationsPage';
import FAQPage from './pages/FAQPage';
import ACTPage from './pages/ACTPage';
import DBTPage from './pages/DBTPage';
import ARTPage from './pages/ARTPage';
import InclusiveCarePage from './pages/InclusiveCarePage';
import SAFTPage from './pages/SAFTPage';
import BARTerBalancePage from './pages/BARTerBalancePage';
import ManifestMethodPage from './pages/ManifestMethodPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/specialties/process" element={<AnxietyDepressionPage />} />
          {/* Old URL kept as a redirect so existing links/bookmarks still work */}
          <Route path="/specialties/anxiety-depression" element={<Navigate to="/specialties/process" replace />} />
          <Route path="/specialties/trauma-ptsd" element={<TraumaPTSDPage />} />
          <Route path="/specialties/women-issues" element={<WomenIssuesPage />} />
          <Route path="/specialties/life-coaching" element={<LifeCoachingPage />} />
          <Route path="/specialties/partnership" element={<ImmigrationEvaluationsPage />} />
          {/* Old URL kept as a redirect so existing links/bookmarks still work */}
          <Route path="/specialties/immigration" element={<Navigate to="/specialties/partnership" replace />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/specialties/act" element={<ACTPage />} />
          <Route path="/specialties/dbt" element={<DBTPage />} />
          <Route path="/specialties/art" element={<ARTPage />} />
          <Route path="/specialties/inclusive-affirming-care" element={<InclusiveCarePage />} />
          <Route path="/specialties/safety-sensation" element={<SAFTPage />} />
          <Route path="/specialties/barter-balance" element={<BARTerBalancePage />} />
          <Route path="/specialties/manifest-method" element={<ManifestMethodPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
