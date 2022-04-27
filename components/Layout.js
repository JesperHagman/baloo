import Navbar from "./Navbar"
import Footer from "./Footer"
import Slider from "./Slider"

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
        <Slider />
        <Footer />
    </>
  )
}

export default Layout