
import CategoryList from "../components/CategoryList";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Bannerimage from "../assets/banner.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";


const Banner = () => {
  return (
  

<section className="pt-48px pb-140px">
<Container>
<Flex>
<div className='w-3/12 relative after:w-1px after:h-390px after:absolute after:-top-14px after:right-55px after:bg-line after:content-[""] '>
<Flex className="flex-col gap-y-4">
<CategoryList className =""type="true" text="Woman’s Fashion"/>
<CategoryList classNameicon="ml-20"type="true" text="Men’s Fashion"/>
<CategoryList text="Electronics"/>
<CategoryList text="Home & Lifestyle"/>
<CategoryList text="Medicine"/>
<CategoryList text="Sports & Outdoor"/>
<CategoryList text="Baby’s & Toys"/>
<CategoryList text="Groceries & Pets"/>
<CategoryList text="Health & Beauty"/>
</Flex>


</div>
<div className="w-9/12">

 <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                  <Image src={Bannerimage} alt="Banner image"/>
              </SwiperSlide>

              <SwiperSlide>
                  <Image src={Bannerimage} alt="Banner image"/>
              </SwiperSlide>

              <SwiperSlide>
                  <Image src={Bannerimage} alt="Banner image"/>
              </SwiperSlide>
              
            </Swiper>


</div>
</Flex>
</Container>
</section>

  )
}

export default Banner