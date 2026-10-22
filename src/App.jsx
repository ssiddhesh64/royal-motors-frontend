import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import './index.css';
import Footer from './pages/Footer';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import ScrollToTop from './components/ScrollToTop';
import MockTest from './pages/MockTest';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import DocumentChecklist from './pages/DocumentChecklist';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
  useDocumentTitle();
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-3 font-semibold text-blue-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <main id="main-content" tabIndex="-1" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services isPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/documents" element={<DocumentChecklist />} />
          <Route path="/mocktest" element={<MockTest />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
