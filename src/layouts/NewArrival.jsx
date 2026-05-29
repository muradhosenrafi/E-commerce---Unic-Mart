import Container from "../components/Container"
import SubHedding from './../components/SubHedding';
import Hedding from "../components/Hedding"
import Image from "../components/Image"
import new1 from "../assets/ps5.png"
import new2 from "../assets/capwomen.png"
import new3 from "../assets/sowondbox.png"
import new4 from "../assets/farfium.png"
import { Link } from "react-router-dom";


const NewArrival = () => {
  return (
    <section>
    <Container>
        <SubHedding text="Featured"/>
        <Hedding className="pt-20px pb-60px" text="New Arrival"/>
        <div className="one">
        <div className="tow">
        <Link to="/shop">
            <Image src={new1}/>
          </Link>
          </div>

          <div className="tow">
         <Link to="/shop">
            <Image src={new2}/>
         </Link>
          </div>

          <div className="tow">
         <Link to="/shop">
            <Image src={new3}/>
         </Link>
          </div>
         
          <div className="tow">
        <Link to="/shop">
            <Image src={new4}/>
        </Link>
          </div>
    </div>
    </Container>
    </section>

  )
}

export default NewArrival