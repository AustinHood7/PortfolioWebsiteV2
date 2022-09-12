import '../styles/globals.css'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import NavMenu from '../components/NavMenu'
import VerticalEmail from '../components/VerticalEmail'
import AboutMe from '../components/AboutMe'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <LandingPage />
      <NavMenu />
      <VerticalEmail />
      <AboutMe />
    </>
  )
  
}

export default MyApp
