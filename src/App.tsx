import './App.css'
import './fonts.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './core/common/ui/components/TopBar'
import HomePage from './features/home/ui/pages/HomePage'
import AboutUsPage from './features/about_us/ui/pages/AboutUsPage'
import ServicesPage from './features/services/ui/pages/ServicesPage'
import Footer from './core/common/ui/components/Footer'
import WeddingPage from './features/services/ui/pages/WeddingPage'
  
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar title="PHARUS PHOTOGRAPHY" />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/weddings" element={<WeddingPage />} />
        </Routes>
        
        <Footer 
          title="PHARUS PHOTOGRAPHY"
          contactText="Contact"
          showSocialIcons={true}
        />
      </div>
    </Router>
  )
}

export default App
