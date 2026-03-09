import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

// eslint-disable-next-line react/prop-types
export function Services({ servicesRef }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrows: false,
    draggable: false,
    className: 'services',
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          draggable: true,
        },
      },
    ],
  }

  return (
    <section className="xl:mt-64 flex sm:mt-24 mt-16 xl:min-h-[552px] gap-6 justify-between" ref={servicesRef}>
      <div className="slider-container w-full">
        <Slider {...settings}>
          <div className="xl:w-full flex flex-col justify-end relative group cursor-pointer">
            <div className="absolute md:w-full w-11/12 h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
              <p
                className="xl:text-2xl md:text-xl sm:text-2xl text-sm lh-175 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Регулярно играем в мафию на русском и армянском языках, а также проводим закрытые внутриклубные миникапы и турниры.
              </p>
            </div>
            <img src={service1} alt="Fade" className="md:w-full w-11/12" />
            <p className="xl:text-4xl md:text-3xl sm:text-4xl text-2xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
              Мафия для опытных
            </p>
            <p></p>
          </div>

          <div className="xl:w-full flex flex-col justify-end relative group cursor-pointer">
            <div className="absolute md:w-full w-11/12 h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
              <p
                className="xl:text-2xl md:text-xl sm:text-2xl text-sm lh-175 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Еженедельно проводим игры с разборами для начинающих мафиози. Опытные ведущие дают обратную связь после каждой игры, помогая новичкам легко влиться в комьюнити и совершенствовать свои игровые навыки.
              </p>
            </div>
            <img src={service2} alt="Dzu" className="md:w-full w-11/12" />
            <p className="xl:text-4xl md:text-3xl sm:text-4xl text-2xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
              Мафия для начинающих
            </p>
          </div>

          <div className="xl:w-full flex flex-col justify-end relative group cursor-pointer">
            <div className="absolute md:w-full w-11/12 h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
              <p
                className="xl:text-2xl md:text-xl sm:text-2xl text-sm lh-175 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Организуем корпоратив для вашей компании под персональные запросы. Добавим интересных ролей, упростим правила и
                сделаем всё максимально возможное, чтобы вы с коллегами как следует повеселились. Бурные эмоции гарантируем!
              </p>
            </div>
            <img src={service3} alt="Corporates" className="md:w-full w-11/12" />
            <p className="xl:text-4xl md:text-3xl sm:text-4xl text-2xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
              Корпоративы и мероприятия
            </p>
          </div>
        </Slider>
      </div>
    </section>
  )
}
