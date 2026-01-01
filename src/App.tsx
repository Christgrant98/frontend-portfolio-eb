import './App.css'
import './fonts.css'
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

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <TopBar title="PHARUS PHOTOGRAPHY" showBrand={!isHomePage} />

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
        title="PHARUS PHOTOGRAPHY"
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
