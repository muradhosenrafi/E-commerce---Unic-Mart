import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import ListItem from "../components/ListItem"
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";




const NavBar = () => {
  return (
   <nav className="pt-10 pb-4">
    <Container>
        <Flex>
            <div className="w-3/12 ">
            <div className="w-118px h-24px">
                <Link to="/Home"><Image src={logo} alt="logo"/></Link>
            </div>
            </div>

            <div className="w-5/12">
            <ul className="flex gap-x-48px">
                <ListItem className="" text="Home"/>
                <ListItem className="" text="Contact"/>
                <ListItem className="" text="About"/>
                <ListItem className="" text="Sign Up"/>
            </ul>
            </div>
            <div className="w-4/12 pl-20">
          <Flex className="items-center justify-between">
              <div className="relative w-243px bg-box">
              <input className="border-none outline-none py-1 px-4 text-poping placeholder:text-xs placeholder:font-normal  " type="text" placeholder="What are you looking for?"/>
           <IoSearch className="absolute text-base top-8px right-12px" />

      </div>
         <FaRegHeart className="text-lg" />
         <MdOutlineShoppingCart className="text-lg" />

          </Flex>

            </div>
        </Flex>
    </Container>
   </nav> 
  )
}

export default NavBar