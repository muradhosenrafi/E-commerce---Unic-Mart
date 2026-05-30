import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import loginimg from "../assets/login.png"
import Button from "../components/Button"
import Hedding from "../components/Hedding"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <section className="pt-60px pb-140px">
      <Container>
        <Flex>
          <div className="w-7/12">
          <Image src={loginimg} alt="login jpg"/>
          </div>
        <div className="w-5/12 items-center justify-end flex">
        <div className="w-370px h-326px">
          <Hedding text="Log in to Exclusive"/>
          <p className="pt-24px pb-48px text-16px font-poping font-normal">Enter your details below</p>
             <div className="flex flex-col  ">
           <div className="border-b border-line">
             <input className="w-full outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal" type="text" placeholder="Email or Phone Number" />
           </div>
       <div className="border-b border-line mt-40px">
            <input className="outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full" type="password" placeholder="Password" />
       </div>
             </div>
            <Flex className="justify-between items-center pt-40px">
           <Link to="/login"><Button text="LogIn"/></Link>
          <Link to="/singup"><p className="text-16px font-poping font-normal text-view">Forget Password?</p></Link>
          </Flex>
        </div>
        </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Login