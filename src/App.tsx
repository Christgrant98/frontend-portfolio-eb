import './App.css'
import './fonts.css'
import TopBar from './core/common/components/ui/TopBar'
import Hero from './features/home/components/ui/Hero'
import NextSection from './features/home/components/ui/NextSection'
import LetsContact from './features/home/components/ui/LetsContact'
import Footer from './core/common/components/ui/Footer'
import pikachuImage from './assets/pikachu_test.JPG'
  
function App() {
  return (
    <>
      <TopBar title="PHARUS PHOTOGRAPHY" />
      
      {/* Contenido principal */}
      <main>
        <Hero 
          title="PHARUS PHOTOGRAPHY"
          subtitle="Histoires d'amour illuminées par l'art"
          imageUrl={pikachuImage}
          imageAlt="Pikachu surfing - Test image"
        />
        
        <NextSection 
          title="MEANINGFUL MEMORIES THROUGH AUTHENTIC AND PROFESSIONAL IMAGES"
          description="I capture unique moments from the love of weddings to the essence of a product, the warmth of a family, or the strength of an individual portrait. My photography adapts to every story, brand, or emotion you want to share."
          buttonText="Learn More"
          // imageUrl="ruta-de-tu-imagen.jpg" // Descomenta cuando tengas la imagen
        />
        
        <LetsContact 
          title="Let's Connect"
          description="Let's talk and bring your vision to life — every great story begins with a conversation."
          buttonText="Contact Me"
          imageUrl={pikachuImage}
          imageAlt="Pikachu surfing - Contact background"
        />
      </main>
      
      <Footer 
        title="PHARUS PHOTOGRAPHY"
        contactText="Contact"
        showSocialIcons={true}
      />
    </>
  )
}

export default App
