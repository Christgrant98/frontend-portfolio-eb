import './App.css'
import './fonts.css'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
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
          imageAlt="Pikachu surfing - Temporary hero image"
        />
      </main>
    </>
  )
}

export default App
