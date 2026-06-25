import { useSelector } from "react-redux";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import gaming from "../assets/gaming2.png";
import gaming1 from "../assets/gaming3.png";
import gaming2 from "../assets/gamming4.png";
import gaming3 from "../assets/gamming.png";
import gamin from "../assets/gamig.png";
import { IoStarSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import Button from "../components/Button"
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa6";


const Cartoption = () => {
  const ona = useSelector((state) => state.breadCrumb.previouseValue);
  return (
    <section>
      <Container>
        <Flex className="py-80px gap-2">
          <h1 className="font-poping font-normal text-xs text-text">
            <Link to={ona == "Home" ? "/" : `/${ona}`}>{ona}</Link>
          </h1>
          <span className="font-poping font-normal text-xs text-black">
            / Havic HV G-92 Gamepad
          </span>
        </Flex>
        <Flex className="">
          <div className="w-7/12 flex gap-5">
            <div className=" flex flex-col justify-center items-center">
              <Image className="" src={gaming} alt="gaming png" />
              <Image className="my-3" src={gaming1} alt="gaming png" />
              <Image className="" src={gaming2} alt="gaming png" />
              <Image className=" my-3" src={gaming3} alt="gaming png" />
            </div>
            <div className="w-full">
              <Image className="" src={gamin} alt="gaming png" />
            </div>
          </div>
          <div className="w-5/12">
            <h1 className="">Havic HV G-92 Gamepad</h1>
            <div className="flex justify-start items-center">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <h2>
                {" "}
                (150 Reviews) | <span> In Stock </span>
              </h2>
            </div>
            <h5>$192.00</h5>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div></div>
            <div className="space-y-8">

  {/* Colors */}
  <div className="flex items-center gap-8">
    <h2 className="text-3xl font-medium">Colours:</h2>

    <div className="flex items-center gap-4">
      <button className="w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center">
        <span className="w-5 h-5 rounded-full bg-sky-300"></span>
      </button>

      <button className="w-8 h-8 rounded-full bg-red-400"></button>
    </div>
  </div>

  {/* Size */}
  <div className="flex items-center gap-8">
    <h2 className="text-3xl font-medium">Size:</h2>

    <div className="flex gap-4">
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          className={`w-16 h-16 rounded border text-2xl font-semibold transition
            ${
              size === "M"
                ? "bg-red-500 text-white border-red-500"
                : "border-gray-400 hover:border-red-500"
            }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>

  {/* Quantity + Buy */}
  <div className="flex items-center gap-8">

    {/* Quantity */}
    <div className="flex border border-gray-400 rounded overflow-hidden">

      <button className="w-20 h-20 flex justify-center items-center border-r border-gray-400 hover:bg-gray-100">
        <FaMinus className="text-2xl" />
      </button>

      <div className="w-24 h-20 flex justify-center items-center text-3xl font-semibold">
        2
      </div>

      <button className="w-20 h-20 flex justify-center items-center bg-red-500 text-white hover:bg-red-600">
        <FaPlus className="text-2xl" />
      </button>

    </div>

    {/* Buy Button */}
    <button className="w-[380px] h-20 bg-red-500 text-white text-3xl font-medium rounded hover:bg-red-600 transition">
      Buy Now
    </button>

    {/* Wishlist */}
    <button className="w-20 h-20 border border-gray-400 rounded flex justify-center items-center hover:border-red-500">
      <FaRegHeart className="text-4xl" />
    </button>

  </div>

</div>

         <div className="w-[400px] border border-line rounded-md overflow-hidden">

  {/* Free Delivery */} 
  <div className="flex items-start gap-4 p-5">
    <TbTruckDelivery className="text-4xl mt-1" />

    <div>
      <h2 className="text-[22px] font-semibold text-black">
        Free Delivery
      </h2>

      <p className="text-sm underline mt-2 cursor-pointer">
        Enter your postal code for Delivery Availability
      </p>
    </div>
  </div>

  {/* Divider */}
  <div className="h-[1px] bg-line"></div>

  {/* Return Delivery */}
  <div className="flex items-start gap-4 p-5">
    <HiArrowPathRoundedSquare className="text-4xl mt-1" />

    <div>
      <h2 className="text-[22px] font-semibold text-black">
        Return Delivery
      </h2>

      <p className="text-sm mt-2">
        Free 30 Days Delivery Returns.
        <span className="underline cursor-pointer ml-1">
          Details
        </span>
      </p>
    </div>
  </div>

</div>
            
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cartoption;
