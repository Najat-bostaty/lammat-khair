import Image from 'next/image'
import { siteImages } from '@/lib/assets'
import { Reveal, FloatOnView } from '@/components/Reveal'

export default function HeroSection() {
  return (
    <section id="home" className="section-desktop-screen luxury-surface relative isolate flex scroll-mt-28 overflow-hidden pt-[104px] lg:pt-0">
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-[1%] top-[60%] z-[1] block h-[105px] w-[88px] -scale-x-100 opacity-[0.2] mix-blend-multiply sm:h-[140px] sm:w-[116px] lg:h-[180px] lg:w-[150px]" />
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[22%] left-[-1%] right-auto z-[1] block h-[130px] w-[108px] -scale-x-100 rotate-[158deg] opacity-[0.2] mix-blend-multiply sm:bottom-[10%] sm:left-auto sm:right-[-1%] sm:h-[170px] sm:w-[140px] sm:scale-x-100 sm:rotate-180 lg:hidden" />

      <div className="section-frame section-pad grid min-h-[calc(100svh-104px)] w-full items-center gap-10 py-10 lg:min-h-screen lg:[direction:ltr] lg:grid-cols-[1.05fr_.95fr] lg:gap-0 lg:py-0">
        <Reveal direction="left" amount={0.12} className="relative order-1 h-[56vh] min-h-[390px] overflow-hidden rounded-tr-[12rem] shadow-[0_34px_78px_rgba(12,50,41,0.2)] lg:col-start-1 lg:h-[78vh] lg:min-h-[620px] lg:rounded-tr-[20rem]">
          <div className="image-grain absolute inset-0 left-[-10%] w-[110%] lg:left-[-12%] lg:w-[112%]" style={{ WebkitMaskImage: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.65) 65%)', maskImage: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.65) 65%)' }}>
            <Image
              src={siteImages.hero}
              alt="صالة مناسبات لمة خير من الداخل"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              quality={90}
              priority
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-[46%] bg-gradient-to-r from-[#f8f4ef]/86 via-[#f8f4ef]/25 to-transparent" />
        </Reveal>

        <div className="relative order-2 z-10 flex flex-col items-center text-center lg:col-start-2 lg:items-end lg:pr-[clamp(28px,5vw,94px)] lg:text-right">
          

          <Reveal direction="right" delay={0.04}>
            <h1 className="heading-font text-[clamp(3.2rem,6.2vw,7.25rem)] font-semibold leading-[1.22] tracking-[-0.055em] text-[#0b3329]">
              لحظاتك
              <br />
              تستحق التميز
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <p className="mt-6 max-w-[520px] text-[15px] font-medium leading-[2.15] text-[#6f7067] lg:text-[clamp(15px,1.2vw,19px)]">
              في لمة خير، تتحول كل مناسبة إلى تجربة استثنائية حيث يلتقي الذوق الرفيع بالأصالة والضيافة الأصيلة.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.28}>
            <div dir="rtl" className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-end">
              <a href="#cta" className="btn-solid w-[158px]">
                احجز مناسبتك
              </a>
              <a href="#services" className="btn-outline w-[158px]">
                اكتشف خدماتنا
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
