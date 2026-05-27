import Flex from "../components/Flex"
import Container from "../components/Container"
import { Link } from "react-router-dom"
import Language from "../components/Language"

const Offer = () => {
  return (
  <section className="bg-black py-12px">
<Container>
    <Flex className="justify-between">  
<div className="justify-center mx-auto">
  <Flex>
  <p className="font-normal font-poping text-secondary text-14px ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
<Link to="jania"><span className=" ml-5 cursor-pointer font-semibold font-poping text-secondary text-14px"><u>ShopNow</u></span></Link>
</Flex>
</div>
<Language/>
    </Flex>
</Container>
  </section>
  )
}

export default Offer