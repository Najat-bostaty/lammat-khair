import Image from 'next/image'
import Link from 'next/link'
import { CakeSlice, CookingPot, Landmark, Trees, UtensilsCrossed } from 'lucide-react'
import { siteImages } from '@/lib/assets'
import { Flourish } from '@/components/Ornaments'
import { Reveal } from '@/components/Reveal'

const iconClass = 'h-full w-full stroke-[1.45]'

const services = [
  { title: 'صالة المناسبات', href: '/event-hall', image: siteImages.hall, Icon: Landmark, dir: 'right' as const },
  { title: 'الفرن والحلويات', href: '/bakery', image: siteImages.dining, Icon: CakeSlice, dir: 'up' as const },
  { title: 'المطبخ الشرقي', href: '/eastern-kitchen', image: siteImages.food, Icon: CookingPot, dir: 'scale' as const },
  { title: 'المندي اليمني', href: '/yemeni-mandi', image: siteImages.mandi, Icon: UtensilsCrossed, dir: 'up' as const },
  { title: 'المنتزه والجلسات', href: '/garden-lounge', image: siteImages.park, Icon: Trees, dir: 'left' as const },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-desktop-screen luxury-surface relative isolate overflow-hidden">
      <img src="/ornaments/floral-tall.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-10 top-16 block h-[220px] w-[160px] -rotate-[8deg] opacity-[0.07] mix-blend-multiply sm:h-[300px] sm:w-[220px] lg:h-[390px] lg:w-[290px]" />
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-8 block h-[190px] w-[150px] rotate-180 opacity-[0.07] mix-blend-multiply sm:h-[260px] sm:w-[210px] lg:h-[340px] lg:w-[270px]" />

      <div className="section-frame section-pad flex min-h-screen flex-col justify-center py-20">
        <Reveal direction="down" className="text-center">
          <p className="mb-3 text-[15px] font-semibold text-[#b98a43] lg:text-[18px]">خدماتنا</p>
          <h2 className="heading-font text-[clamp(2.15rem,3.9vw,4.8rem)] font-semibold tracking-[-0.05em] text-[#0b3329]">
            تجارب متكاملة تحت سقف واحد
          </h2>
          <Flourish className="mx-auto mt-4 h-7 w-48 text-[#b98a43]/75" />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:mt-[7vh] lg:grid-cols-5 lg:gap-[clamp(18px,2.2vw,38px)]" dir="rtl">
          {services.map((service, index) => {
            const Icon = service.Icon
            return (
              <Reveal key={service.title} direction={service.dir} delay={index * 0.08} amount={0.2} className={index === services.length - 1 ? 'col-span-2 w-[calc(50%-6px)] justify-self-center sm:w-[calc(50%-12px)] lg:col-span-1 lg:w-auto' : ''}>
                <Link href={service.href} className="group block">
                  <article className="fine-border relative h-[225px] overflow-hidden bg-[#fbf8f3]/66 text-center transition duration-300 group-hover:-translate-y-2 group-hover:border-[#b98a43] group-hover:shadow-[0_28px_58px_rgba(12,50,41,0.16)] sm:h-[290px] lg:h-[clamp(345px,42vh,460px)]" style={{ borderRadius: '150px 150px 8px 8px / 170px 170px 8px 8px' }}>
                    <div className="mx-auto mt-6 h-[38px] w-[46px] text-[#b98a43] transition duration-300 group-hover:-translate-y-1 sm:mt-8 sm:h-[50px] sm:w-[62px] lg:mt-[clamp(35px,5vh,58px)] lg:h-[clamp(58px,6vh,76px)] lg:w-[clamp(72px,6vw,88px)]">
                      <Icon className={iconClass} />
                    </div>
                    <div className="mx-2 mt-3 h-[76px] overflow-hidden bg-[#eadfce] sm:mx-4 sm:h-[108px] lg:mx-[18px] lg:mt-[clamp(18px,3vh,28px)] lg:h-[clamp(120px,17vh,175px)]">
                      <Image
                        src={service.image}
                        alt={`صورة ${service.title} في لمة خير`}
                        width={360}
                        height={230}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 50vw, 100vw"
                        quality={88}
                      />
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold text-[#0b3329] sm:mt-5 sm:text-[20px] lg:text-[clamp(20px,1.7vw,28px)]">{service.title}</h3>
                    <div className="mt-1 text-[11px] font-bold text-[#b98a43] sm:mt-2 sm:text-[13px] lg:text-[15px]">
                      اكتشف المزيد <span aria-hidden="true">ــ</span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
