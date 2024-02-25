import Internship1 from "../sertifikat/internship1.jpg";
import Mikrotik from "../sertifikat/mikrotik.jpg";
import Msoffice from "../sertifikat/msoffice.jpg";
import BasicEnglish from "../sertifikat/basicEnglish.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination } from "swiper/modules";
const Certified = () => {
  return (
    <div className="place-items-center justify-center w-full">
      <div className="container pt-10  px-5 mx-auto mt-6">
        <h1 className="text-center font-bold text-3xl mb-3 text-gray-700 dark:text-slate-200">
          Certificates
        </h1>
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          modules={[EffectFlip, Pagination]}
          className="mySwiper w-80  lg:w-96 justify-center block"
        >
          <SwiperSlide>
            <div className="sertifikat1">
              <a
                href="https://drive.google.com/file/d/1QG5EJ2fxqAqI7-sdp9qat2iUFrTZS_PW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Internship1}
                  alt=""
                  className="w-full  object-cover"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sertifikat2">
              <a
                href="https://drive.google.com/file/d/1QHtTA6oV-LOJixldCk3pqb9NR5Ar6aq7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Mikrotik}
                  alt=""
                  className="w-80 h-80 lg:w-[400px] lg:h-[300px] object-contain"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sertifikat3">
              <a
                href="https://drive.google.com/file/d/1QKKo9c8LELYde48knB6xA4L634vll4hV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Msoffice}
                  alt=""
                  className="w-80 h-80 lg:w-[400px] lg:h-[300px] object-contain"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sertifikat4">
              <a
                href="https://drive.google.com/file/d/1QMGqW8kRLpOrwwqq70aeco1m48VCWA7v/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={BasicEnglish}
                  alt=""
                  className="w-80 h-80 lg:w-[400px] lg:h-[300px] object-contain"
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Certified;
