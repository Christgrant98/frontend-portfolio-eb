import './App.css'
import './fonts.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './core/contexts/AppContext'
import TopBar from './core/common/ui/components/TopBar'
import HomePage from './features/home/ui/pages/HomePage'
import AboutUsPage from './features/about_us/ui/pages/AboutUsPage'
import ServicesPage from './features/services/ui/pages/ServicesPage'
import PortfolioPage from './features/portfolio/ui/pages/PortfolioPage'
import Footer from './core/common/ui/components/Footer'
import WeddingPage from './features/services/ui/pages/WeddingPage'
import PeopleStudioPortraitsPage from './features/services/ui/pages/PeopleStudioPortraitsPage'
import ProductPhotographyPage from './features/services/ui/pages/ProductPhotographyPage'
import EventsPage from './features/services/ui/pages/EventsPage'
import { APP_CONSTANTS } from './core/constants/appConstants'
import { preloadPortfolioImages } from './core/utils/preloadPortfolioImages'
import { PORTFOLIO_DATA } from './features/home/constants/portfolioData'

function preloadPortfolio(): void {
  preloadPortfolioImages(PORTFOLIO_DATA.map((item) => item.img))
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handle = window.requestIdleCallback
      ? window.requestIdleCallback(() => preloadPortfolio(), { timeout: 2000 })
      : window.setTimeout(preloadPortfolio, 300);
    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(handle as number);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, []);

  return (
    <div className="App">
      <TopBar title={APP_CONSTANTS.title} showBrand={!isHomePage} onPortfolioLinkHover={preloadPortfolio} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services/weddings" element={<WeddingPage />} />
            <Route path="/people-studio-portraits" element={<PeopleStudioPortraitsPage />} />
            <Route path="/product-photography" element={<ProductPhotographyPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
          
      <Footer 
        title={APP_CONSTANTS.title}
        showSocialIcons={true}
      />
    </div>
  );
}
  
function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  )
}

export default App
