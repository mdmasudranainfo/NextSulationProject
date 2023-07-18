// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-between container mx-auto my-3 mb-7 relative">
            <div className="">
              <h1 className="lg:text-6xl text-2xl  font-bold leading-tight">
                NextSulation {'  '}
                <span className="text-primary">
                  Make <br /> Better
                </span>{' '}
                Service <br /> For Clint
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" relative hidden lg:block">
              <img
                className="w-[736px]"
                src="https://i.ibb.co/BPvvj7k/Screenshot-2023-03-01-185859.png"
                alt=""
              />

              <img
                className=" absolute bottom-0 left-0 w-80"
                src="https://i.ibb.co/CWjFrR9/card-Profile.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between container mx-auto my-3 mb-7 relative">
            <div className="">
              <h1 className="lg:text-6xl text-2xl  font-bold leading-tight">
                Find out {'  '}
                <span className="text-primary">
                  Better <br /> Service
                </span>{' '}
                with better <br /> review faster
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" relative hidden lg:block">
              <img
                className="w-[736px]"
                src="https://i.ibb.co/BPvvj7k/Screenshot-2023-03-01-185859.png"
                alt=""
              />

              <img
                className=" absolute bottom-0 left-0 w-80"
                src="https://i.ibb.co/CWjFrR9/card-Profile.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between container mx-auto my-3 mb-7 relative">
            <div className="">
              <h1 className="lg:text-6xl text-2xl  font-bold leading-tight">
                NextSulation {'  '}
                <span className="text-primary">
                  Make <br /> Better
                </span>{' '}
                Service <br /> For Clint
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" relative hidden lg:block">
              <img
                className="w-[736px]"
                src="https://i.ibb.co/BPvvj7k/Screenshot-2023-03-01-185859.png"
                alt=""
              />

              <img
                className=" absolute bottom-0 left-0 w-80"
                src="https://i.ibb.co/CWjFrR9/card-Profile.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
