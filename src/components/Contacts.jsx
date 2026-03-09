import contact1 from '../assets/contact1.svg'
import contact2 from '../assets/contact2.svg'
import contact3 from '../assets/contact3.svg'
import contact4 from '../assets/contact4.svg'
import contact5 from '../assets/contact5.svg'
import contact6 from '../assets/contact6.svg'

const links = [
  {
    img: contact1,
    link: "https://t.me/Mafclubjoker",
    alt: "Telegram"
  },
  {
    img: contact2,
    link: "https://www.instagram.com/yerevanmafiajoker/",
    alt: "Instagram"
  },
  {
    img: contact3,
    link: "https://www.facebook.com/mafia.yerevan",
    alt: "Facebook"
  },
  {
    img: contact4,
    link: "https://mafiaworldtour.com/clubs/324",
    alt: "FIIM"
  },
  {
    img: contact5,
    link: "https://maps.app.goo.gl/PukC88iEEpsc4XXE6",
    alt: "Google Maps"
  },
  {
    img: contact6,
    link: "https://www.youtube.com/@mafclubjoker",
    alt: "YouTube"
  }
]

// eslint-disable-next-line react/prop-types
export function Contacts({ contactsRef }) {
  return (
    <section className="lg:mt-60 sm:mt-24 mt-16 mb-6 lg:mb-0" ref={contactsRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug">Контакты</h2>
      <p className="lg:text-3xl sm:text-2xl text-xl leading-normal mt-6">
        Мы всегда на связи в телеграме и инстаграме - просто отправьте сообщение, и мы ответим вам в рабочее время с 14:00 до 20:00.
      </p>
      <p className="lg:text-2xl sm:text-xl text-lg leading-normal mt-4 text-gray-300">
        Игры проходят по адресу Григора Лусаворича 7, гостиница Арарат, 2 этаж, клуб Status.
      </p>
      <ul className="flex gap-5 mt-9">
        {
          links.map(link => (
            <li key={link.link}>
              <a href={link.link} target="_blank">
                <img src={link.img} alt={link.alt} />
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
