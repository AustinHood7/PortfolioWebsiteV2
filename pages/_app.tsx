import '../styles/globals.css'
import Navbar2 from '../components/Navbar2'
import LandingPage from '../components/LandingPage'
import NavMenu from '../components/NavMenu'
import VerticalEmail from '../components/VerticalEmail'
import AboutMe from '../components/AboutMe'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar2 />
      <LandingPage />
      <NavMenu />
      <VerticalEmail />
      <AboutMe />
    </>
  )
  
}

export default MyApp
