import '../styles/globals.css'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import NavMenu from '../components/NavMenu'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <LandingPage />
      <NavMenu />
    </>
  )
  
}

export default MyApp
