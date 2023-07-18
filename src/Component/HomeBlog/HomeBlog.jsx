import { Link } from 'react-router-dom'

const HomeBlog = () => {
  return (
    <div data-aos="fade-up" className="container mx-auto mt-12">
      <div className=" lg:flex md:block mt-2 justify-between items-center ">
        <h1 className="font-bold text-3xl">Blog </h1>
      </div>

      {/* grid event */}

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-11 mt-16">
        <div data-aos="fade-up" className=" shadow-sm rounded-lg">
          <img
            className="max-w-full"
            src="https://i.ibb.co/V2vj4c2/image.png"
            alt=""
          />

          <div className=" p-5">
            {/* icone */}

            <div className="flex gap-3 ">
              <div className=" inline-block text-center ease-in duration-200 hover:bg-[#30C736] bg-neutral rounded-full py-2 px-1 text-white mt-[-70px] ">
                <h2 className="text-4xl font-semibold">20</h2>
                <span className="block">Nov</span>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.00012207"
                    width="60"
                    height="60"
                    rx="30"
                    fill="white"
                  />
                  <path
                    d="M30.0002 15.3331C27.0994 15.3331 24.2637 16.1933 21.8518 17.8049C19.4399 19.4165 17.56 21.7071 16.4499 24.3871C15.3399 27.0671 15.0494 30.0161 15.6153 32.8611C16.1812 35.7062 17.5781 38.3195 19.6293 40.3707C21.6804 42.4219 24.2938 43.8187 27.1388 44.3846C29.9839 44.9506 32.9329 44.6601 35.6129 43.55C38.2928 42.4399 40.5835 40.5601 42.1951 38.1482C43.8067 35.7362 44.6668 32.9006 44.6668 29.9998C44.6623 26.1114 43.1155 22.3835 40.366 19.634C37.6165 16.8844 33.8886 15.3377 30.0002 15.3331ZM30.0002 41.9998C27.6268 41.9998 25.3067 41.296 23.3333 39.9774C21.3599 38.6589 19.8219 36.7847 18.9136 34.592C18.0054 32.3993 17.7677 29.9865 18.2307 27.6587C18.6938 25.3309 19.8367 23.1927 21.5149 21.5145C23.1931 19.8363 25.3313 18.6934 27.6591 18.2304C29.9869 17.7674 32.3997 18.005 34.5924 18.9132C36.7851 19.8215 38.6592 21.3596 39.9778 23.333C41.2964 25.3063 42.0002 27.6264 42.0002 29.9998C41.9966 33.1813 40.7312 36.2315 38.4816 38.4812C36.2319 40.7309 33.1817 41.9963 30.0002 41.9998Z"
                    fill="#30C736"
                  />
                  <path
                    d="M35.7654 25.684L28.7067 32.1547L25.6094 29.0573C25.4864 28.93 25.3393 28.8284 25.1766 28.7585C25.0139 28.6887 24.839 28.6519 24.6619 28.6503C24.4849 28.6488 24.3093 28.6825 24.1455 28.7496C23.9816 28.8166 23.8327 28.9156 23.7075 29.0408C23.5824 29.166 23.4833 29.3149 23.4163 29.4787C23.3493 29.6426 23.3155 29.8182 23.3171 29.9952C23.3186 30.1723 23.3554 30.3472 23.4253 30.5099C23.4951 30.6726 23.5967 30.8197 23.7241 30.9427L27.7241 34.9427C27.967 35.1857 28.2945 35.3255 28.638 35.333C28.9816 35.3404 29.3148 35.2149 29.5681 34.9827L37.5681 27.6494C37.8287 27.4103 37.9837 27.0775 37.9989 26.7242C38.0142 26.3709 37.8884 26.026 37.6494 25.7654C37.4103 25.5047 37.0775 25.3497 36.7242 25.3345C36.3709 25.3192 36.026 25.445 35.7654 25.684Z"
                    fill="#30C736"
                  />
                </svg>
              </div>
              <div className="">
                <p className="text-lg text-[#FE8D4D]">MOBILE APP</p>
                <h3 className="text-xl font-semibold">
                  Global Android Programmer Meetup 2020{' '}
                </h3>
              </div>
            </div>

            {/* icone */}

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className=" shadow-sm rounded-lg">
          <img
            className="max-w-full"
            src="https://i.ibb.co/ZV5cjxr/image2.png"
            alt=""
          />

          <div className=" p-5">
            {/* icone */}

            <div className="flex gap-3 ">
              <div className=" inline-block text-center ease-in duration-200 hover:bg-[#30C736] bg-neutral rounded-full py-2 px-1 text-white mt-[-70px] ">
                <h2 className="text-4xl font-semibold">20</h2>
                <span className="block">Nov</span>
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.490234"
                    width="60"
                    height="60"
                    rx="30"
                    fill="white"
                    // fill-opacity="0.11"
                  />
                  {/* <g clip-path="url(#clip0_49_1515)">
                <path
                  d="M36.1152 20.0548C33.2725 20.0548 31.4461 21.915 30.4902 23.5862C29.5344 21.915 27.708 20.0548 24.8652 20.0548C21.2576 20.0548 18.4902 22.8179 18.4902 26.4825C18.4902 30.4561 21.9573 33.1622 27.1346 37.2594C29.6697 39.2638 29.8326 39.4162 30.4902 39.9449C31.027 39.5134 31.324 39.2534 33.8459 37.2594C39.0232 33.1622 42.4902 30.4561 42.4902 26.4825C42.4902 22.8179 39.7229 20.0548 36.1152 20.0548Z"
                  fill="white"
                />
              </g> */}
                  <defs>
                    <clipPath id="clip0_49_1515">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(18.4902 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-lg text-[#FE8D4D]">ART EXIBITHION</p>
                <h3 className="text-xl font-semibold">
                  Paris Designer Meetup with Ziro Partner{' '}
                </h3>
              </div>
            </div>

            {/* icone */}

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className=" shadow-sm rounded-lg">
          <img
            className="max-w-full"
            src="https://i.ibb.co/M2d58g5/image5.png"
            alt=""
          />

          <div className=" p-5">
            {/* icone */}

            <div className="flex gap-3 ">
              <div className=" inline-block text-center ease-in duration-200 hover:bg-[#30C736] bg-neutral rounded-full py-2 px-1 text-white mt-[-70px] ">
                <h2 className="text-4xl font-semibold">20</h2>
                <span className="block">Nov</span>
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.490234"
                    width="60"
                    height="60"
                    rx="30"
                    fill="white"
                    // fill-opacity="0.11"
                  />
                  {/* <g clip-path="url(#clip0_49_1515)">
                <path
                  d="M36.1152 20.0548C33.2725 20.0548 31.4461 21.915 30.4902 23.5862C29.5344 21.915 27.708 20.0548 24.8652 20.0548C21.2576 20.0548 18.4902 22.8179 18.4902 26.4825C18.4902 30.4561 21.9573 33.1622 27.1346 37.2594C29.6697 39.2638 29.8326 39.4162 30.4902 39.9449C31.027 39.5134 31.324 39.2534 33.8459 37.2594C39.0232 33.1622 42.4902 30.4561 42.4902 26.4825C42.4902 22.8179 39.7229 20.0548 36.1152 20.0548Z"
                  fill="white"
                />
              </g> */}
                  <defs>
                    <clipPath id="clip0_49_1515">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(18.4902 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-lg text-[#FE8D4D]">ACCOUNTING</p>
                <h3 className="text-xl font-semibold">
                  Bussiness Plan in Pandemic with Famous Native Speaker{' '}
                </h3>
              </div>
            </div>

            {/* icone */}

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center  my-16">
        <Link to="/blog" className="btn btn-primary capitalize rounded-full">
          View more
        </Link>
      </div>

      {/* brands */}

      {/* <div className=" flex flex-wrap justify-evenly mt-28">
    <img src="https://i.ibb.co/GQ7BRDX/Group-11.png" alt="" />
    <img src="https://i.ibb.co/mSmSCj3/Group-13.png" alt="" />
    <img src="https://i.ibb.co/bvj7mtc/Group-9.png" alt="" />
    <img src="https://i.ibb.co/YBmc7yk/Group-8.png" alt="" />
    <img src="https://i.ibb.co/1KsQKMS/Group-7.png" alt="" />
  </div> */}
    </div>
  )
}

export default HomeBlog
