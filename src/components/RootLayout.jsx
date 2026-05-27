import { Outlet } from "react-router-dom"
import NavBar from "../layouts/NavBar"
import Offer from "../layouts/Offer"
import Footer from "../layouts/Footer"

const RootLayout = () => {
  return (
    <div>
        <Offer/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout