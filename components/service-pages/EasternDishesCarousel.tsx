'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { siteImages } from '@/lib/assets'

const dishes = [
  { name: 'كوردن بلو', image: siteImages.easternMain },
  { name: 'وجبة كريسبي', image: siteImages.easternCrispy },
  { name: 'رز وبازلاء مع الدجاج', image: siteImages.easternRice },
  { name: 'جناحات مشوية', image: siteImages.easternMandiPlate },
  { name: 'كستا دجاج مشوية', image: siteImages.easternWings },
  { name: 'كبة', image: siteImages.easternKubbeh },
  { name: 'محمّرة بالجوز', image: siteImages.easternKibbeh },
  { name: 'مشاوي', image: siteImages.easternGrill },
  { name: 'مشاوي', image: siteImages.sandwich1 },
  { name: 'بُرَك', image: siteImages.easternPastries },
  { name: 'فتوش', image: siteImages.salad1 },
  { name: 'خيار بلبن', image: siteImages.salad2 },
  { name: 'تبولة', image: siteImages.salad3 },
  { name: 'تبولة خضراء', image: siteImages.salad4 },
  { name: 'يلنجي', image: siteImages.easternYalanji },
  { name: 'تشكن برغر', image: siteImages.sandwich2 },
  { name: 'سندويشة بطاطا', image: siteImages.sandwich3 },
  { name: 'سندويشة كريسبي', image: siteImages.sandwich4 },
]

export default function EasternDishesCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const change = useCallback((step: number) => setActive((current) => (current + step + dishes.length) % dishes.length), [])

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => change(1), 4500)
    return () => window.clearInterval(timer)
  }, [change, paused])

  const dish = dishes[active]

  return (
    <section className="relative isolate overflow-hidden bg-[#0b3329] py-20 text-[#fbf8f3] lg:py-28" aria-roledescription="carousel" aria-label="صور أصناف المطبخ الشرقي">
      <div className="absolute inset-0 dark-luxury-surface opacity-90" />
      <div className="section-frame section-pad relative z-10">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="text-[14px] font-bold text-[#d7b672] lg:text-[16px]">تعرّفوا على أطباقنا</p>
          <h2 className="heading-font mt-2 text-[clamp(2.2rem,4vw,5rem)] font-semibold leading-tight">كل صنف له حكاية</h2>
        </div>

        <div
          className="mx-auto max-w-[1060px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#d7b672]/30 bg-[#102f28] shadow-[0_30px_80px_rgba(0,0,0,.28)]">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]">
              <Image key={dish.image} src={dish.image} alt={dish.name} fill sizes="(min-width:1200px) 1060px, 92vw" className="object-cover motion-safe:animate-[fadeIn_.45s_ease-out]" priority={active === 0} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071e18]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-5 pb-6 text-center sm:pb-8">
                <p className="text-[12px] font-bold text-[#d7b672]">الصنف {active + 1} من {dishes.length}</p>
                <h3 aria-live="polite" className="heading-font mt-1 text-[32px] font-semibold text-white sm:text-[42px]">{dish.name}</h3>
              </div>
            </div>

            <button type="button" onClick={() => change(-1)} aria-label="الصورة السابقة" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[#0b3329]/70 text-white backdrop-blur-md transition hover:bg-[#b98a43] sm:left-5 sm:h-13 sm:w-13"><ChevronLeft className="h-6 w-6" /></button>
            <button type="button" onClick={() => change(1)} aria-label="الصورة التالية" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[#0b3329]/70 text-white backdrop-blur-md transition hover:bg-[#b98a43] sm:right-5 sm:h-13 sm:w-13"><ChevronRight className="h-6 w-6" /></button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="اختيار صنف">
            {dishes.map((item, index) => (
              <button key={item.image} type="button" onClick={() => setActive(index)} aria-label={`عرض ${item.name}`} aria-selected={index === active} role="tab" className={`h-2.5 rounded-full transition-all ${index === active ? 'w-9 bg-[#d7b672]' : 'w-2.5 bg-white/28 hover:bg-white/55'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
