import { Flourish } from '@/components/Ornaments'
import { Reveal, FloatOnView } from '@/components/Reveal'

const icons = {
  star: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="m24 4 6.1 12.3 13.6 2-9.8 9.5 2.3 13.5L24 34.9 11.8 41.3l2.3-13.5-9.8-9.5 13.6-2L24 4Z" />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 42V19C10 10.7 16.3 5 24 5s14 5.7 14 14v23" />
      <path d="M15 42V20c0-5.8 4-10 9-10s9 4.2 9 10v22M20 42V24h8v18" />
      <path d="M15 24h18M10 42h28" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 38c24 1 32-14 29-31-20 0-34 12-29 31Z" />
      <path d="M11 37c9-11 18-17 27-24M20 19c-3-5-6-8-10-10M26 15c-1-5 0-9 3-13" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 41S8 31.8 8 18.8C8 12.6 12 9 17 9c3 0 5.5 1.5 7 4 1.5-2.5 4-4 7-4 5 0 9 3.6 9 9.8C40 31.8 24 41 24 41Z" />
      <path d="M12 35c-4 2-6 5-7 8M36 35c4 2 6 5 7 8" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 5 39 11v12c0 10.2-6.2 17-15 20-8.8-3-15-9.8-15-20V11L24 5Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  ),
}

const features = [
  { title: 'تجارب لا تُنسى', desc: 'نصنع ذكريات جميلة تبقى في القلب', icon: icons.star, dir: 'right' as const },
  { title: 'أجواء راقية', desc: 'تصميم أنيق وتجربة مريحة بكل تفاصيلها', icon: icons.arch, dir: 'up' as const },
  { title: 'مكونات طازجة', desc: 'نختار الأفضل يومياً لنقدم نكهة لا تُضاهى', icon: icons.leaf, dir: 'scale' as const },
  { title: 'ضيافة أصيلة', desc: 'تراث من الكرم وأسلوب خدمة راقٍ', icon: icons.heart, dir: 'up' as const },
  { title: 'جودة عالية', desc: 'نلتزم بأعلى معايير الجودة في كل تفاصيلنا', icon: icons.shield, dir: 'left' as const },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative isolate flex min-h-[78svh] scroll-mt-28 overflow-hidden py-20 text-[#fbf8f3] lg:py-0">
      <div className="absolute inset-0 dark-luxury-surface" />
      <FloatOnView className="pointer-events-none absolute -left-40 bottom-[-20%] block h-[180px] w-[56px] opacity-[0.6] sm:h-[320px] sm:w-[18vw] lg:h-[74vh] lg:w-[22vw] rotate-[-9deg]">
        <img src="/ornaments/floral-light.svg" alt="" aria-hidden="true" className="h-full w-full object-contain opacity-[0.2] " />
      </FloatOnView>
      <FloatOnView className="pointer-events-none absolute -right-17 top-[-10%] block h-[160px] w-[42px] rotate-165 opacity-[0.14] sm:h-[260px] sm:w-[14vw] lg:h-[54vh] lg:w-[18vw]" delay={0.12}>
        <img src="/ornaments/floral-light.svg" alt="" aria-hidden="true" className="h-full w-full object-contain opacity-[0.2]" />
      </FloatOnView>

      <div className="section-frame section-pad relative z-10 flex w-full flex-col justify-center">
        <Reveal direction="down" className="text-center">
          <h2 className="heading-font text-[clamp(2.1rem,3.8vw,4.6rem)] font-semibold leading-none tracking-[-0.04em] text-[#fbf8f3]">
            لماذا تختارنا
          </h2>
          <Flourish className="mx-auto mt-4 h-7 w-52 text-[#d7b672]" />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:mt-[8vh] lg:grid-cols-5 lg:gap-0" dir="rtl">
          {features.map((feature, index) => (
            <Reveal key={feature.title} direction={feature.dir} delay={index * 0.09} className={index === features.length - 1 ? 'col-span-2 w-full lg:col-span-1 lg:w-auto' : ''}>
              <article className="relative flex min-h-[170px] flex-col items-center justify-center rounded-[22px] border border-[#d7b672]/15 bg-white/[.025] px-3 text-center sm:min-h-[210px] sm:px-7 lg:min-h-[250px] lg:rounded-none lg:border-0 lg:bg-transparent">
                {index !== 0 && <span className="absolute bottom-[20px] right-0 top-[24px] hidden w-px bg-[#d7b672]/42 lg:block" />}
                <div className="mb-3 h-[46px] w-[46px] text-[#d7b672] sm:mb-5 sm:h-[64px] sm:w-[64px] lg:h-[78px] lg:w-[78px]">{feature.icon}</div>
                <h3 className="mb-2 text-[16px] font-bold text-[#fbf8f3] sm:mb-3 sm:text-[20px] lg:text-[clamp(20px,1.55vw,27px)]">{feature.title}</h3>
                <p className="max-w-[190px] text-[11px] font-medium leading-[1.8] text-[#fbf8f3]/82 sm:text-[13px] lg:text-[clamp(13px,1vw,16px)]">{feature.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
