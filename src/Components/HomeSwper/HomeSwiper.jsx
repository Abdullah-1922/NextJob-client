// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import webSVG from '../../../public/web.svg'
import marketSVG from '../../../public/digitalMarket.svg'
import GraphicsSVG from '../../../public/graphicsdesign.svg'

// Import Swiper styles
import './HomeSwiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HomeSwiper = () => {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        classNameName='mySwiper'>
        <SwiperSlide>
          <div className='my-5 py-1'>
            <div
              className='flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
             <div className='w-[320px] md:w-[600px] lg:w-[700px]'>
             <img className="object-cover  rounded-t-lg  md:rounded-none md:rounded-l-lg" src={webSVG} alt=""></img>
             </div>
              
              <div className='flex  flex-col justify-between p-4 '>
                <h5 className='mb-2 text-2xl font-bold  text-gray-900 dark:text-white'>
                  Are you a Web developer?
                </h5>
                <p className='mb-3  text-gray-700 dark:text-gray-400'>
                  We are providing jobs as a web developer. Let`s find you next web development job here and make your career.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='my-5'>
            <div
              className='flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
             <div className='w-[320px] md:w-[600px] lg:w-[700px]'>
             <img className="object-cover  rounded-t-lg  md:rounded-none md:rounded-l-lg" src={marketSVG} alt=""></img>
             </div>
              
              <div className='flex  flex-col justify-between p-4 '>
                <h5 className='mb-2 text-2xl font-bold  text-gray-900 dark:text-white'>
                  Are you a Digital marketer?
                </h5>
                <p className='mb-3  text-gray-700 dark:text-gray-400'>
                  We are providing jobs as a Digital marketer. Let`s find you next Digital marketing job here and make your career.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='my-5'>
            <div
              className='flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
             <div className='w-[320px] md:w-[600px] lg:w-[700px]'>
             <img className="object-cover  rounded-t-lg  md:rounded-none md:rounded-l-lg" src={GraphicsSVG} alt=""></img>
             </div>
              
              <div className='flex  flex-col justify-between p-4 '>
                <h5 className='mb-2 text-2xl font-bold  text-gray-900 dark:text-white'>
                  Are you a Graphic designer?
                </h5>
                <p className='mb-3  text-gray-700 dark:text-gray-400'>
                  We are providing jobs as a Graphic designer. Let`s find you next Graphic designing job here and make your career.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
