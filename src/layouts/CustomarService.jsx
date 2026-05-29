import Container from "../components/Container"
import ServiceCard from "../components/ServiceCard"
import icon2 from "../assets/icon1.png"
import icon1 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import Flex from "../components/Flex"


const CustomarService = () => {
  return (
    <section className="py-140px">
        <Container>
            <Flex className="justify-center items-center gap-6">
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

export default CustomarService