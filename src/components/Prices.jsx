// eslint-disable-next-line react/prop-types
export function Prices({pricesRef}) {
  return (
    <section className="lg:mt-60 sm:mt-24 mt-16" ref={pricesRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug lg:border-b border-white/50">Прайс-лист</h2>

      <div className="border lg:border-none rounded-md p-3 lg:p-0 mt-2.5 lg:mt-0">
        <div className="flex flex-col lg:mt-12 sm:gap-12 gap-6">
          <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="lg:text-4xl sm:text-2xl text-xl font-bold sm:w-1/3">Light</p>
            <p className="lg:text-3xl sm:text-xl text-base font-medium sm:w-1/3 sm:text-center">1 игра</p>
            <p className="lg:text-5xl sm:text-3xl text-xl text-red lg:text-white font-bold lg:font-normal sm:w-1/3 sm:text-right">1 000 AMD</p>
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="lg:text-4xl sm:text-2xl text-xl font-bold sm:w-1/3">Duo</p>
            <p className="lg:text-3xl sm:text-xl text-base font-medium sm:w-1/3 sm:text-center">2 игры</p>
            <p className="lg:text-5xl sm:text-3xl text-xl text-red lg:text-white font-bold lg:font-normal sm:w-1/3 sm:text-right">2 000 AMD</p>
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="lg:text-4xl sm:text-2xl text-xl font-bold sm:w-1/3">Standart</p>
            <p className="lg:text-3xl sm:text-xl text-base font-medium sm:w-1/3 sm:text-center">3–4 игры</p>
            <p className="lg:text-5xl sm:text-3xl text-xl text-red lg:text-white font-bold lg:font-normal sm:w-1/3 sm:text-right">2 500 AMD</p>
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="lg:text-4xl sm:text-2xl text-xl font-bold sm:w-1/3">Standart+</p>
            <p className="lg:text-3xl sm:text-xl text-base font-medium sm:w-1/3 sm:text-center">5 игр</p>
            <p className="lg:text-5xl sm:text-3xl text-xl text-red lg:text-white font-bold lg:font-normal sm:w-1/3 sm:text-right">3 000 AMD</p>
          </div>
        </div>
      </div>
    </section>
  )
}
