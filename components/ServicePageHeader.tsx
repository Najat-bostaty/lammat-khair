'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { siteImages } from '@/lib/assets'

const pageLinks: Record<string, { label: string; href: string }[]> = {
  '/garden-lounge': [
    { label: 'الرئيسية', href: '/' }, { label: 'جمال المكان', href: '#park-beauty' }, { label: 'أجواء المنتزه', href: '#park-moments' },
    { label: 'المناسبات', href: '#private-events' }, { label: 'ضيافتكم', href: '#garden-dining' }, { label: 'تواصل معنا', href: '#contact' },
  ],
  '/yemeni-mandi': [
    { label: 'الرئيسية', href: '/' }, { label: 'تجربة المندي', href: '#mandi-majlis' }, { label: 'خياراتنا', href: '#service-offers' },
    { label: 'المزايا', href: '#service-features' }, { label: 'معرض الصور', href: '#service-gallery' }, { label: 'تواصل معنا', href: '#service-contact' },
  ],
  '/bakery': [
    { label: 'الرئيسية', href: '/' }, { label: 'عن المخبز', href: '#service-story' }, { label: 'الأصناف', href: '#bakery-catalog' },
    { label: 'المزايا', href: '#service-features' }, { label: 'معرض الصور', href: '#service-gallery' }, { label: 'تواصل معنا', href: '#service-contact' },
  ],
  '/eastern-kitchen': [
    { label: 'الرئيسية', href: '/' }, { label: 'عن المطبخ', href: '#service-story' }, { label: 'القائمة', href: '#eastern-menu' },
    { label: 'المزايا', href: '#service-features' }, { label: 'معرض الصور', href: '#service-gallery' }, { label: 'تواصل معنا', href: '#service-contact' },
  ],
  '/event-hall': [
    { label: 'الرئيسية', href: '/' }, { label: 'عن الصالة', href: '#service-story' }, { label: 'المناسبات', href: '#service-offers' },
    { label: 'جولة في الصالة', href: '#hall-tour' }, { label: 'المزايا', href: '#service-features' }, { label: 'تواصل معنا', href: '#service-contact' },
  ],
}

export default function ServicePageHeader({ solidBackButton = false }: { solidBackButton?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const pathname = usePathname()
  const navLinks = useMemo(() => pageLinks[pathname] ?? pageLinks['/garden-lounge'], [pathname])

  useEffect(() => {
    const updateActive = () => {
      const marker = window.scrollY + 190
      let current = ''
      for (const link of navLinks.filter((item) => item.href.startsWith('#'))) {
        const section = document.querySelector(link.href) as HTMLElement | null
        if (section && section.offsetTop <= marker) current = link.href
      }
      setActiveHref(current)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [navLinks])

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-[#143d35]">
      <div className="pointer-events-none absolute inset-0 h-[104px] bg-gradient-to-b from-[#fbf8f3]/94 via-[#fbf8f3]/72 to-transparent backdrop-blur-[3px]" />
      <div className="section-frame section-pad relative h-[104px] lg:h-[122px]">
        <Link href="/" className="absolute right-[clamp(18px,5.4vw,94px)] top-0 block h-[82px] w-[82px] sm:h-[94px] sm:w-[94px] lg:h-[114px] lg:w-[114px]">
          <Image
            src={siteImages.logo}
            alt="لمة خير - Lammat Khair"
            width={140}
            height={140}
            className="h-full w-full object-contain mix-blend-multiply"
            priority
          />
        </Link>

        <nav className="absolute right-[clamp(154px,18vw,305px)] top-[36px] hidden items-center gap-[clamp(18px,2.3vw,42px)] whitespace-nowrap lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-[clamp(12px,0.95vw,15px)] font-bold leading-none tracking-[-0.01em] transition-colors hover:text-[#b98a43] ${
                activeHref === link.href ? 'text-[#143d35]' : 'text-[#143d35]/88'
              }`}
            >
              {link.label}
              {activeHref === link.href && <span className="absolute -bottom-[12px] left-0 right-0 h-px bg-[#b98a43]" />}
            </Link>
          ))}
        </nav>

        <Link
          href="/#services"
          className={`absolute left-[clamp(26px,5.4vw,94px)] top-[82px] hidden h-[44px] w-[clamp(138px,11vw,170px)] items-center justify-center border border-[#b98a43]/70 text-[clamp(13px,1vw,15px)] font-bold text-[#0b3329] shadow-[0_14px_26px_rgba(12,50,41,0.08)] transition hover:-translate-y-0.5 xl:flex ${solidBackButton ? 'bg-[#fbf8f3] hover:bg-[#efe5d6]' : 'bg-[#fbf8f3]/58 hover:bg-[#f1eadf]'}`}
        >
          عودة للخدمات
        </Link>

        <button
          type="button"
          aria-label="فتح القائمة"
          className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#b98a43]/45 bg-[#fbf8f3]/86 text-[#0b3329] shadow-sm backdrop-blur lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {mobileOpen && (
          <div className="absolute left-4 right-4 top-[82px] rounded-3xl border border-[#d8cab4] bg-[#fbf8f3]/96 p-4 shadow-2xl backdrop-blur lg:hidden">
            <div className="grid gap-2 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-[#143d35] hover:bg-[#f1eadf]"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/#services" onClick={() => setMobileOpen(false)} className="btn-outline mt-2 rounded-none">
                عودة للخدمات
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
