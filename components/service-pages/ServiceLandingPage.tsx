import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { ArrowDown, CalendarCheck, ChevronDown, Eye, MessageCircle } from 'lucide-react'
import ServicePageHeader from '@/components/ServicePageHeader'
import SocialBar from '@/components/SocialBar'
import Footer from '@/components/Footer'
import { Flourish } from '@/components/Ornaments'
import { FloatOnView, Reveal } from '@/components/Reveal'
import type { ServiceCard, ServicePageData } from './service-data'
import { contact } from '@/lib/contact'
import { siteImages } from '@/lib/assets'
import EasternDishesCarousel from './EasternDishesCarousel'

const iconClass = 'h-full w-full stroke-[1.45]'

function ServiceIcon({ Icon, className = '' }: { Icon: LucideIcon; className?: string }) {
  return <Icon className={`${iconClass} ${className}`} />
}

function SectionTitle({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <Reveal direction="down" className="text-center">
      {eyebrow && <p className={`mb-2 text-[14px] font-bold lg:text-[16px] ${light ? 'text-[#d7b672]' : 'text-[#b98a43]'}`}>{eyebrow}</p>}
      <h2 className={`heading-font text-[clamp(2rem,3.6vw,4.7rem)] font-semibold leading-tight tracking-[-0.05em] ${light ? 'text-[#fbf8f3]' : 'text-[#0b3329]'}`}>
        {title}
      </h2>
      <Flourish className={`mx-auto mt-4 h-7 w-48 ${light ? 'text-[#d7b672]' : 'text-[#b98a43]/75'}`} />
    </Reveal>
  )
}

function HeroStat({ item, index, light = false }: { item: ServiceCard; index: number; light?: boolean }) {
  const Icon = item.icon
  return (
    <Reveal direction={index % 2 === 0 ? 'up' : 'scale'} delay={index * 0.08} amount={0.18}>
      <article className={`relative h-full min-h-[126px] rounded-[26px] border px-5 py-6 text-center shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${
        light
          ? 'border-[#d7b672]/30 bg-[#fbf8f3]/8 text-[#fbf8f3] hover:bg-[#fbf8f3]/12'
          : 'border-[#d8cab4]/90 bg-[#fbf8f3]/58 text-[#143d35] hover:border-[#b98a43]/70 hover:bg-[#fbf8f3]'
      }`}>
        <div className={`mx-auto mb-3 h-10 w-10 ${light ? 'text-[#d7b672]' : 'text-[#b98a43]'}`}>
          <Icon className={iconClass} />
        </div>
        <h3 className="text-[16px] font-extrabold lg:text-[18px]">{item.title}</h3>
        <p className={`mx-auto mt-2 max-w-[210px] text-[12px] font-medium leading-[1.8] lg:text-[13px] ${light ? 'text-[#fbf8f3]/78' : 'text-[#6f7067]'}`}>{item.desc}</p>
      </article>
    </Reveal>
  )
}

function Hero({ data }: { data: ServicePageData }) {
  const Icon = data.Icon

  if (data.variant === 'mandi') {
    return (
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#f5eddf] pt-[104px] lg:h-screen lg:min-h-[680px] lg:pt-[122px]">
        <div className="absolute bottom-0 left-0 top-[64px] w-full lg:top-[76px] lg:w-[58%]">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            sizes="(min-width:1024px) 58vw,100vw"
            className="object-cover object-[40%_72%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,24,.38),rgba(6,30,24,.78))] lg:bg-[linear-gradient(90deg,transparent_55%,#f5eddf_100%)]" />
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#f5eddf] lg:block" />

        <div className="section-frame section-pad relative z-10 flex min-h-[656px] items-start pt-12 lg:min-h-0 lg:h-full lg:pt-[clamp(2rem,4.5vh,4rem)]">
          <Reveal direction="right" className="ml-auto w-full px-2 py-5 text-center lg:w-[39%] lg:p-0 lg:text-right" dir="rtl">
            <div className="mb-4 flex items-center justify-center gap-3 text-[14px] font-extrabold text-[#a9762f] lg:justify-start lg:text-[16px]">
              <span className="h-px w-12 bg-[#d7b672]" />
              <span>{data.eyebrow}</span>
              <span className="text-[12px] text-[#6c776f]">على الأصول</span>
            </div>

            <h1 className="heading-font mx-auto max-w-[620px] text-[clamp(3rem,4.35vw,5.8rem)] font-semibold leading-[1.08] tracking-[-.055em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,.5)] lg:mx-0 lg:text-[#0b3329] lg:drop-shadow-none">
              {data.title}
            </h1>

            <p className="mx-auto mt-6 max-w-[450px] pl-14 pr-5 text-[15px] font-medium leading-[2] text-white/85 drop-shadow-[0_4px_12px_rgba(0,0,0,.65)] lg:mx-0 lg:mt-5 lg:max-w-[570px] lg:px-0 lg:text-[17px] lg:text-[#59655f] lg:drop-shadow-none">
              {data.intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#mandi-majlis" className="inline-flex min-h-[48px] items-center gap-3 bg-[#0b3329] px-7 text-[14px] font-extrabold text-white shadow-[0_14px_32px_rgba(11,51,41,.18)] transition hover:-translate-y-1 hover:bg-[#12463a]">
                اكتشف تجربة المندي <ArrowDown className="h-4 w-4" />
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center gap-3 border border-white/65 bg-black/10 px-6 text-[14px] font-extrabold text-white backdrop-blur-sm transition hover:bg-white/15 lg:border-[#b98a43]/55 lg:bg-transparent lg:text-[#0b3329] lg:backdrop-blur-none lg:hover:bg-white/60">
                احجز لمّتكم <MessageCircle className="h-4 w-4 text-[#b98a43]" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/25 pt-5 text-[12px] font-bold text-white/80 lg:justify-start lg:border-[#b98a43]/20 lg:text-[13px] lg:text-[#617068]">
              {['أرز عطري', 'دجاج محمّر', 'جلسة عربية'].map((label) => (
                <span key={label} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rotate-45 bg-[#d7b672]" />{label}</span>
              ))}
            </div>
          </Reveal>
        </div>

      </section>
    )
  }

  if (data.variant === 'garden') {
    return (
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#0b3329] pt-[104px] text-[#fbf8f3] lg:min-h-screen lg:pt-[122px]">
        <div className="absolute inset-0">
          <Image src={data.heroImage} alt={data.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,31,.7),rgba(8,40,31,.16),rgba(8,40,31,.62))]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#f8f4ef] via-[#f8f4ef]/22 to-transparent" />
        </div>
        <FloatOnView className="pointer-events-none absolute right-[5%] top-[24%] block h-[110px] w-[110px] opacity-[0.13] invert sm:h-[170px] sm:w-[170px] lg:h-[46vh] lg:w-[18vw]">
          <img src="/ornaments/floral-light.svg" alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </FloatOnView>
        <div className="section-frame section-pad relative z-10 flex min-h-[calc(92svh-104px)] flex-col items-center justify-center text-center lg:min-h-[calc(100svh-122px)]">
          <Reveal direction="scale" className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#d7b672]/45 bg-[#fbf8f3]/10 text-[#d7b672] shadow-[0_20px_60px_rgba(0,0,0,.25)] backdrop-blur-md lg:h-[106px] lg:w-[106px]">
            <Icon className="h-12 w-12 stroke-[1.35] lg:h-16 lg:w-16" />
          </Reveal>
          <Reveal direction="down" delay={0.08}>
            <p className="mt-7 text-[16px] font-bold text-[#d7b672] lg:text-[19px]">{data.eyebrow}</p>
            <h1 className="heading-font mt-3 max-w-[880px] text-[clamp(3rem,6.8vw,8.7rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-white">
              {data.title}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] font-medium leading-[2] text-[#fbf8f3]/88 lg:text-[20px]">{data.intro}</p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d7b672]/45 bg-[#fbf8f3]/10 px-5 py-3 text-[13px] font-extrabold text-[#d7b672] backdrop-blur-md lg:text-[15px]">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              استكشف تفاصيل القسم
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  if (data.variant === 'hall') return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#081f19] pt-[104px] lg:pt-[122px]">
      <div className="absolute -inset-1"><Image src={data.heroImage} alt={data.title} fill priority className="scale-[1.025] object-cover blur-[1.5px]" sizes="100vw"/><div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,25,20,.12),rgba(5,25,20,.3)_55%,rgba(5,25,20,.58))]"/></div>
      <div className="pointer-events-none absolute inset-x-[6%] top-[16%] bottom-[7%] rounded-t-[240px] bg-[linear-gradient(180deg,rgba(5,31,24,.08),rgba(5,31,24,.26)_50%,rgba(5,31,24,.5))] backdrop-blur-[.7px] lg:inset-x-[13%]" />
      <div className="pointer-events-none absolute inset-x-[6%] top-[16%] bottom-[7%] rounded-t-[240px] border border-[#d7b672]/85 shadow-[inset_0_0_28px_rgba(215,182,114,.08)] lg:inset-x-[13%]" />
      <div className="pointer-events-none absolute inset-x-[7.2%] top-[18%] bottom-[5%] rounded-t-[220px] border border-[#f0d9aa]/55 lg:inset-x-[14.2%]" />
      <div className="section-frame section-pad relative z-10 flex min-h-[calc(100svh-104px)] items-end justify-center pb-14 text-center text-white lg:min-h-[calc(100svh-122px)] lg:pb-20">
        <Reveal direction="up" className="max-w-[920px] px-4 py-6 drop-shadow-[0_16px_34px_rgba(0,0,0,.55)] lg:px-10 lg:py-8">
          <p className="text-[15px] font-bold text-[#e4c88f] lg:text-[18px]">{data.eyebrow}</p>
          <h1 className="heading-font mt-2 text-[clamp(3rem,6.4vw,8.2rem)] font-semibold leading-[1.06] tracking-[-.06em]">{data.title}</h1>
          <Flourish className="mx-auto mt-4 h-7 w-48 text-[#e4c88f]"/>
          <p className="mx-auto mt-4 max-w-[690px] text-[14px] font-medium leading-[2] text-white/88 lg:text-[18px]">{data.intro}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-gold min-w-[190px] gap-2"><MessageCircle className="h-4 w-4" />استفسر عن الموعد</a>
            <a href="#hall-tour" className="inline-flex min-h-[42px] min-w-[190px] items-center justify-center gap-2 border border-white/55 bg-white/8 px-7 text-[14px] font-extrabold text-white backdrop-blur-sm transition hover:bg-white/16"><Eye className="h-4 w-4" />شاهد الصالة</a>
          </div>
        </Reveal>
      </div>
    </section>
  )

  if (data.variant === 'eastern') return (
    <section className="relative isolate overflow-hidden bg-[#f6f0e6] pt-[104px] lg:h-screen lg:min-h-[720px] lg:pt-[122px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(185,138,67,.16),transparent_24rem),radial-gradient(circle_at_88%_72%,rgba(11,51,41,.055),transparent_28rem)]" />
      <div className="pointer-events-none absolute right-[-7rem] top-[12%] h-[25rem] w-[25rem] rounded-full border border-[#b98a43]/16" />
      <img src="/ornaments/floral-tall.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-[-5%] h-[42%] w-[16%] opacity-[.055] mix-blend-multiply" />

      <div className="section-frame section-pad relative z-10 grid min-h-[calc(100svh-104px)] items-center gap-10 py-10 lg:h-[calc(100vh-122px)] lg:min-h-[598px] lg:grid-cols-[.92fr_1.08fr] lg:gap-[5vw] lg:py-4 lg:[direction:ltr]">
        <Reveal direction="left" className="relative mx-auto h-[470px] w-full max-w-[680px] lg:h-[min(72vh,680px)] lg:-translate-y-3">
          <div className="absolute bottom-[3%] left-[-3%] top-[8%] w-[88%] rounded-t-[45%] border border-[#b98a43]/40" />
          <div className="absolute inset-x-[5%] bottom-[5%] top-0 overflow-hidden rounded-t-[46%] rounded-b-[30px] border-[8px] border-[#fbf8f3] bg-[#eadfce] shadow-[0_35px_90px_rgba(50,42,26,.16)]">
            <Image src={data.heroImage} alt={data.title} fill priority className="object-cover object-center transition duration-[1400ms] hover:scale-105" sizes="(min-width:1024px) 48vw,100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.08),transparent_56%,rgba(11,51,41,.18))]" />
          </div>
          <div className="absolute bottom-[2%] right-[1%] flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-[#f6f0e6] bg-[#0b3329] text-[#d7b672] shadow-[0_18px_40px_rgba(11,51,41,.24)] lg:h-28 lg:w-28">
            <Icon className="h-12 w-12 stroke-[1.2] lg:h-16 lg:w-16" />
          </div>
        </Reveal>

        <div className="text-center lg:-translate-y-10 lg:text-right" dir="rtl">
          <Reveal direction="right">
            <div className="mb-4 inline-flex items-center gap-3 text-[14px] font-extrabold text-[#b98a43] lg:text-[15px]"><span className="h-px w-10 bg-[#b98a43]/70" />{data.eyebrow}</div>
            <h1 className="heading-font max-w-[680px] text-[clamp(3rem,5vw,6.4rem)] font-semibold leading-[1.02] tracking-[-.06em] text-[#0b3329]">{data.title}</h1>
            <Flourish className="mx-auto mt-3 h-6 w-44 text-[#b98a43] lg:mx-0" />
            <p className="mx-auto mt-4 max-w-[590px] text-[14px] font-medium leading-[2] text-[#66716b] lg:mx-0 lg:text-[16px]">{data.intro}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {['مقبلات طازجة', 'مشاوي على الفحم', 'أطباق رئيسية'].map((label) => <span key={label} className="rounded-full border border-[#d8cab4] bg-white/45 px-4 py-2 text-[12px] font-bold text-[#496159]">{label}</span>)}
            </div>
            <a href="#eastern-menu" className="mt-6 inline-flex min-h-[42px] items-center gap-3 border-b border-[#b98a43]/70 px-1 text-[13px] font-extrabold text-[#0b3329] transition hover:gap-5 hover:text-[#b98a43]">
              اكتشف حكاية المائدة <ArrowDown className="h-4 w-4 text-[#b98a43]" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )

  if (data.variant === 'bakery') return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_25%,#fff_0,#fbf4ea_48%,#efe1d2_100%)] pt-[104px] lg:pt-[122px]">
      <img src="/ornaments/floral-side.svg" alt="" className="pointer-events-none absolute -right-8 top-[17%] h-[54%] w-[18%] opacity-[.10]"/>
      <div className="section-frame section-pad grid min-h-[calc(100svh-104px)] items-center gap-10 py-14 lg:min-h-[calc(100svh-122px)] lg:grid-cols-[1.12fr_.88fr] lg:py-0 lg:[direction:ltr]">
        <Reveal direction="left" className="relative h-[440px] lg:h-[72vh]">
          <div className="absolute inset-[7%_2%_0_10%] rounded-[52%_52%_24px_24px] border border-[#b98a43]/35"/>
          <div className="relative h-full overflow-hidden rounded-[52%_52%_28px_28px] border-[9px] border-white shadow-[0_35px_90px_rgba(91,60,35,.20)]"><Image src={data.heroImage} alt={data.title} fill priority className="object-cover transition duration-[1400ms] hover:scale-105" sizes="(min-width:1024px) 55vw,100vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#5b3d2a]/25 via-transparent to-white/15"/></div>
          <div className="absolute -bottom-5 -right-4 flex h-28 w-28 items-center justify-center rounded-full border-[7px] border-[#fbf8f3] bg-[#0b3329] text-[#d7b672] shadow-xl lg:h-36 lg:w-36"><Icon className="h-14 w-14 stroke-[1.25] lg:h-20 lg:w-20"/></div>
        </Reveal>
        <div className="text-center lg:text-right" dir="rtl"><Reveal direction="right"><p className="text-[16px] font-bold text-[#b98a43]">{data.eyebrow}</p><h1 className="heading-font mt-3 text-[clamp(3.2rem,6vw,7.7rem)] font-semibold leading-[1.07] tracking-[-.065em] text-[#0b3329]">{data.title}</h1><Flourish className="mx-auto mt-5 h-7 w-48 text-[#b98a43] lg:mx-0"/><p className="mx-auto mt-6 max-w-[610px] text-[15px] font-medium leading-[2.15] text-[#6f7067] lg:mx-0 lg:text-[18px]">{data.intro}</p><div className="mt-8 inline-flex rounded-full border border-[#b98a43]/50 bg-white/60 px-6 py-3 text-[14px] font-extrabold text-[#0b3329] shadow-sm">حِرفة تُرى قبل أن تُذاق</div></Reveal></div>
      </div>
    </section>
  )

  return (
    <section className="relative isolate overflow-hidden bg-[#f7efe3] pt-[104px] lg:min-h-[92svh] lg:pt-[122px]">
      <div className="absolute inset-0 lg:right-auto lg:w-[54%]">
        <Image src={data.heroImage} alt={data.title} fill priority className="object-cover lg:object-[44%_center]" sizes="(min-width:1024px) 54vw,100vw"/>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,239,227,.74),rgba(247,239,227,.9)_56%,#f7efe3_100%)] lg:bg-[linear-gradient(90deg,rgba(247,239,227,.02),rgba(247,239,227,.14)_62%,#f7efe3_100%)]"/>
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#f7efe3] lg:block" />
      <div className="absolute -left-[13vw] top-[18%] h-[38vw] w-[38vw] rounded-full border border-[#d7b672]/35"/><div className="absolute -left-[9vw] top-[23%] h-[29vw] w-[29vw] rounded-full border border-white/45"/>
      <div className="section-frame section-pad relative z-10 flex min-h-[calc(92svh-104px)] items-center justify-center py-14 lg:min-h-[calc(92svh-122px)] lg:justify-end lg:py-0 lg:[direction:ltr]">
        <Reveal direction="right" className="w-full max-w-[640px] text-center lg:mr-[1vw] lg:w-[40%] lg:text-right" dir="rtl"><div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#0b3329] text-[#d7b672] shadow-[0_20px_50px_rgba(11,51,41,.22)]"><Icon className="h-11 w-11 stroke-[1.3]"/></div><p className="text-[16px] font-bold text-[#b98a43]">{data.eyebrow}</p><h1 className="heading-font mt-3 text-[clamp(3rem,5.8vw,7.4rem)] font-semibold leading-[1.06] tracking-[-.065em] text-[#0b3329]">{data.title}</h1><Flourish className="mx-auto mt-5 h-7 w-48 text-[#b98a43] lg:mx-0"/><p className="mx-auto mt-6 max-w-[620px] text-[15px] font-medium leading-[2.1] text-[#59655f] lg:mx-0 lg:text-[18px]">{data.intro}</p><div className="mt-8 inline-flex items-center gap-3 border-b border-[#b98a43]/65 pb-2 font-extrabold text-[#0b3329]"><ArrowDown className="h-4 w-4 animate-bounce text-[#b98a43]"/>رحلة إلى أصل المندي</div></Reveal>
      </div>
    </section>
  )
}

function StatsBand({ data }: { data: ServicePageData }) {
  const light = false
  return (
    <section className={`relative isolate overflow-hidden py-10 ${light ? 'dark-luxury-surface text-[#fbf8f3]' : 'bg-[#f8f4ef] text-[#143d35]'}`}>
      {light && <img src="/ornaments/floral-light.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-16 top-[-30%] block h-[140px] w-[70px] opacity-[0.11] sm:h-[220px] sm:w-[110px] lg:h-[520px] lg:w-[260px]" />}
      <div className="section-frame section-pad">
      <div className={`grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 ${light ? '' : 'rounded-[26px] border border-[#d8cab4]/90 bg-[#fbf8f3]/64 p-3 shadow-[0_20px_54px_rgba(12,50,41,0.07)] sm:rounded-[34px] sm:p-4'}`} dir="rtl">
          {data.heroStats.map((item, index) => <HeroStat key={item.title} item={item} index={index} light={light} />)}
        </div>
      </div>
    </section>
  )
}

function StorySection({ data }: { data: ServicePageData }) {
  const isDark = data.variant === 'mandi'
  const imageFirst = data.variant === 'garden' || data.variant === 'hall'

  return (
    <section id="service-story" className={`relative isolate scroll-mt-28 overflow-hidden py-20 lg:py-28 ${isDark ? 'text-[#fbf8f3]' : 'bg-[#fbf8f3] text-[#143d35]'}`}>
      {isDark && <div className="absolute inset-0 dark-luxury-surface" />}
      {!isDark && <img src="/ornaments/floral-tall.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-12 top-[7%] block h-[130px] w-[85px] opacity-[0.06] mix-blend-multiply sm:h-[230px] sm:w-[160px] lg:h-[420px] lg:w-[280px]" />}
      <div className={`section-frame section-pad relative z-10 grid items-center gap-12 lg:grid-cols-2 ${imageFirst ? 'lg:[direction:ltr]' : 'lg:[direction:rtl]'}`}>
        <Reveal direction={imageFirst ? 'left' : 'right'} className={`relative h-[420px] overflow-hidden border border-[#d8cab4]/70 bg-[#eadfce] shadow-[0_30px_70px_rgba(12,50,41,0.16)] lg:h-[560px] ${data.variant === 'hall' ? '' : 'lg:-mr-12 lg:translate-x-4'}`}>
          <Image
            src={data.secondaryImage}
            alt={data.story.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-[1200ms] hover:scale-105"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b3329]/32 via-transparent to-white/8" />
          <div className="absolute bottom-5 right-5 rounded-full border border-[#d7b672]/45 bg-[#0b3329]/72 px-4 py-2 text-[12px] font-bold text-[#d7b672] backdrop-blur-md">{data.eyebrow}</div>
        </Reveal>

        <div className="text-center lg:text-right relative z-10" dir="rtl">
          <Reveal direction={imageFirst ? 'right' : 'left'}>
            <p className={`mb-3 text-[15px] font-bold lg:text-[17px] ${isDark ? 'text-[#d7b672]' : 'text-[#b98a43]'}`}>{data.story.kicker}</p>
            <h2 className={`heading-font text-[clamp(2.25rem,4.3vw,5.8rem)] font-semibold leading-[1.2] tracking-[-0.05em] ${isDark ? 'text-[#fbf8f3]' : 'text-[#0b3329]'}`}>{data.story.title}</h2>
            <Flourish className={`mx-auto mt-4 h-7 w-44 lg:mx-0 ${isDark ? 'text-[#d7b672]' : 'text-[#b98a43]/78'}`} />
          </Reveal>
          <Reveal direction="up" delay={0.14}>
            <p className={`mx-auto mt-7 max-w-[650px] text-[15px] font-medium leading-[2.2] lg:mx-0 lg:text-[17px] ${isDark ? 'text-[#fbf8f3]/78' : 'text-[#6f7067]'}`}>{data.story.body}</p>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {data.story.points.map((point, index) => {
              const Icon = point.icon
              return (
                <Reveal
                  key={point.title}
                  direction="scale"
                  delay={index * 0.08}
                  className={index === data.story.points.length - 1 && data.story.points.length % 2 !== 0 ? 'col-span-2 w-[calc(50%-6px)] justify-self-center md:col-span-1 md:w-auto' : ''}
                >
                  <article className={`rounded-[24px] border px-4 py-6 text-center ${isDark ? 'border-[#d7b672]/24 bg-[#fbf8f3]/8' : 'border-[#d8cab4] bg-[#fbf8f3]/70'}`}>
                    <div className={`mx-auto mb-3 h-10 w-10 ${isDark ? 'text-[#d7b672]' : 'text-[#b98a43]'}`}>
                      <Icon className={iconClass} />
                    </div>
                    <h3 className="text-[15px] font-extrabold">{point.title}</h3>
                    <p className={`mt-2 text-[12px] font-medium leading-[1.8] ${isDark ? 'text-[#fbf8f3]/70' : 'text-[#6f7067]'}`}>{point.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryGrid({ data }: { data: ServicePageData }) {
  const arch = data.variant === 'hall'
  const eyebrow = data.variant === 'hall' ? 'أنواع المناسبات' : data.variant === 'garden' ? 'أنواع الجلسات' : 'أصنافنا'

  return (
    <section id="service-offers" className="relative isolate scroll-mt-28 overflow-hidden bg-[#f8f4ef] py-20 lg:py-28">
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-[-4%] top-[20%] block h-[130px] w-[95px] rotate-180 opacity-[0.07] mix-blend-multiply sm:h-[190px] sm:w-[145px] lg:h-[360px] lg:w-[260px]" />
      <div className="section-frame section-pad">
        <SectionTitle title={data.categoriesTitle} eyebrow={eyebrow} />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4" dir="rtl">
          {data.categories.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} direction={index % 2 === 0 ? 'up' : 'scale'} delay={index * 0.07} className={index === data.categories.length - 1 && data.categories.length % 2 !== 0 ? 'col-span-2 lg:col-span-1' : ''}>
                <figure className="group relative h-[330px] overflow-hidden bg-[#eadfce] shadow-[0_24px_54px_rgba(12,50,41,0.13)] transition duration-300 hover:-translate-y-1 lg:h-[370px]" style={{ borderRadius: arch ? '150px 150px 12px 12px / 170px 170px 12px 12px' : '28px' }}>
                  {item.image && (
                    <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-[1100ms] group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,51,41,.02),rgba(11,51,41,.1)_48%,rgba(11,51,41,.84)_100%)]" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-center text-[#fbf8f3] lg:p-6">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7b672]/45 bg-[#0b3329]/55 text-[#d7b672] backdrop-blur-sm">
                      <Icon className="h-6 w-6 stroke-[1.45]" />
                    </div>
                    <h3 className="text-[20px] font-extrabold leading-[1.35] lg:text-[23px]">{item.title}</h3>
                    <p className="mx-auto mt-2 max-w-[240px] text-[12px] font-medium leading-[1.75] text-white/78">{item.desc}</p>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MandiMajlisSection() {
  return (
    <section id="mandi-majlis" className="relative isolate scroll-mt-28 overflow-hidden bg-[#eadfce] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(185,138,67,.18),transparent_28rem),radial-gradient(circle_at_12%_88%,rgba(11,51,41,.08),transparent_30rem)]" />
      <div className="section-frame section-pad relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16" dir="rtl">
          <Reveal direction="right" className="text-center lg:text-right">
            <p className="text-[14px] font-extrabold text-[#b98a43] lg:text-[16px]">المندي كما يجب أن يُعاش</p>
            <h2 className="heading-font mt-3 text-[clamp(2.5rem,4.6vw,6rem)] font-semibold leading-[1.08] tracking-[-.055em] text-[#0b3329]">مجلس عربي يجمع الطعم والأجواء</h2>
            <Flourish className="mx-auto mt-5 h-7 w-48 text-[#b98a43] lg:mx-0" />
            <p className="mx-auto mt-6 max-w-[580px] text-[15px] font-medium leading-[2.1] text-[#5f665f] lg:mx-0 lg:text-[17px]">جلسات أرضية مريحة، تفاصيل خشبية وإضاءة دافئة، وسفرة مندي مكتملة في المنتصف. المكان مهيأ للّمة العائلية ولقاءات الأصدقاء بخصوصية وراحة.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-right">
              {['جلسات أرضية واسعة', 'أجواء مسائية هادئة', 'سفرة مناسبة للمشاركة', 'إطلالة على المنتزه'].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-[#cdbb9f] bg-[#fbf8f3]/65 px-4 py-4 text-[12px] font-extrabold text-[#143d35] sm:text-[14px]"><span className="h-2 w-2 shrink-0 rounded-full bg-[#b98a43]" />{item}</div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-3 sm:gap-4" dir="ltr">
            <Reveal direction="left" className="relative col-span-12 h-[310px] overflow-hidden rounded-[32px] border-[7px] border-[#f8f4ef] shadow-[0_28px_65px_rgba(40,30,20,.18)] sm:col-span-7 sm:h-[520px]">
              <Image src={siteImages.mandiMajlisTable} alt="المجلس العربي مع سفرة المندي" fill sizes="(min-width:1024px) 42vw,100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f19]/35 to-transparent" />
            </Reveal>
            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-5 sm:grid-cols-1 sm:gap-4">
              <Reveal direction="down" className="relative h-[190px] overflow-hidden rounded-[24px] border-[6px] border-[#f8f4ef] shadow-[0_22px_50px_rgba(40,30,20,.14)] sm:h-[252px]">
                <Image src={siteImages.mandiMajlisDay} alt="المجلس العربي في النهار" fill sizes="(min-width:1024px) 28vw,50vw" className="object-cover" />
              </Reveal>
              <Reveal direction="up" className="relative h-[190px] overflow-hidden rounded-[24px] border-[6px] border-[#f8f4ef] shadow-[0_22px_50px_rgba(40,30,20,.14)] sm:h-[252px]">
                <Image src={siteImages.mandiMajlisEvening} alt="المجلس العربي في المساء" fill sizes="(min-width:1024px) 28vw,50vw" className="object-cover" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BakeryCatalogSection() {
  const groups = [
    { title: 'الحلويات العربية', subtitle: 'أصناف بالقشطة والفستق والمكسرات', items: ['عربي مشكل', 'معمول نباتي', 'هريسة لوز', 'هريسة فستق إكسترا', 'نمورة إكسترا', 'عش البلبل شوكولا', 'عش البلبل مكسرات', 'تاج الملك مكسرات', 'وربات', 'فيصلية', 'وربات قشطة', 'وربات فستق'] },
    { title: 'الكيك والقطع', subtitle: 'قوالب كاملة وخيارات فردية', items: ['مافن', 'قالب كب كيك', 'كيك سادة', 'رول كيك', 'قطعة كب كيك', 'تشيز كيك كبير', 'تشيز كيك صغير', 'قالب كيك', 'قطع موس', 'ريد فيلفت', 'سكسية', 'بودينغ'] },
    { title: 'حلويات متنوعة', subtitle: 'أصناف باردة وغنية بالتفاصيل', items: ['براونيز', 'تشيز كيك', 'قشطوطة', 'تارت فواكه', 'محلاية', 'كاسات ماكس', 'بابا روم', 'شوكليت', 'كريب'] },
    { title: 'المخبوزات', subtitle: 'تشكيلة للضيافة والاستخدام اليومي', items: ['كرواسان', 'سمون سادة', 'سمون مع سمسم', 'خبز همبرغر', 'سمون مالح', 'كعك بحليب', 'كوكيز', 'كعك مالح', 'كعك سمسم', 'كعك حبة بركة', 'كعك سادة', 'معروك قطعة', 'معروك كيس', 'توست', 'كليجة', 'بيتفور نباتي'] },
  ]

  return (
    <section id="bakery-catalog" className="relative isolate scroll-mt-28 overflow-hidden bg-[#fbf8f3] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(185,138,67,.1),transparent_26rem),radial-gradient(circle_at_86%_78%,rgba(11,51,41,.05),transparent_28rem)]" />
      <div className="section-frame section-pad relative z-10">
        <SectionTitle title="دليل الأصناف" eyebrow="من الفرن وواجهة الحلويات" />
        <p className="mx-auto mt-5 max-w-[680px] text-center text-[14px] font-medium leading-[2] text-[#6f7067] lg:text-[16px]">تصفّحوا مجموعاتنا الرئيسية، ويمكنكم التواصل معنا لمعرفة الأصناف المتوفرة حالياً.</p>
        <div className="mx-auto mt-12 grid max-w-[1500px] gap-5 md:grid-cols-2" dir="rtl">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} direction={groupIndex % 2 === 0 ? 'right' : 'left'} delay={groupIndex * 0.05}>
              <article className="h-full overflow-hidden border border-[#d8cab4] bg-[#f8f4ef]/72 shadow-[0_22px_55px_rgba(12,50,41,.07)]">
                <header className="border-b border-[#d8cab4] bg-[#0b3329] px-6 py-6 text-[#fbf8f3] lg:px-8">
                  <h3 className="heading-font text-[30px] font-semibold leading-tight text-white lg:text-[36px]">{group.title}</h3>
                  <p className="mt-2 text-[12px] font-medium text-[#d7b672] lg:text-[14px]">{group.subtitle}</p>
                </header>
                <ul className="grid grid-cols-1 gap-x-7 px-6 py-6 sm:grid-cols-2 lg:px-8 lg:py-8">
                  {group.items.map((item) => <li key={item} className="flex items-center gap-3 border-b border-[#d8cab4]/60 py-3 text-[13px] font-bold text-[#143d35] lg:text-[15px]"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98a43]" />{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 text-center text-[12px] font-medium text-[#6f7067] lg:text-[14px]">تتوفر الأصناف بحسب التحضير؛ للاستفسار عن صنف محدد يرجى التواصل معنا.</p>
      </div>
    </section>
  )
}

function ShowcaseSection({ data }: { data: ServicePageData }) {
  const dark = data.variant === 'hall' || data.variant === 'garden'
  return (
    <section id="service-showcase" className={`relative isolate scroll-mt-28 overflow-hidden py-20 lg:py-28 ${dark ? 'text-[#fbf8f3]' : 'bg-[#fbf8f3] text-[#143d35]'}`}>
      {dark && <div className="absolute inset-0 dark-luxury-surface" />}
      {data.variant === 'garden' && <img src="/ornaments/pavilion-line.svg" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[-4%] left-[-4%] block h-[135px] w-[100px] opacity-[0.14] invert sm:h-[220px] sm:w-[140px] lg:h-[55%] lg:w-[35%]" />}
      <div className="section-frame section-pad relative z-10">
        <SectionTitle title={data.showcaseTitle} eyebrow="مختارات بصرية" light={dark} />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3" dir="rtl">
          {data.showcase.map((item, index) => {
            const Icon = item.icon
            const isLastOddCard = index === data.showcase.length - 1 && data.showcase.length % 2 !== 0
            return (
              <Reveal
                key={item.title}
                direction={index === 1 ? 'scale' : index === 0 ? 'right' : 'left'}
                delay={index * 0.08}
                amount={0.2}
                className={isLastOddCard ? 'col-span-2 w-full md:col-span-1' : ''}
              >
                <article className={`group h-full overflow-hidden rounded-[22px] border shadow-sm transition duration-300 hover:-translate-y-2 sm:rounded-[28px] lg:rounded-[34px] ${isLastOddCard ? 'grid grid-cols-[0.9fr_1.1fr] md:block' : ''} ${dark ? 'border-[#d7b672]/24 bg-[#fbf8f3]/8 hover:bg-[#fbf8f3]/12' : 'border-[#d8cab4] bg-[#fbf8f3]/68 hover:border-[#b98a43]'}`}>
                  {item.image && (
                    <div className={`relative overflow-hidden bg-[#eadfce] ${isLastOddCard ? 'h-full min-h-[170px] md:h-[180px] lg:h-[310px]' : 'h-[135px] sm:h-[170px] lg:h-[310px]'}`}>
                      <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-[1100ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b3329]/35 via-transparent to-white/10" />
                    </div>
                  )}
                  <div className={`flex flex-col justify-center p-3 text-right sm:p-4 lg:p-7`}>
                    <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10 lg:mb-5 lg:h-12 lg:w-12 ${dark ? 'border-[#d7b672]/35 text-[#d7b672]' : 'border-[#d8cab4] text-[#b98a43]'}`}>
                      <Icon className="h-5 w-5 stroke-[1.45] lg:h-7 lg:w-7" />
                    </div>
                    <h3 className={`text-[16px] font-extrabold leading-[1.55] sm:text-[18px] lg:text-[22px] ${dark ? 'text-[#fbf8f3]' : 'text-[#0b3329]'}`}>{item.title}</h3>
                    <p className={`mt-1.5 text-[11px] font-medium leading-[1.65] sm:text-[12px] lg:mt-3 lg:text-[14px] lg:leading-[1.95] ${dark ? 'text-[#fbf8f3]/72' : 'text-[#6f7067]'}`}>{item.desc}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EasternTableGuide() {
  const groups = [
    {
      number: '01', title: 'السلطات', subtitle: 'طازجة كل يوم',
      items: ['جرجير', 'فتوش', 'تبولة', 'خيار بلبن'],
      images: [siteImages.salad1, siteImages.salad2, siteImages.salad3, siteImages.salad4],
    },
    {
      number: '02', title: 'المقبلات', subtitle: 'باردة وساخنة',
      items: ['يلنجي 7 حبات', 'كبة مشوية', 'كبة مقلية حبة', 'بُرَك جبنة', 'بُرَك لحمة', 'بُرَك دجاج', 'مسخّن'],
      images: [siteImages.easternYalanji, siteImages.easternKubbeh, siteImages.easternKibbeh, siteImages.easternPastries],
    },
    {
      number: '03', title: 'السندويش', subtitle: 'خيارات سريعة ومشبعة',
      items: ['سندويشة بطاطا', 'سندويشة سكالوب', 'سندويشة كريسبي', 'سندويشة شيش', 'برغر'],
      images: [siteImages.sandwich1, siteImages.sandwich2, siteImages.sandwich3, siteImages.sandwich4],
    },
    {
      number: '04', title: 'الوجبات الغربية', subtitle: 'أطباق كاملة',
      items: ['وجبة سكالوب', 'وجبة كريسبي', 'وجبة شيش', 'وجبة سوبريم', 'وجبة كوردون بلو', 'وجبة تشكن برغر', 'وجبة فاهيتا', 'إضافة خبز'],
      images: [siteImages.easternMain, siteImages.easternCrispy],
    },
    {
      number: '05', title: 'الوجبات الرئيسية', subtitle: 'قلب المائدة',
      items: ['مندي حبة كاملة', 'مندي نصف حبة', 'مندي شخص واحد', 'فريكة دجاج', 'رز وبازلاء', 'كباب', 'شيش', 'كستا', 'جناحات'],
      images: [siteImages.easternMandiPlate, siteImages.easternRice, siteImages.easternGrill, siteImages.easternWings],
    },
  ]

  return (
    <section id="eastern-menu" className="relative isolate scroll-mt-28 overflow-hidden bg-[#f6f0e6] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(185,138,67,.11),transparent_24rem),radial-gradient(circle_at_8%_82%,rgba(11,51,41,.055),transparent_30rem)]" />
      <img src="/ornaments/floral-tall.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-12 bottom-[8%] h-[360px] w-[230px] opacity-[.05] mix-blend-multiply" />
      <div className="section-frame section-pad relative z-10">
        <SectionTitle eyebrow="كل الأصناف في مكان واحد" title="قائمة المطبخ الشرقي" />
        <p className="mx-auto mt-5 max-w-[720px] text-center text-[14px] font-medium leading-[2] text-[#6f7067] lg:text-[16px]">من المقبلات والسلطات إلى الوجبات الكاملة، تصفّحوا أقسام المائدة واختاروا ما يناسب لمّتكم.</p>
        <div className="mx-auto mt-12 grid max-w-[1480px] gap-6 lg:grid-cols-2" dir="rtl">
          {groups.map((group, index) => (
            <Reveal key={group.number} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 0.05} className={index === groups.length - 1 ? 'lg:col-span-2' : ''}>
              <article className={`group h-full overflow-hidden rounded-[30px] border border-[#d8cab4] bg-[#fbf8f3]/85 shadow-[0_22px_55px_rgba(12,50,41,.075)] ${index === groups.length - 1 ? 'lg:grid lg:grid-cols-[1.15fr_.85fr]' : ''}`}>
                <div className={`grid grid-cols-2 gap-1 bg-[#eadfce] ${index === groups.length - 1 ? 'p-1.5 sm:p-2 lg:order-2 lg:self-center lg:rounded-[24px] lg:bg-transparent lg:p-4' : ''}`}>
                  {group.images.map((src, imageIndex) => (
                    <div key={src} className={`relative overflow-hidden ${group.images.length >= 4 ? 'h-[120px] sm:h-[135px]' : 'h-[230px]'} ${index === groups.length - 1 ? 'rounded-[16px] lg:h-[155px]' : ''}`}>
                      <Image src={src} alt={`${group.title} ${imageIndex + 1}`} fill sizes="(min-width:1024px) 25vw,50vw" className="object-cover transition duration-[1000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b3329]/18 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="p-6 text-right lg:p-8">
                  <div className="flex items-center justify-between gap-4 border-b border-[#d8cab4] pb-5">
                    <div><p className="text-[12px] font-extrabold text-[#b98a43]">{group.subtitle}</p><h3 className="heading-font mt-1 text-[32px] font-semibold text-[#0b3329] lg:text-[38px]">{group.title}</h3></div>
                    <span className="font-serif text-[16px] font-bold tracking-[.12em] text-[#b98a43]/65">{group.number}</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-x-7 sm:grid-cols-2">
                    {group.items.map((item) => <li key={item} className="flex items-center gap-3 border-b border-[#d8cab4]/55 py-3 text-[13px] font-bold text-[#143d35] lg:text-[15px]"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98a43]" />{item}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[12px] font-medium text-[#6f7067] lg:text-[14px]">قد يختلف توفر بعض الأصناف بحسب التحضير اليومي؛ تواصلوا معنا للاستفسار.</p>
      </div>
    </section>
  )
}

function FeaturesSection({ data }: { data: ServicePageData }) {
  return (
    <section id="service-features" className="relative isolate scroll-mt-28 overflow-hidden bg-[#f8f4ef] py-20 lg:py-28">
      <div className="section-frame section-pad">
        <Reveal direction="up" className="mx-auto max-w-[1500px] overflow-hidden rounded-[34px] border border-[#d8cab4]/90 bg-[#fbf8f3]/66 p-5 shadow-[0_22px_62px_rgba(12,50,41,0.07)] lg:p-8">
          <SectionTitle title={data.featureTitle} eyebrow="مزايا وتجهيزات" />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" dir="rtl">
            {data.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Reveal key={feature.title} direction="scale" delay={index * 0.07} amount={0.16}>
                  <article className="relative flex min-h-[190px] flex-col items-center justify-center rounded-[28px] border border-[#e0d4c1] bg-[#fbf8f3]/68 px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#b98a43]/70 hover:bg-[#fffaf4]">
                    <div className="mb-4 h-14 w-14 text-[#b98a43]">
                      <Icon className={iconClass} />
                    </div>
                    <h3 className="text-[18px] font-extrabold text-[#0b3329]">{feature.title}</h3>
                    <p className="mt-3 max-w-[210px] text-[12px] font-medium leading-[1.9] text-[#6f7067]">{feature.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function GalleryStrip({ data }: { data: ServicePageData }) {
  return (
    <section id={data.variant === 'hall' ? 'hall-tour' : 'service-gallery'} className="relative scroll-mt-28 overflow-hidden bg-[#fbf8f3] py-16 lg:py-22">
      <div className="section-frame section-pad">
        <SectionTitle title={data.galleryTitle} eyebrow="معرض مصغر" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5" dir="rtl">
          {data.gallery.map((image, index) => (
            <Reveal key={`${image}-${index}`} direction={index % 2 === 0 ? 'up' : 'down'} delay={index * 0.05} amount={0.15} className={index === data.gallery.length - 1 && data.gallery.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}>
              <div className={`group relative h-[150px] overflow-hidden border border-[#d8cab4] bg-[#eadfce] shadow-sm md:h-[190px] ${index === 0 || index === 4 ? 'rounded-[34px]' : 'rounded-[22px]'}`}>
                <Image src={image} alt={`${data.galleryTitle} ${index + 1}`} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover transition duration-[900ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3329]/18 via-transparent to-white/10 opacity-80" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HallPlanningSection() {
  const steps = [
    ['01', 'الاستفسار', 'حددوا التاريخ ونوع المناسبة وعدد الحضور المتوقع.'],
    ['02', 'زيارة الصالة', 'شاهدوا المساحة والتجهيزات على الطبيعة.'],
    ['03', 'تحديد الترتيب', 'يتم الاتفاق على توزيع المقاعد ومتطلبات الحدث.'],
    ['04', 'يوم المناسبة', 'تكون التفاصيل واضحة والصالة جاهزة لاستقبال ضيوفكم.'],
  ]
  const faqs = [
    ['هل يمكن زيارة الصالة قبل الحجز؟', 'نعم، يمكن التنسيق لزيارة الصالة والاطلاع على المساحة والتجهيزات قبل اتخاذ القرار.'],
    ['هل يمكن تغيير توزيع المقاعد؟', 'يتم اختيار الترتيب الأنسب بحسب نوع المناسبة وعدد الحضور ومتطلبات الحدث.'],
    ['ما المناسبات التي تستقبلها الصالة؟', 'تستقبل حفلات الزفاف والخطوبة والمناسبات العائلية وفعاليات الشركات.'],
    ['كيف أعرف إن كان التاريخ متاحاً؟', 'يمكنكم التواصل مباشرة عبر الهاتف أو واتساب للاستفسار عن التاريخ المطلوب.'],
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f4ef] py-20 lg:py-28">
        <div className="section-frame section-pad">
          <SectionTitle title="من الاستفسار إلى يوم المناسبة" eyebrow="خطوات واضحة" />
          <div className="relative mx-auto mt-12 grid max-w-[1320px] grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[#b98a43]/35 lg:block" />
            {steps.map(([number, title, text], index) => (
              <Reveal key={number} direction="up" delay={index * 0.07} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b98a43] bg-[#f8f4ef] font-serif text-[18px] font-bold text-[#b98a43]">{number}</div>
                <h3 className="mt-5 text-[19px] font-extrabold text-[#0b3329]">{title}</h3>
                <p className="mx-auto mt-2 max-w-[250px] text-[13px] font-medium leading-[1.9] text-[#6f7067]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf8f3] py-20 lg:py-28">
        <div className="section-frame section-pad grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-[7vw]">
          <Reveal direction="right" className="text-center lg:text-right">
            <CalendarCheck className="mx-auto h-12 w-12 stroke-[1.35] text-[#b98a43] lg:mx-0" />
            <p className="mt-4 text-[15px] font-bold text-[#b98a43]">قبل حجز الصالة</p>
            <h2 className="heading-font mt-2 text-[clamp(2.4rem,4vw,5.2rem)] font-semibold leading-[1.2] text-[#0b3329]">أسئلة شائعة</h2>
            <Flourish className="mx-auto mt-4 h-7 w-44 text-[#b98a43]/75 lg:mx-0" />
          </Reveal>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} direction="up" delay={index * 0.04}>
                <details className="group border border-[#d8cab4] bg-[#f8f4ef]/70 px-5 py-1 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[15px] font-extrabold text-[#0b3329] lg:text-[17px]">{question}<ChevronDown className="h-5 w-5 shrink-0 text-[#b98a43] transition group-open:rotate-180" /></summary>
                  <p className="border-t border-[#d8cab4]/70 pb-5 pt-4 text-[13px] font-medium leading-[2] text-[#6f7067] lg:text-[15px]">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ClosingInfo({ data }: { data: ServicePageData }) {
  return (
    <section id="service-contact" className="relative isolate scroll-mt-28 overflow-hidden bg-[#f8f4ef] py-16 lg:py-22">
      <div className="section-frame section-pad">
        <Reveal direction="up" once className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[34px] bg-[#0b3329] px-6 py-12 text-center text-[#fbf8f3] shadow-[0_34px_76px_rgba(12,50,41,0.18)] lg:px-20 lg:py-14">
          <div className="absolute inset-0 dark-luxury-surface opacity-95" />
          <div className="relative z-10 mx-auto max-w-[780px]">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d7b672]/35 text-[#d7b672]">
              <data.Icon className="h-9 w-9 stroke-[1.4]" />
            </div>
            <h2 className="heading-font text-[clamp(2.1rem,3.6vw,4.7rem)] font-semibold leading-tight tracking-[-0.05em] text-[#fbf8f3]">{data.closingTitle}</h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[14px] font-medium leading-[2] text-[#fbf8f3]/78 lg:text-[17px]">{data.closingText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-gold min-w-[200px] gap-2"><MessageCircle className="h-4 w-4" />تواصل عبر واتساب</a>
              <a href={contact.phoneHref} className="inline-flex min-h-[42px] min-w-[200px] items-center justify-center gap-2 border border-white/45 px-7 text-[14px] font-extrabold text-white transition hover:bg-white/10">
                <span>اتصل بنا</span><bdi dir="ltr">{contact.phoneDisplay}</bdi>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function ServiceLandingPage({ data }: { data: ServicePageData }) {
  return (
    <main className="site-shell" dir="rtl">
      <ServicePageHeader solidBackButton={data.variant === 'mandi'} />
      <SocialBar />
      <Hero data={data} />
      <StatsBand data={data} />
      <StorySection data={data} />
      {data.variant === 'mandi' && <MandiMajlisSection />}
      <CategoryGrid data={data} />
      {data.variant === 'bakery' && <BakeryCatalogSection />}
      {data.variant === 'eastern' && <EasternTableGuide />}
      <ShowcaseSection data={data} />
      <FeaturesSection data={data} />
      <GalleryStrip data={data} />
      {data.variant === 'hall' && <HallPlanningSection />}
      {data.variant === 'eastern' && <EasternDishesCarousel />}
      <ClosingInfo data={data} />
      <Footer />
    </main>
  )
}
