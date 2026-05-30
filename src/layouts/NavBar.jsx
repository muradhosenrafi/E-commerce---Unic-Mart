import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import ListItem from "../components/ListItem"
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react"
import { AiTwotoneShopping } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";






const NavBar = () => {
    let [dorpdown,setDropdown]=useState(false)

  return (
   <nav className="pt-10 pb-4 border-line border">
    <Container>
        <Flex>
            <div className="w-3/12 ">
            <div className="w-118px h-24px">
                <Link to="/"><Image src={logo} alt="logo"/></Link>
            </div>
            </div>

            <div className="w-5/12">
            <ul className="flex gap-x-48px">
                <Link to="/"><ListItem className="" text="Home"/></Link>
                <Link to="/contact"><ListItem className="" text="Contact"/></Link>
                <Link to="/about"><ListItem className="" text="About"/></Link>
                <Link to="/singup"><ListItem className="" text="Sign Up"/></Link>
            </ul>
            </div>
            <div className="w-4/12 relative pl-10">
          <Flex className="items-center justify-between">
              <div className="relative w-243px bg-box">
              <input className="border-none outline-none py-1 px-4 text-poping placeholder:text-xs placeholder:font-normal  " type="text" placeholder="What are you looking for?"/>
           <IoSearch className="absolute text-base top-8px right-12px" />

      </div>
         <FaRegHeart className="text-lg" />
         <MdOutlineShoppingCart className="text-lg" />
       <div onClick={()=>setDropdown(!dorpdown)} className="  w-[32px] hover:text-secondary cursor-pointer h-[32px] relative rounded-full duration-300 hover:bg-line">
          <AiOutlineUser className="absolute top-[6px] left-[8px]" />
       </div>
      {
        dorpdown && 

        <div className="w-[225px] h-[208px] rounded-4px z-50 absolute top-10 right-0  bg-black/40 backdrop-blur-xl">
        <ul className="py-4 pl-5 text-white ">

            
       <div className="flex items-center gap-2">
        <AiOutlineUser className="text-2xl"/>
            <p className="font-poping text-xs font-normal">Manage My Account</p>
        </div>

       <div className="flex py-2 items-center gap-2">
        <AiTwotoneShopping className="text-2xl"/>
            <p className="font-poping text-xs font-normal">My Order</p>
        </div>

       <div className="flex items-center gap-2">
        <MdOutlineCancel className="text-2xl"/>
            <p className="font-poping text-xs font-normal">My Cancellations</p>
        </div>

       <div className="flex py-2 items-center gap-2">
       <IoStarOutline className="text-2xl"/>
            <p className="font-poping text-xs font-normal">My Reviews</p>
        </div>

       <div className="flex items-center gap-2">
      <TbLogout2 className="text-2xl"/>
           <Link to="/singup"> <p className="font-poping text-xs font-normal">Logout</p></Link>
        </div>

        </ul>
       </div>
      }
          </Flex>
            </div>
        </Flex>
    </Container>
   </nav> 
  )
}

export default NavBar