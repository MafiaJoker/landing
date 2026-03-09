import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const scheduleData = [
  { day: 'Понедельник', time: '20:00-01:00', type: 'Мафия на армянском' },
  { day: 'Вторник', time: '20:00-01:00', type: 'Основной состав' },
  { day: 'Четверг', time: '20:00-01:00', type: 'Основной состав' },
  { day: 'Пятница', time: '20:00-01:00', type: 'Мафия для начинающих' },
  { day: 'Суббота', time: '19:30-02:00', type: 'Основной состав' },
]

function groupByType(data) {
  const groups = {}
  for (const item of data) {
    if (!groups[item.type]) {
      groups[item.type] = { type: item.type, days: [], times: new Set() }
    }
    groups[item.type].days.push(item.day)
    groups[item.type].times.add(item.time)
  }
  return Object.values(groups).map(g => ({
    type: g.type,
    days: g.days.join(', '),
    time: [...g.times].join(' / '),
  }))
}

// eslint-disable-next-line react/prop-types
export function Schedule({ scheduleRef }) {
  const grouped = groupByType(scheduleData)

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: 'schedule',
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="lg:mt-60 sm:mt-24 mt-16" ref={scheduleRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug lg:border-b border-white/50">Расписание</h2>
      <div className="hidden mt-6 lg:flex justify-between ">
        <ul className="flex flex-col gap-5 text-3xl">
          {scheduleData.map((item, i) => <li key={i}>{item.day}</li>)}
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          {scheduleData.map((item, i) => <li key={i}>{item.time}</li>)}
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          {scheduleData.map((item, i) => <li key={i}>{item.type}</li>)}
        </ul>
      </div>

      <div className="slider-container mt-2.5 lg:hidden">
        <Slider {...settings}>
          {grouped.map((group, i) => (
            <div key={i} className="bg-lightgray rounded-lg p-3 min-w-80">
              <h3 className="font-bold sm:text-xl text-base text-black">{group.type}</h3>
              <p className="text-black mt-2 text-sm sm:text-base">🗓 {group.days}</p>
              <p className="text-black mt-1.5 text-sm sm:text-base">🕘{group.time}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
