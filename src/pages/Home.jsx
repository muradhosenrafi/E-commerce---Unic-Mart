

import Banner from '../layouts/Banner'
import BustProducts from '../layouts/BustProducts'
import Catagory from '../layouts/Catagory'
import NewArrival from '../layouts/NewArrival'
import OurProducts from '../layouts/OurProducts'
import Todaysprod from '../layouts/Todaysprod'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Todaysprod/>
      <Catagory/>
      <BustProducts/>
      <OurProducts/>
      <NewArrival/>
    </div>
  )
}

export default Home