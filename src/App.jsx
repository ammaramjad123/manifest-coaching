import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/specialties/anxiety-depression" element={<AnxietyDepressionPage />} />
          <Route path="/specialties/trauma-ptsd" element={<TraumaPTSDPage />} />
          <Route path="/specialties/women-issues" element={<WomenIssuesPage />} />
          <Route path="/specialties/life-coaching" element={<LifeCoachingPage />} />
          <Route path="/specialties/immigration" element={<ImmigrationEvaluationsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/specialties/act" element={<ACTPage />} />
          <Route path="/specialties/dbt" element={<DBTPage />} />
          <Route path="/specialties/art" element={<ARTPage />} />
          <Route path="/specialties/inclusive-affirming-care" element={<InclusiveCarePage />} />
          <Route path="/specialties/safety-sensation" element={<SAFTPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;