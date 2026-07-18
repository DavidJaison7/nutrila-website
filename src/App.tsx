import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Manufacturing from './components/home/Manufacturing';
import HighlightStrip from './components/home/HighlightStrip';
import Products from './components/home/Products';
import Testimonials from './components/home/Testimonials';
import FAQs from './components/home/FAQs';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import ThirdPartyManufacturing from './pages/ThirdPartyManufacturing';
import PrivateLabel from './pages/PrivateLabel';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from './components/layout/ScrollToTopButton';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function LandingPage() {
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HighlightStrip />
      <Manufacturing />
      <Products />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Navbar /><Auth key="login" /></>} />
          <Route path="/register" element={<><Navbar /><Auth key="register" /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/services/third-party-manufacturing" element={<><Navbar /><ThirdPartyManufacturing /><Footer /></>} />
          <Route path="/services/private-label" element={<><Navbar /><PrivateLabel /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/privacy" element={<><Navbar /><Privacy /><Footer /></>} />
          <Route path="/terms" element={<><Navbar /><Terms /><Footer /></>} />
        </Routes>
        <ScrollToTopButton />
      </Router>
    </AuthProvider>
  );
}

export default App;
