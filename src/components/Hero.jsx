import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Hamburger } from './Hamburger.jsx'

import logo from '../assets/logo.svg'
import banner from '../assets/banner.png'

const mobileLinks = [
  {
    'title': 'Услуги',
    'link': '/services',
  },
  {
    'title': 'Расписание',
    'link': '/schedule',
  },
  {
    'title': 'Цены',
    'link': '/prices',
  },
  {
    'title': 'Отзывы',
    'link': '/reviews',
  },
  {
    'title': 'Контакты',
    'link': '/contacts',
  },
]

// eslint-disable-next-line react/prop-types
export function Hero({ allRefs, heroRef }) {
  const [opened, setOpened] = useState(false)

  const handleClick = (link) => {
    if (link === 'hero') {
      // eslint-disable-next-line react/prop-types
      heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      const block = link.split('/')[1]
      // eslint-disable-next-line react/prop-types
      allRefs[block].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    setOpened(false)
  }

  return (
    <section className="flex lg:min-h-[92vh] xl:min-h-[auto]" ref={heroRef}>
      <div className="lg:max-w-[726px] mt-36 lg:absolute">
        <h1 className="lg:text-8xl sm:text-6xl text-4xl font-bold lg:mb-11 mb-5 lh-125">
          <span className="text-red">Мафия</span> клуб “Joker”
        </h1>
        <p className="lg:text-4xl sm:text-2xl text-xl lh-125">
          <span className="text-red font-bold">Спортивная мафия</span> в самом центре Еревана для начинающих и опытных
          мафиози. <span className="text-red font-medium">Играем 5 раз в неделю</span>  по адресу Григора Лусаворича 7, гостиница Арарат, 2 этаж, клуб &#34;Status&#34;</p>
        <button
          className="lg:text-3xl sm:text-xl text-lg bg-red text-white sm:p-6 p-3 rounded-full lg:mt-24 sm:mt-12 mt-4 hover:bg-white hover:text-red transition duration-300">
          <a href="https://t.me/Mafclubjoker" target="_blank"> Записаться на игру</a>
        </button>
      </div>
      <div
        className="lg:hidden flex justify-between px-4 w-full items-center sm:h-36 h-24 fixed top-0 left-0 z-50 bg-black bg-opacity-90">
        <NavLink onClick={() => handleClick('hero')} to="/">
          <img className="sm:w-48 sm:h-24 w-32 h-16" src={logo} alt="logo" />
        </NavLink>
        <Hamburger opened={opened} setOpened={setOpened} />
        {opened && (
          <div
            className="fixed left-0 bg-black h-[calc(100vh-36px)] sm:h-[calc(100vh-144px)] top-16 sm:top-36 z-50 w-full">
            <nav className="h-full">
              <ul className="flex flex-col text-3xl gap-12 items-center h-full justify-center">
                {
                  mobileLinks.map(link => (
                    <li key={link.title}>
                      <NavLink onClick={() => handleClick(link.link)} to={link.link}>
                        {link.title}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className="2xl:w-1/2 xl:w-7/12 ml-auto hidden lg:block">
        <img src={banner} alt="banner" className="w-full hidden xl:block" />
      </div>
    </section>
  )
}
