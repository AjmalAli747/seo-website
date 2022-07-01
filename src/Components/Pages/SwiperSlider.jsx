// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SliderImg from "../Images/sliderImg.png";
import SliderImgTow from "../Images/sliderImgTow.png";
import WebDeveloper from "../Images/WebDeveloper.jpg";
import CeoCompany from "../Images/CEOCompany.jpg";
import WebCompany from "../Images/WEBCompany.jpg";
import "../Css/Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints = {{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="container_col">
          <img src={SliderImg} alt="" />
          <div className="heading_slider">
            <p>David millers</p>
            <span> Analysis </span>
          </div>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_text">
          <p>
            “After cycling through multiple SEO mpaniesan seeing no results, I
            finally came across SEO. ult Choosing to work with Onum is hands
            dowene of the best cycling through.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container_col">
          <img src={SliderImgTow} alt="" />
          <div className="heading_slider">
            <p>Christina Tores</p>
            <span> Web Developer </span>
          </div>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_text">
          <p>
            “After cycling through multiple SEO mpaniesan seeing no results, I
            finally came across SEO. ult Choosing to work with Onum is hands
            dowene of the best cycling through.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container_col">
          <img src={WebDeveloper} alt="" />
          <div className="heading_slider">
            <p>Christina Tores</p>
            <span> Tool Customer </span>
          </div>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_text">
          <p>
            “After cycling through multiple SEO mpaniesan seeing no results, I
            finally came across SEO. ult Choosing to work with Onum is hands
            dowene of the best cycling through.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container_col">
          <img src={CeoCompany} alt="" />
          <div className="heading_slider">
            <p>Sabir Jennings</p>
            <span>  Designer  </span>
          </div>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_text">
          <p>
            “After cycling through multiple SEO mpaniesan seeing no results, I
            finally came across SEO. ult Choosing to work with Onum is hands
            dowene of the best cycling through.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container_col">
          <img src={WebCompany} alt="" />
          <div className="heading_slider">
            <p>David millers</p>
            <span> Analysis </span>
          </div>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="slider_text">
          <p>
            “After cycling through multiple SEO mpaniesan seeing no results, I
            finally came across SEO. ult Choosing to work with Onum is hands
            dowene of the best cycling through.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
