import '../styles/globals.css'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  )
  
}

export default MyApp
