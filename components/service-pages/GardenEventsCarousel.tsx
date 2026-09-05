'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const events = [
  { src: '/images/New folder/72.png', title: 'أعياد الميلاد', text: 'ترتيب دافئ يجمع العائلة والأصدقاء وسط الخضرة والإضاءة الهادئة.' },
  { src: '/images/New folder/66.png', title: 'الأعراس والخطوبة', text: 'مساحة مفتوحة تستقبل فرحتكم بتوزيع مريح وأجواء مسائية مميزة.' },
  { src: '/images/New folder/67.png', title: 'العراضة الشامية', text: 'استقبال تراثي يملأ المكان بالحماس ويمنح المناسبة بداية لا تُنسى.' },
  { src: '/images/New folder/68.png', title: 'الألعاب النارية', text: 'لحظة احتفالية مضيئة تضيف للمشهد دهشة وفرحاً في الوقت المناسب.' },
  { src: '/images/New folder/69.png', title: 'السهرات الخاصة', text: 'جلسة خاصة بتفاصيل هادئة تناسب لمة الأصدقاء والمناسبات العائلية.' },
  { src: '/images/New folder/70.png', title: 'الاحتفالات العائلية', text: 'مساحة مرنة للّمة الكبيرة مع أجواء مريحة للكبار والصغار.' },
]

export default function GardenEventsCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % events.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  const move = (step: number) => setActive((current) => (current + step + events.length) % events.length)
  const event = events[active]

  return (
    <div className="mx-auto mt-12 max-w-[1180px]">
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_32px_80px_rgba(0,0,0,.3)]">
        <div className="relative aspect-[16/10] min-h-[420px] sm:aspect-[16/8] lg:min-h-[560px]">
          {events.map((item, index) => (
            <Image key={item.src} src={item.src} alt={item.title} fill sizes="(min-width:1024px) 1180px,100vw" className={`object-cover transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`} priority={index === 0} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a15] via-[#061a15]/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-right sm:p-9 lg:p-12">
            <p className="text-[13px] font-extrabold text-[#f1d28e]">{String(active + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}</p>
            <h3 className="heading-font mt-2 text-[clamp(2.2rem,4vw,4.8rem)] font-semibold leading-tight text-white">{event.title}</h3>
            <p className="mt-3 max-w-[650px] text-[15px] font-medium leading-[2] text-white/82 lg:text-[17px]">{event.text}</p>
          </div>
        </div>
        <button type="button" onClick={() => move(1)} aria-label="الصورة التالية" className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white backdrop-blur-md transition hover:bg-[#d7b672] hover:text-[#0b3329] sm:right-6"><ChevronRight className="h-5 w-5" /></button>
        <button type="button" onClick={() => move(-1)} aria-label="الصورة السابقة" className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white backdrop-blur-md transition hover:bg-[#d7b672] hover:text-[#0b3329] sm:left-6"><ChevronLeft className="h-5 w-5" /></button>
      </div>
      <div className="mt-5 flex justify-center gap-2" aria-label="اختيار صورة المناسبة">
        {events.map((item, index) => <button key={item.src} type="button" onClick={() => setActive(index)} aria-label={item.title} className={`h-2 rounded-full transition-all ${index === active ? 'w-9 bg-[#d7b672]' : 'w-2 bg-white/35 hover:bg-white/60'}`} />)}
      </div>
    </div>
  )
}
