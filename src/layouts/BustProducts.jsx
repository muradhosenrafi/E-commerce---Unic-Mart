import Container from "../components/Container"
import SubHedding from './../components/SubHedding';
import Hedding from "./../components/Hedding";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";
import Card from "../components/Card";

import bustprod1 from "../assets/raincort.png"
import bustprod2 from "../assets/bag.png"
import bustprod3 from "../assets/grafixcaard.png"
import bustprod4 from "../assets/bookself.png"
import Sponsor from "./Sponsor";
import sponsorimag from "../assets/sponsor.png"

const BustProducts = () => {
  return (
<section>
    <Container>
     <SubHedding text="This Month"/>

<div className="pt-20px pb-60px flex justify-between">
         <Hedding text="Best Selling Products"/>
         <Link to="/shop"><Button text="View All"/></Link>
</div>
<Flex>
  <Card
  productimage={bustprod1}
type={true}
  rating=""
  disprice="$360" 
  producttitle="The north coat"
  price="$260"
  stock="(65)"
  className=""
  />

  <Card
  type={true}
  productimage={bustprod2}
  rating="Best"
  disprice="$1160" 
  producttitle="Gucci duffle bag"
  price="$960"
  stock="(65)"
  className=""
  />

  <Card
  type={true}
  productimage={bustprod3}
  rating="Best"
  disprice="$170" 
  producttitle="RGB liquid CPU Cooler"
  price="$160"
  stock="(65)"
  className=""
  />

  <Card
  type={true}
  productimage={bustprod4}
  rating="Best"
  disprice="" 
  producttitle="Small BookSelf"
  price="$360"
  stock="(65)"
  className=""
  />

</Flex>
<Sponsor className="" sponsorimg={sponsorimag}/>
    </Container>
</section>
  )
}

export default BustProducts