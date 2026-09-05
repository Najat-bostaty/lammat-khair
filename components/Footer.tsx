import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/assets'
import { contact } from '@/lib/contact'

const quickLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'عن لمة خير', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'معرض الصور', href: '#gallery' },
  { label: 'تواصل معنا', href: '#contact' },
]

const serviceLinks = [
  { label: 'صالة المناسبات', href: '/event-hall' },
  { label: 'الفرن والحلويات', href: '/bakery' },
  { label: 'المطبخ الشرقي', href: '/eastern-kitchen' },
  { label: 'المندي اليمني', href: '/yemeni-mandi' },
  { label: 'المنتزه والجلسات', href: '/garden-lounge' },
]

const socials = [
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.2 8.3V6.7c0-.74.35-1.16 1.26-1.16h1.5V2.75A20 20 0 0 0 14.7 2.6c-2.25 0-3.8 1.37-3.8 3.9v1.8H8.35v3.15h2.55v8.05h3.3v-8.05h2.56l.42-3.15z" /></svg> },
  { name: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.05 2.1a9.75 9.75 0 0 0-8.4 14.72L2.6 21.7l5-1.03a9.76 9.76 0 1 0 4.45-18.57zm0 17.55a7.73 7.73 0 0 1-3.93-1.07l-.28-.16-2.98.62.63-2.9-.18-.3a7.75 7.75 0 1 1 6.74 3.81zm4.28-5.8c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12s-.6.75-.74.9-.27.18-.5.06a6.28 6.28 0 0 1-1.85-1.14 6.95 6.95 0 0 1-1.28-1.59c-.14-.23-.02-.36.1-.47.1-.1.23-.27.35-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.41-.06-.12-.52-1.27-.72-1.73-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.4.06-.62.3-.21.23-.81.79-.81 1.93s.83 2.25.95 2.4c.12.16 1.64 2.51 3.98 3.52.56.24.99.38 1.33.49.56.18 1.06.15 1.46.09.45-.07 1.38-.56 1.57-1.1.2-.55.2-1.01.14-1.1-.06-.1-.21-.16-.45-.28z" /></svg> },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#fbf8f3] text-[#143d35]">
      <div className="gold-divider opacity-70" />
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1%] block h-[140px] w-[140px] opacity-[0.07] mix-blend-multiply sm:h-[190px] sm:w-[190px] lg:h-[230px] lg:w-[230px]" />
      <img src="/ornaments/floral-side.svg" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 right-[1%] block h-[140px] w-[140px] rotate-180 opacity-[0.07] mix-blend-multiply sm:h-[190px] sm:w-[190px] lg:h-[230px] lg:w-[230px]" />

      <div className="section-frame px-5 py-5 sm:px-[30px] md:py-7 lg:min-h-[175px] lg:px-[clamp(72px,8vw,126px)] lg:py-[26px]" dir="ltr">
        <div className="mx-auto grid max-w-[420px] grid-cols-2 gap-x-6 text-right md:max-w-none md:grid-cols-[150px_1fr_1fr_1.45fr_1.2fr] md:gap-10 lg:items-start" dir="ltr">
          <div className="col-span-2 flex items-center justify-center gap-3 md:col-span-1 md:items-start md:justify-start md:gap-0 before:h-px before:min-w-0 before:flex-1 before:bg-[#b98a43]/55 after:h-px after:min-w-0 after:flex-1 after:bg-[#b98a43]/55 md:before:hidden md:after:hidden">
            <Link href="/" className="block h-[78px] w-[78px] shrink-0 md:h-[98px] md:w-[98px] lg:h-[112px] lg:w-[112px]">
              <Image src={siteImages.logo} alt="لمة خير" width={110} height={110} className="h-full w-full object-contain mix-blend-multiply" />
            </Link>
          </div>

          <div className="mt-5 flex flex-col items-center border-l border-[#dfd1ba] px-2 text-center md:mt-0 md:items-stretch md:pl-6 md:pr-0 md:text-right" dir="rtl">
            <h4 className="mb-[10px] text-[12px] font-bold text-[#143d35] lg:text-[14px]">روابط سريعة</h4>
            <div className="grid gap-[4px]">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[10px] font-medium text-[#74766e] hover:text-[#0c3229] lg:text-[12px]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center px-2 text-center md:mt-0 md:items-stretch md:border-l md:pl-6 md:pr-0 md:text-right" dir="rtl">
            <h4 className="mb-[10px] text-[12px] font-bold text-[#143d35] lg:text-[14px]">خدماتنا</h4>
            <div className="grid gap-[4px]">
              {serviceLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[10px] font-medium text-[#74766e] hover:text-[#0c3229] lg:text-[12px]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 mt-6 flex w-full flex-col items-center rounded-2xl border border-[#dfd1ba] bg-white/40 px-4 py-3 md:col-span-1 md:mt-0 md:items-stretch md:rounded-none md:border-y-0 md:border-r-0 md:border-l md:bg-transparent md:p-0 md:pl-6" dir="rtl">
            <h4 className="mb-[10px] text-[12px] font-bold text-[#143d35] lg:text-[14px]">تواصل معنا</h4>
            <div className="grid gap-[9px] text-[10px] font-medium text-[#74766e] lg:text-[12px]">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 hover:text-[#0c3229] md:justify-start">
                <bdi dir="ltr">{contact.phoneDisplay}</bdi>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[14px] w-[14px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.33 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.94.95a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              </a>
              <div className="inline-flex items-center justify-center gap-2 md:justify-start">
                <span>{contact.address}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[14px] w-[14px]"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="inline-flex items-center justify-center gap-2 md:justify-start">
                <span>{contact.hours}</span>
                <span aria-hidden="true" className="text-[#b98a43]">◷</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 md:justify-start">
                <span>{contact.delivery}</span>
                <span aria-hidden="true" className="text-[#b98a43]">◇</span>
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-5 flex flex-col items-center md:col-span-1 md:mt-0 md:items-stretch" dir="rtl">
            <h4 className="mb-3 text-[12px] font-bold text-[#143d35] lg:mb-[16px] lg:text-[14px]">تابعنا</h4>
            <div className="flex justify-center gap-[9px] md:justify-end">
              {socials.map((social) => (
                <a key={social.name} href={social.name === 'Instagram' ? contact.instagram : social.name === 'Facebook' ? contact.facebook : contact.whatsapp} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#b98a43]/65 text-[#b98a43] hover:bg-[#0c3229] hover:text-[#fbf8f3]">
                  <span className="h-[14px] w-[14px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] font-medium text-[#74766e] lg:mt-[12px] lg:text-[11px]">
          تم تطوير الموقع بواسطة{' '}
          <a href="https://myportfolio-two-red-28.vercel.app" target="_blank" rel="noreferrer" className="font-bold text-[#9b7641] underline decoration-[#b98a43]/45 underline-offset-4 transition hover:text-[#0c3229]">
            نجاة بسطاطي
          </a>
        </p>
      </div>
    </footer>
  )
}
