
import Image from '../components/Image';
import Hedding from './Hedding';

import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";

const Pounder = ({pounderimag,className}) => {
  return (
  
    <div className={` ${className}`}>
       <Image className="w-[370px] h-[430px]" src={pounderimag}/>
       <Hedding className="mt-31px" text="Tom Cruise"/>
       <p className='font-normal mb-16px text-base font-poping'>Founder & Chairman</p>
                  <div className='flex gap-3'>
                        <CiTwitter className="text-24px text-black" />
                      <AiOutlineInstagram className="text-24px text-black"/>
                        <RiLinkedinLine className="text-24px text-black"/>
       
                  </div>
    </div>

  )
}

export default Pounder