import Image from 'next/image'
import { siteImages } from '@/lib/assets'
import { Flourish } from '@/components/Ornaments'
import { Reveal, FloatOnView } from '@/components/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="section-desktop-screen relative isolate overflow-hidden bg-[#f8f4ef]">
      <div className="absolute left-0 top-[5%] block h-[440px] w-[220px] rounded-r-[96px] bg-[#0b3329] sm:h-[520px] sm:w-[24vw] lg:h-[68vh] lg:w-[30vw]" />
      <FloatOnView className="pointer-events-none absolute bottom-[6%] left-[3%] z-[1] block h-[120px] w-[180px] opacity-[0.14] sm:h-[180px] sm:w-[24vw] lg:h-[70vh] lg:w-[21vw]">
        <img src="/ornaments/floral-light.svg" alt="" aria-hidden="true" className="h-full w-full object-contain " />
      </FloatOnView>
      <img src="/ornaments/building-line.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-[-1vw] top-[50vh] block h-[180px] w-[120px] opacity-[0.07] mix-blend-multiply sm:h-[300px] sm:w-[220px] lg:h-[56vh] lg:w-[25vw]" />

      <div className="section-frame section-pad grid min-h-screen items-center gap-12 py-20 lg:[direction:ltr] lg:grid-cols-[1.04fr_.96fr] lg:py-0">
        <Reveal direction="left" className="relative z-10 order-1 mx-auto h-[440px] w-full max-w-[740px] lg:col-start-1 lg:mx-0 lg:h-[68vh] lg:max-w-none lg:pl-[5vw]">
          <div className="arch-image soft-image-shadow fine-border relative h-full w-full overflow-hidden bg-[#eadfce] lg:max-w-[680px]">
            <Image
              src={siteImages.garden}
              alt="ضيافة وأطباق من لمة خير"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              quality={88}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3329]/18 via-transparent to-white/8" />
          </div>
        </Reveal>

        <div className="relative z-10 order-2 flex flex-col items-center text-center lg:col-start-2 lg:items-center lg:pr-[4vw] lg:text-center">
          <Reveal direction="right" delay={0.04}>
            <p className="mb-3 text-[15px] font-semibold text-[#b98a43] lg:text-[18px]">عن لمة خير</p>
            <h2 className="heading-font text-[clamp(2.35rem,4.25vw,5.1rem)] font-semibold leading-[1.25] tracking-[-0.05em] text-[#0b3329]">
              ضيافة تُجسّد الأصالة
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <Flourish className="mx-auto mt-4 h-7 w-44 text-[#b98a43]/72" />
          </Reveal>

          <Reveal direction="right" delay={0.22}>
            <p className="mt-7 max-w-[520px] text-center text-[15px] font-medium leading-[2.1] text-[#6f7067] lg:text-[clamp(15px,1.15vw,18px)]">
              من قلب التراث، نقدم تجربة ضيافة متكاملة تجمع بين الجمال، الجودة، والأصالة، لأن في لمة خير نهتم ليبقى ضيوفنا بلحظات لا تُنسى.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.32}>
            <a href="#services" className="mt-8 inline-flex items-center gap-3 border-b border-[#b98a43] pb-2 text-[14px] font-extrabold text-[#0b3329] transition hover:text-[#b98a43] lg:text-[16px]">
              تعرف علينا أكثر
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
