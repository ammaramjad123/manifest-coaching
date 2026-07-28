import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AnxietyDepressionPage = lazy(() => import('./pages/AnxietyDepressionPage'));
const TraumaPTSDPage = lazy(() => import('./pages/TraumaPTSDPage'));
const WomenIssuesPage = lazy(() => import('./pages/WomenIssuesPage'));
const LifeCoachingPage = lazy(() => import('./pages/LifeCoachingPage'));
const ImmigrationEvaluationsPage = lazy(() => import('./pages/ImmigrationEvaluationsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ACTPage = lazy(() => import('./pages/ACTPage'));
const DBTPage = lazy(() => import('./pages/DBTPage'));
const ARTPage = lazy(() => import('./pages/ARTPage'));
const InclusiveCarePage = lazy(() => import('./pages/InclusiveCarePage'));
const SAFTPage = lazy(() => import('./pages/SAFTPage'));
const BARTerBalancePage = lazy(() => import('./pages/BARTerBalancePage'));
const ManifestMethodPage = lazy(() => import('./pages/ManifestMethodPage'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={null}>
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
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;