import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

const Icon2 = [
  '/assets/why-revvit/compo_1.png',
  '/assets/why-revvit/compo_2.png',
  '/assets/why-revvit/compo_3.png',
  '/assets/why-revvit/compo_4.png',
  '/assets/why-revvit/compo_5.png',
]

const whyRevvitData = [
  {
    id: 1,
    heading: 'Streamlined',
    heading2: 'Process',
    description:
      'No need to spend time searching multiple platforms or contacting different sellers individually. With our platform, you can access a wide variety of vehicles, from cars to trucks, to SUV’s, all in one place.',
  },
  {
    id: 2,
    heading: 'Verified',
    heading2: 'Buyers',
    description:
      "We carefully vet all buyers on our platform to ensure that you're dealing with reputable and trustworthy professionals. This gives you peace of mind and eliminates the risk of scams or fraudulent transactions.",
  },
  {
    id: 3,
    heading: 'Extensive',
    heading2: 'Inventory',
    description:
      "We offer a wide range of vehicles, catering to all your business needs. Whether you're looking for a fleet of sedans or heavy-duty trucks, we have you covered. Our inventory is constantly updated, ensuring that you have access to the latest models and options.",
  },
  {
    id: 4,
    heading: 'Time &',
    heading2: 'Cost Savings',
    description:
      'By having all buyers and sellers in one place, you can save valuable time and resources. You can efficiently compare prices, negotiate deals, and make informed decisions without the need for extensive research or multiple inquiries.',
  },
  {
    id: 5,
    heading: 'Personalized',
    heading2: 'Experience',
    description:
      'Our platform is designed to cater to your specific requirements. You can filter vehicles based on your preferences, such as make, model, price range, and location. This allows you to find the perfect vehicles that meet your business needs, saving you time and effort.',
  },
]

const WhyRevvit = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} !h-[45px] !w-[45px] sm:!h-[55px] sm:!w-[55px] xl:!h-[85px] xl:!w-[85px] !border-[3px] xl:!border-[5px] !border-primary !bg-white !flex !justify-center !items-center selection-ctm-bullet">
       <img src=${Icon2[index]} />
        </div>`
    },
  }

  return (
    <Fragment>
      <div id='why-revvit' className='main-container-root slider-selection'>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          speed={800}
          className='selectionSlider relative !flex lg:!items-end !flex-col lg:!flex-row'
        >
          {whyRevvitData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='slider-content duration-300 delay-150 ease-linear flex flex-col lg:flex-row'>
                <div className='slider-content-heding w-full lg:w-6/12 xl:w-5/12'>
                  <h2>
                    <Image
                      src='/assets/slash-icons/red.png'
                      alt='red-icon'
                      height={0}
                      width={0}
                      sizes='100vw'
                      className='slider-content-heding-img-1'
                    />
                    <Image
                      src='/assets/slash-icons/black.png'
                      alt='black-icon'
                      height={0}
                      width={0}
                      sizes='100vw'
                      className='slider-content-heding-img-2'
                    />
                    <div className='slider-content-spacing'>
                      {item.heading}
                      <span className='text-primary break-normal pl-1 lg:pl-2'>
                        {item.heading2}
                      </span>
                    </div>
                  </h2>
                  <p className='slider-content-spacing'>{item.description}</p>
                </div>
                <div className='w-full lg:w-6/12 xl:w-7/12'>
                  <Image
                    src='/assets/why-revvit/process.png'
                    alt='main-image'
                    height={0}
                    width={0}
                    sizes='100vw'
                    className='content-img'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  )
}

export default WhyRevvit
