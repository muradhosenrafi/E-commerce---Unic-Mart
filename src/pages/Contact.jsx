import { Link } from "react-router-dom"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import logo1 from "../assets/icons-phone.png"
import logo2 from "../assets/icons-mail.png"
import Button from "../components/Button"

const Contact = () => {
  return (
 <section className="pb-140px pt-80px">
  <Container>
    <div className="flex pb-80px gap-2">
      <Link to="/"> <h1 className="font-poping font-normal text-xs text-text">Home </h1></Link><span className="font-poping font-normal text-xs text-black">/ Cantact</span>
    </div>
    <Flex>

 
  <div className="w-4/12 "> 

 <div className="w-[340px] h-[457px] shadow py-40px pl-31px shadow-line">
<div className="flex justify-start items-center gap-4">
  <Image src={logo1} alt="phone jpg"/>
<h4 className="font-poping font-medium text-16px">Call To Us</h4>
</div>
<p className="font-poping text-xs font-normal mt-24px mb-16px">We are available 24/7, 7 days a week.</p>
<p className="font-poping text-xs font-normal">Phone: +8801611112222</p>


  <div className="w-[270px] h-[1px] bg-black my-[32px]"></div>

<Flex className="flex justify-start items-center gap-4">
  <Image src={logo2} alt="mail jpg"/>
<h3 className="font-poping font-medium text-16px">Write To US</h3>
</Flex>

<p className="font-poping text-xs w-[220px] mt-24px font-normal">Fill out our form and we will contact you within 24 hours.</p>
<p className="font-poping text-xs font-normal my-16px">Emails: customer@exclusive.com</p>
<p className="font-poping text-xs font-normal">Emails: support@exclusive.com</p>
 </div>

  </div>
  <div className="w-8/12">
  <div className="w-[800px] h-[457px] pt-[40px] px-[31px] shadow shadow-line">

  <Flex className="justify-between">
    <input
      className="bg-secondary text-16px font-poping   rounded-4px  placeholder:text-16px placeholder:font-poping placeholder:font-normal w-[235px] h-[50px] pl-[16px] outline-none"
      type="text"
      placeholder="Your Name"
    />

    <input
      className="bg-secondary  text-16px font-poping rounded-4px   placeholder:text-16px placeholder:font-poping placeholder:font-normal w-[235px] h-[50px] pl-[16px] outline-none"
      type="email"
      placeholder="Your Email"
    />

    <input
      className="bg-secondary   text-16px font-poping  rounded-4px placeholder:text-16px placeholder:font-poping placeholder:font-normal w-[235px] h-[50px] pl-4 outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      type="number"
      placeholder="Your Phone"
    />
  </Flex>
  
<textarea
  id="message"
  name="message"
  placeholder="Your Massage"
  className="
    w-[737px]
    h-[207px]
    bg-secondary
    p-16px
    my-31px
    outline-none
    resize-none
   text-16px font-poping
    placeholder:text-16px
    placeholder:font-poping
    placeholder:font-normal
    rounded-[4px]
  "
></textarea>
  <div className="flex justify-end">
    <Button text="Send Massage" />
  </div>

</div>
  </div>
    </Flex>
  </Container>
 </section>
  )
}

export default Contact