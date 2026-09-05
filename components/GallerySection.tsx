import Image from 'next/image'
import { siteImages } from '@/lib/assets'
import { Flourish } from '@/components/Ornaments'
import { Reveal, FloatOnView } from '@/components/Reveal'

const galleryImages = [
  { src: siteImages.galleryHall, alt: 'نافورة المنتزه والجلسات المسائية', size: 'large' },
  { src: siteImages.galleryDesserts, alt: 'صالة المناسبات', size: 'medium' },
  { src: siteImages.galleryGardenNight, alt: 'تشكيلة من الحلويات', size: 'small' },
  { src: siteImages.galleryFoodTable, alt: 'تشكيلة من المشاوي', size: 'small' },
  { src: siteImages.galleryOutdoor, alt: 'المنتزه وقت الغروب', size: 'wide' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="section-desktop-screen luxury-surface relative isolate overflow-hidden">
      <FloatOnView className="pointer-events-none absolute left-[-6vw] top-[30vh] block h-[220px] w-[70px] opacity-[0.08] rotate-[-16deg] mix-blend-multiply sm:h-[340px] sm:w-[13vw] lg:h-[58vh] lg:w-[17vw]">
        <img src="/ornaments/floral-tall.svg" alt="" aria-hidden="true" className="h-full w-full object-contain opacity-[0.2]" />
      </FloatOnView>
   

      <div className="section-frame section-pad grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[.72fr_1.28fr] lg:gap-[5vw] lg:py-0" dir="ltr">
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-right" dir="rtl">
          <Reveal direction="right">
            <p className="mb-3 text-[15px] font-semibold text-[#b98a43] lg:text-[18px]">معرض الصور</p>
            <h2 className="heading-font text-[clamp(2.25rem,4vw,5rem)] font-semibold leading-[1.28] tracking-[-0.05em] text-[#0b3329]">
              لحظات من لمة خير
            </h2>
            <Flourish className="mx-auto mt-4 h-7 w-48 text-[#b98a43]/75 lg:mx-0" />
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <p className="mt-7 max-w-[430px] text-[15px] font-medium leading-[2] text-[#6f7067] lg:text-[17px]">
              مشاهد مختارة من أجوائنا، تفاصيل الضيافة، وصور تلهم مناسبتك القادمة.
            </p>
            <a href="#" className="btn-outline mt-8 w-[210px]">
              عرض المزيد من الصور
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:h-[68vh] lg:grid-cols-12 lg:grid-rows-2 lg:gap-[clamp(14px,1.4vw,24px)]" dir="ltr">
          {galleryImages.map((img, index) => {
            const span =
              img.size === 'large'
                ? 'lg:col-span-5 lg:row-span-2'
                : img.size === 'medium'
                  ? 'lg:col-span-4 lg:row-span-1'
                : img.size === 'wide'
                  ? 'lg:col-span-4 lg:row-span-1'
                  : 'lg:col-span-3 lg:row-span-1'
            const direction = index % 2 === 0 ? 'left' : 'up'

            return (
              <Reveal
                key={img.alt}
                direction={direction}
                delay={index * 0.08}
                className={`${span} min-h-[170px] ${index === galleryImages.length - 1 && galleryImages.length % 2 !== 0 ? 'col-span-2 sm:col-span-4 lg:col-span-4' : ''}`}
              >
                <div className="image-grain group relative h-full min-h-[170px] overflow-hidden bg-[#eadfce] shadow-[0_22px_45px_rgba(12,50,41,0.12)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                    quality={88}
                  />
                  <div className="absolute inset-0 border border-white/35" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
