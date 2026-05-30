import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import loginimg from "../assets/login.png"
import Button from "../components/Button"
import Hedding from "../components/Hedding"
import { Link } from "react-router-dom"
import SingupButton from "../components/SingupButton"



const SingUp = () => {
  return (
     <section className="pt-60px pb-140px">
      <Container>
        <Flex>
          <div className="w-7/12">
          <Image src={loginimg} alt="login jpg"/>
          </div>
        <div className="w-5/12 items-center justify-end flex">
        <div className="w-370px h-[530px]">
          <Hedding text="Create an account"/>
          <p className="pt-24px text-16px font-poping font-normal">Enter your details below</p>
  
             <div className="flex flex-col  ">
                   <div className="border-b border-line my-40px">
            <input className="outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full" type="text" placeholder="Name" />
       </div>
           <div className="border-b border-line">
             <input className="w-full outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal" type="text" placeholder="Email or Phone Number" />
           </div>
       <div className="border-b border-line mt-40px">
            <input className="outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full" type="password" placeholder="Password" />
       </div>
             </div>
            <Flex className="justify-between flex-col items-center pt-40px">
           <Link to="/"><Button className="w-370px" text="Create Account"/></Link>
           <Link to="/login"><SingupButton className="mt-16px" text="Sign up with Google"/></Link>
<div className="flex gap-16px pt-[34px] ">
             <p className="text-16px font-poping font-normal">Already have account?</p>
           <Link to="/login"><p className="underline underline-offset-8 text-16px font-poping font-normal">Log in</p></Link>
</div>
          </Flex>
        </div>
        </div>
        </Flex>
      </Container>
    </section>
  )
}

export default SingUp