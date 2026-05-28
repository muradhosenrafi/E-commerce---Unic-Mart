import { Link } from "react-router-dom"
import Image from "../components/Image"


const Sponsor = ({sponsorimg,className}) => {
  return (
    <div className={`pt-140px pb-70px ${className}`}>
       <Link to="/shop"> <Image src={sponsorimg} alt="sponsor jpg"/></Link>
    </div>
  )
}

export default Sponsor