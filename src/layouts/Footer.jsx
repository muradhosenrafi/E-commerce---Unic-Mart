import Container from "../components/Container"
import Flex from "../components/Flex"
import { Link } from "react-router-dom"
import Image from "../components/Image"
import Whitelogo from "../assets/whitelogo.png"
import { RiSendPlaneFill } from "react-icons/ri";
import ListItem from "../components/ListItem"
import QrCode from "../assets/qrcodeap.png"
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-black pt-80px pb-6px w-full">
    <Container>
        <Flex className="justify-between pb-[60px] ">
            <div className="">
                <div className="w-118px h-24px">
                <Link to="/Home"><Image src={Whitelogo} alt="logo"/></Link>
            </div>
            <h2 className="text-secondary py-24px font-medium font-poping text-20px">Subscribe</h2>
            <p className="text-secondary  font-normal font-poping text-16px">Get 10% off your first order</p>
            
     
             <div className="relative w-217px mt-4">
                          <input className="border outline-none py-3 px-4 placeholder:text-secondary text-secondary text-poping placeholder:text-xs placeholder:font-normal  " type="email" placeholder="Enter your email"/>
                   <RiSendPlaneFill className="text-secondary absolute text-2xl top-1/2 right-12px -translate-y-1/2" />
            </div>
          </div> 

            <div className=" font-poping font-normal text-16px text-secondary">
             <h2 className="font-poping font-medium text-20px pb-24px text-secondary">Support</h2>
             <h3 className="w-175px">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
             <h4 className="py-16px">exclusive@gmail.com</h4>
             <p>+88015-88888-9999</p>
            </div>
            <div className="">
            <h3 className="font-poping font-medium text-20px pb-24px text-secondary">Account</h3>
            <ul className="font-poping font-normal text-16px text-secondary">
                <ListItem className="" text="My Account"/>
                <ListItem className="py-16px" text="Login / Register"/>
                <ListItem className="" text="Cart"/>
                <ListItem className="py-16px" text="Wishlist"/>
                <ListItem className="" text="Shop"/>
            </ul>
            </div>
            <div className="">
            <h4 className="font-poping font-medium text-20px pb-24px text-secondary">Quick Link</h4>
                   <ul className="font-poping font-normal text-16px text-secondary">
                <ListItem className="" text="Privacy Policy"/>
                <ListItem className="py-16px" text="Terms Of Use"/>
                <ListItem className="" text="FAQ"/>
                <ListItem className="pt-16px" text="Contact"/>
            </ul>
            </div>
            <div className="">
            <h5 className="font-poping font-medium text-20px text-secondary pb-24px">Download App</h5>
            <p className="font-poping font-normal text-12px text-secondary pb-2">Save $3 with App New User Only</p>
            <Image src={QrCode} alt="QR code scen app"/>
            <Flex className="pt-24px gap-5">
               <RiFacebookLine className="text-24px text-secondary" />
              <CiTwitter className="text-24px text-secondary" />
               <AiOutlineInstagram className="text-24px text-secondary"/>
                 <RiLinkedinLine className="text-24px text-secondary"/>

               
            </Flex>
            </div>
        </Flex> 
    </Container>
<Flex className="text-copy gap-2 items-center justify-center border-t border-copy py-24px">
    <FaRegCopyright/>
    <p>Copyright Rimel 2022. All right reserved</p>
</Flex>
   </footer>
  )
}

export default Footer