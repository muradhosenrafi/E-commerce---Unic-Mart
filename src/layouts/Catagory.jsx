import CategoriesCard from "../components/CategoriesCard";
import Container from "../components/Container";
import Hedding from "../components/Hedding";
import SubHedding from "../components/SubHedding";

import phone1 from "../assets/phone.svg";
import phone2 from "../assets/computer.svg";
import phone3 from "../assets/watch.svg";
import phone4 from "../assets/camara.svg";
import phone5 from "../assets/hedphone.svg";
import phone6 from "../assets/gaming.svg";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const Catagory = () => {
  return (
    <section className="pb-70px">

      <Container>

        {/* Top */}
        <div className="flex items-end justify-between pb-60px flex-wrap gap-5">

          {/* Heading */}
          <div>

            <SubHedding text="Categories" />

            <Hedding
              className="pt-20px"
              text="Browse By Category"
            />

          </div>

          {/* Button */}
          <div className="flex items-center gap-3 shrink-0">

            <button className="category-prev w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

              <FaArrowLeftLong />

            </button>

            <button className="category-next w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

              <FaArrowRightLong />

            </button>

          </div>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            nextEl: ".category-next",
            prevEl: ".category-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            576: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            992: {
              slidesPerView: 4,
            },

            1200: {
              slidesPerView: 5,
            },
          }}
        >

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone1}
              text="Phones"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone2}
              text="Computers"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone3}
              text="SmartWatch"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone4}
              text="Camera"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone5}
              text="HeadPhones"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CategoriesCard
              catagoryimge={phone6}
              text="Gaming"
            />
          </SwiperSlide>

        </Swiper>
<hr className="mb-[70px] mt-[70px] border-line" />
      </Container>

    </section>
  );
};

export default Catagory;