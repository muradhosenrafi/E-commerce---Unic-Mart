import Container from "../components/Container"
import SubHedding from "../components/SubHedding"
import Hedding from "../components/Hedding"
import Card from "../components/Card"
import Flex from "../components/Flex"
import prodecrt1 from "../assets/cardone.png"
import prodecrt2 from "../assets/kaybord.png"
import prodecrt3 from "../assets/monitor.png"
import prodecrt4 from "../assets/char.png"
import Button from "../components/Button"

const Todaysprod = () => {
  return (
 <section className="mb-40px pb-60px">
        <Container>
         <div className="border-b border-line">
        <SubHedding text="Today’s"/>
        <Hedding className="pt-6 pb-31px" text="Flash Sales"/>
        <Flex>
            <Card productimage={prodecrt1} rating="-40%" disprice="$160" producttitle="HAVIT HV-G92 Gamepad" price="$120" stock="(88)" className="" />
        <Card productimage={prodecrt2} rating="-35%" disprice="$1160" producttitle="AK-900 Wired Keyboard" price="$960" stock="(75)" className="" />
        <Card productimage={prodecrt3} rating="-30%" disprice="$400" producttitle="IPS LCD Gaming Monitor" price="$370" stock="(99)" className="" />
        <Card productimage={prodecrt4} rating="-25%" disprice="$400" producttitle="S-Series Comfort Chair " price="$375" stock="(99)" className="" />
        </Flex>
       <div className="py-60px text-center">
         <Button className="" text="View All Products"/>
       </div>
       </div>
    </Container>
 </section>
  )
}
 
export default Todaysprod