import Image from "../components/Image";
import Container from './Container';
import Flex from "../components/Flex"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Card = ({productimage,rating,disprice,producttitle,price,stock,className}) => {
  return (
    <Container>
<div className={`w-270px group ${className}`}>
 <Flex className="relative w-full h-250px overflow-hidden bg-card rounded-4px justify-center items-center">
   <Image src={productimage} alt="Card image png one"/>
   <p className="absolute top-12px left-12px bg-view py-2 px-12px font-poping text-xs font-normal rounded-4px text-secondary">{rating}</p>
   <ul className="absolute text-lg top-12px right-12px bg-white w-34px h-34px flex justify-center items-center rounded-full "><FaRegHeart /></ul>
   <ul className="absolute text-lg top-55px right-12px bg-white w-34px h-34px flex justify-center items-center rounded-full "><MdOutlineRemoveRedEye /></ul>
   <div className="absolute -bottom-40px group-hover:bottom-0 left-0 duration-300  rounded-b-4px cursor-pointer bg-black py-2 font-poping text-16px font-medium text-center w-full text-secondary"><p>Add To Cart</p></div>
 </Flex>
 <h4 className="text-base pt-4 text-black font-poping font-medium ">{producttitle}</h4>
 <p className="text-base py-8px text-view font-poping font-medium">{price}<span className=" font-popingtext-base text-[#00000080] font-medium"><del className="text-[#00000080]">{disprice}</del></span></p>
<Flex className="items-center text-sm gap-x-2">
 <ul className="flex">
   <FaStar className="text-[#FFAD33]"/>
  <FaStar className="text-[#FFAD33]"/>
  <FaStar className="text-[#FFAD33]"/>
  <FaStar className="text-[#FFAD33]"/>
  <FaStar className="text-[#FFAD33]"/>
 </ul>
  <p className="text-base text-[#00000080] font-poping font-normal">{stock}</p>
</Flex>

</div>
    </Container>
  )
}

export default Card