import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import patientAvatar1 from "../../assets/images/user1.jpg";
import patientAvatar2 from "../../assets/images/user2.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
  <div className='mt-[30px] lg:mt-[55px]'>
    <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}>
      <SwiperSlide>
        <div className="py-[30px] px-5 rounded-[13px]">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div>
              <h4 className="text-[18px] leading-[30px] 
              font-semibold text-headingColor">Carlos Fagman</h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-7 mt-4
           text-textColor font-[400]">❝Experience top-notch healthcare at Medicare, where dedicated professionals and advanced medical services converge to prioritize your well-being❞</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="py-[30px] px-5 rounded-[13px]">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar1} alt="" className="w-12 h-11 rounded-md"/>
            <div>
              <h4 className="text-[18px] leading-[30px] 
              font-semibold text-headingColor">Gerard Swensord</h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-7 mt-4
           text-textColor font-[400]">❝Discover exceptional medical care tailored to your needs at Medicare – 
           where compassionate experts and cutting-edge facilities work together for your health and peace of mind❞</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="py-[30px] px-5 rounded-[13px]">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar2} alt="" className="w-12 h-12 rounded-md"/>
            <div>
              <h4 className="text-[18px] leading-[30px] 
              font-semibold text-headingColor">Michael Lopez</h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-7 mt-4
           text-textColor font-[400]">❝At Medicare, your health is our priority. T
           rust in our experienced medical team and state-of-the-art facilities 
           for comprehensive and personalized care❞</p>
        </div>
      </SwiperSlide>

      

    </Swiper>
  </div>
   )
};

export default Testimonial;
