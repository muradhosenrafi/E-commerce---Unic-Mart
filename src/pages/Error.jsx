
import Container from "../components/Container"
import Hedding from "../components/Hedding"
import Button from './../components/Button';
import { Link } from "react-router-dom"



const Error = () => {
  return (
   <section>
    <Container>
    <div className="flex pt-80px gap-2">
      <Link to="/"> <h1 className="font-poping font-normal text-xs text-text">Home </h1></Link><span className="font-poping font-normal text-xs text-black"> / 404 Error</span>
    </div>

         <div className="flex justify-center items-center mt-140px flex-col">
           <Hedding className="text-[110px]" text="404 Not Found"/>
           <p className="font-normal text-16px font-poping pt-40px pb-80px ">Your visited page not found. You may go home page.</p>
           <Link to="/">
           <Button className="mb-140px" text="Back to home page"/>
           </Link>
         </div>
    </Container>
   </section>
  )
}

export default Error