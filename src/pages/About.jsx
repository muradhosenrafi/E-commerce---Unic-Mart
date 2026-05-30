
import Container from './../components/Container';
import { Link } from "react-router-dom";
import Image from '../components/Image';
import dongge from "../assets/dongge.png"
import Flex from '../components/Flex';
import Hedding from "../components/Hedding"
import CategoriesCard from '../components/CategoriesCard';
import sels1 from "../assets/service1.png"
import sels2 from "../assets/service2.png"
import sels3 from "../assets/service3.png"
import sels4 from "../assets/service4.png"
import pounder1 from "../assets/madam2.png"
import pounder2 from "../assets/madam1.png"
import pounder3 from "../assets/sr.png"
import ServiceCard from "../components/ServiceCard"
import icon2 from "../assets/icon1.png"
import icon1 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"





import Pounder from '../components/Pounder';




const About = () => {
  return (
    <section className='pt-80px'>
      <Container>
        <div className="flex pb-80px gap-2">
          <Link to="/">
            <h1 className="font-poping font-normal text-xs text-text">
              Home
            </h1>
          </Link>

          <span className="font-poping font-normal text-xs text-black">
            / About
          </span>
        </div>
<Flex>
             <div className='items-start justify-center flex'>
              <div className='w-6/12 h-[609px] flex flex-col items-start'>
              <div className=''>
                             <Hedding className="!text-54px" text="Our Story"/>
              <p className='w-[530px] my-5 text-base font-poping leading-7 font-normal'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className='w-[505px]  text-base font-poping leading-7 font-normal'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
              </div>
             </div>
             <div className='w-6/12 '>
              <Image src={dongge}/>
             </div>
             </div>    
</Flex>
 <Flex className="justify-between">
   <CategoriesCard classchang="!w-[270px] !h-[230px]" className="!font-inter !font-bold !text-32px" catagoryimge={sels1} text="10.5k" title="Sallers active our site"/>
  <CategoriesCard classchang="!w-[270px] !h-[230px]" className="!font-inter !font-bold !text-32px" catagoryimge={sels2} text="33k" title="Mopnthly Produduct Sale"/>
  <CategoriesCard classchang="!w-[270px] !h-[230px]" className="!font-inter !font-bold !text-32px" catagoryimge={sels3} text="45.5k" title="Customer active in our site"/>
  <CategoriesCard classchang="!w-[270px] !h-[230px]" className="!font-inter !font-bold !text-32px" catagoryimge={sels4} text="25k" title="Anual gross sale in our site"/>

 </Flex>
<Flex className="justify-between py-[140px]">
   <Pounder pounderimag={pounder1}/>
 <Pounder pounderimag={pounder2}/>
 <Pounder pounderimag={pounder3}/>

</Flex>
 <Flex className="justify-center pb-[140px] items-center gap-6">
                 <ServiceCard 
             iconimg={icon1} 
             hedin="FREE AND FAST DELIVERY" 
             title="Free delivery for all orders over $140" />
             
             <ServiceCard 
             iconimg={icon2} 
             hedin="24/7 CUSTOMER SERVICE" 
             title="Friendly 24/7 customer support" />

             <ServiceCard 
             iconimg={icon3} 
             hedin="MONEY BACK GUARANTEE" 
             title="We reurn money within 30 days" />
            </Flex>

      </Container>
    </section>
  )
}

export default About