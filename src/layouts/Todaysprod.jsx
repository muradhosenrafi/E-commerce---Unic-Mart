import Container from "../components/Container";
import SubHedding from "../components/SubHedding";
import Hedding from "../components/Hedding";
import Card from "../components/Card";
import prodecrt1 from "../assets/cardone.png";
import prodecrt2 from "../assets/kaybord.png";
import prodecrt3 from "../assets/monitor.png";
import prodecrt4 from "../assets/char.png";
import prodecrt5 from "../assets/leptop.png";
import prodecrt6 from "../assets/grafixcaard.png";
import Button from "../components/Button";


import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { useEffect, useState } from "react";

// Swiper
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Todaysprod = () => {

  const targetDate =
    new Date().getTime() +
    3 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] =
    useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();

    const distance = targetDate - now;

    return {
      days: Math.floor(
        distance / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (distance / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (distance / 1000 / 60) % 60
      ),

      seconds: Math.floor(
        (distance / 1000) % 60
      ),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-40px pb-60px">

      <Container>

        <div className="border-b border-line">

          {/* Top */}
          <div className="flex items-end justify-between pb-40px flex-wrap gap-5">

            {/* Left */}
            <div className="flex items-end gap-87px flex-wrap">

              {/* Heading */}
              <div>

                <SubHedding text="Today’s" />

                <Hedding
                  className="pt-6 inline-block"
                  text="Flash Sales"
                />

              </div>

              {/* Timer */}
              <div className="flex items-center gap-4 pb-1 flex-wrap">

                <div>
                  <p className="text-xs font-poping font-medium">
                    Days
                  </p>

                  <h3 className="text-32px font-bold">
                    {String(timeLeft.days).padStart(
                      2,
                      "0"
                    )}
                  </h3>
                </div>

                <span className="text-view text-2xl font-bold">
                  :
                </span>

                <div>
                  <p className="text-xs font-poping font-medium">
                    Hours
                  </p>

                  <h3 className="text-32px font-bold">
                    {String(timeLeft.hours).padStart(
                      2,
                      "0"
                    )}
                  </h3>
                </div>

                <span className="text-view text-2xl font-bold">
                  :
                </span>

                <div>
                  <p className="text-xs font-poping font-medium">
                    Minutes
                  </p>

                  <h3 className="text-32px font-bold">
                    {String(timeLeft.minutes).padStart(
                      2,
                      "0"
                    )}
                  </h3>
                </div>

                <span className="text-view text-2xl font-bold">
                  :
                </span>

                <div>
                  <p className="text-xs font-poping font-medium">
                    Seconds
                  </p>

                  <h3 className="text-32px font-bold">
                    {String(timeLeft.seconds).padStart(
                      2,
                      "0"
                    )}
                  </h3>
                </div>

              </div>
            </div>

       
            <div className="flex items-center gap-3 shrink-0">

              <button className="custom-prev w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

                <FaArrowLeftLong />

              </button>

              <button className="custom-next w-40px h-40px md:w-46px md:h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">

                <FaArrowRightLong />

              </button>

            </div>

          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}

            spaceBetween={20}

            slidesPerView={4}

            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}

            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
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

              1170: {
                slidesPerView: 4,
              },
            }}
          >

            <SwiperSlide>
              <Card
                productimage={prodecrt1}
                rating="-40%"
                disprice="$160"
                producttitle="HAVIT HV-G92 Gamepad"
                price="$120"
                stock="(88)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                productimage={prodecrt2}
                rating="-35%"
                disprice="$1160"
                producttitle="AK-900 Wired Keyboard"
                price="$960"
                stock="(75)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                productimage={prodecrt3}
                rating="-30%"
                disprice="$400"
                producttitle="IPS LCD Gaming Monitor"
                price="$370"
                stock="(99)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                productimage={prodecrt4}
                rating="-25%"
                disprice="$400"
                producttitle="S-Series Comfort Chair"
                price="$375"
                stock="(99)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                productimage={prodecrt5}
                rating="-35%"
                disprice="$1160"
                producttitle="ASUS FHD Gaming Laptop"
                price="$960"
                stock="(65)"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                productimage={prodecrt6}
                type={true}
                rating="none"
                disprice="$170"
                producttitle="RGB liquid CPU Cooler"
                price="$160"
                stock="(65)"
              />
            </SwiperSlide>

          </Swiper>

    
          <div className="py-60px text-center">

            <Button
              className=""
              text="View All Products"
            />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Todaysprod;


<div className="flex items-center gap-3">

          <button className="w-46px h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">
            <FaArrowLeftLong />
          </button>

          <button className="w-46px h-46px rounded-full cursor-pointer bg-card flex items-center justify-center hover:bg-view hover:text-white duration-300">
            <FaArrowRightLong />
          </button>

        </div>
