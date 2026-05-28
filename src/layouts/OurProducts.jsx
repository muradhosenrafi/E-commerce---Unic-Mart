import Container from "../components/Container";
import SubHedding from "../components/SubHedding";
import Hedding from "../components/Hedding";
import Card from "../components/Card";
import Button from "../components/Button"

import product1 from "../assets/catfood.png";
import product2 from "../assets/camra.png";
import product3 from "../assets/leptop.png";
import product4 from "../assets/bookself.png";
import product5 from "../assets/rccard.png";
import product6 from "../assets/spostshow.png";
import product7 from "../assets/tiger.png";
import product8 from "../assets/jeckt.png";
import product9 from "../assets/kaybord.png";
import product10 from "../assets/grafixcaard.png";
import product11 from "../assets/cardone.png";
import produc12 from "../assets/monitor.png";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <section className="pb-184px">

      <Container>

        {/* Top */}
        <div className="flex items-end justify-between flex-wrap gap-5">

          {/* Heading */}
          <div>

            <SubHedding text="Our Products" />

            <Hedding
              className="pt-20px"
              text="Explore Our Products"
            />

          </div>

          {/* Button */}
          <div className="flex items-center gap-3 shrink-0">

            <button className="ourproduct-prev w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

              <FaArrowLeftLong />

            </button>

            <button className="ourproduct-next w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

              <FaArrowRightLong />

            </button>

          </div>

        </div>

        {/* Swiper */}
        <div className="pt-60px">

          <Swiper
            modules={[Navigation, Grid]}
            spaceBetween={20}
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: "row",
            }}
            navigation={{
              nextEl: ".ourproduct-next",
              prevEl: ".ourproduct-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                },
              },

              576: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                },
              },

              768: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },

              1200: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                },
              },
            }}
           
          >

            <SwiperSlide>
              <Card
                type={true}
                productimage={product1}
                rating="Best"
                disprice=""
                producttitle="Breed Dry Dog Food"
                price="$100"
                stock="(35)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product2}
                rating="Best"
                disprice=""
                producttitle="CANON EOS DSLR Camera"
                price="$360"
                stock="(95)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product3}
                rating="Best"
                disprice=""
                producttitle="ASUS FHD Gaming Laptop"
                price="$700"
                stock="(325)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product4}
                rating="Best"
                disprice=""
                producttitle="Wooden Book Self"
                price="$500"
                stock="(145)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product5}
                rating="Best"
                disprice=""
                producttitle="Kids Electric Car"
                price="$960"
                stock="(65)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product6}
                rating="Best"
                disprice=""
                producttitle="Jr. Zoom Soccer Cleats"
                price="$1160"
                stock="(35)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product7}
                rating="Best"
                disprice=""
                producttitle="GP11 Shooter USB Gamepad"
                price="$660"
                stock="(55)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product8}
                rating="Best"
                disprice=""
                producttitle="Quilted Satin Jacket"
                price="$660"
                stock="(55)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product9}
                rating="Best"
                disprice=""
                producttitle="AK-900 Wired Keyboard"
                price="$200"
                stock="(65)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product10}
                rating="Best"
                disprice=""
                producttitle="RGB liquid CPU Cooler"
                price="$1960"
                stock="(65)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={product11}
                rating="Best"
                disprice=""
                producttitle="HAVIT HV-G92 Gamepad"
                price="$560"
                stock="(65)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                type={true}
                productimage={produc12}
                rating="Best"
                disprice=""
                producttitle="IPS LCD Gaming Monitor"
                price="$1160"
                stock="(65)"
              />
            </SwiperSlide>

          </Swiper>

        </div>
        <div  className="text-center pt-60px">
             <Link to="/shop"><Button text="View All Products"/></Link>
        </div>

      </Container>

    </section>
  );
};

export default OurProducts;