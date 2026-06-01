

import Banner from '../layouts/Banner'
import BustProducts from '../layouts/BustProducts'
import Catagory from '../layouts/Catagory'
import CustomarService from '../layouts/CustomarService'
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
      <CustomarService/>

    </div>
  )
}

export default Home