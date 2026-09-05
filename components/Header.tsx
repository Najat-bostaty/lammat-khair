'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { siteImages } from '@/lib/assets'

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'عن لمة خير', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'معرض الصور', href: '#gallery' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return
    const updateActive = () => {
      const marker = window.scrollY + 180
      let current = '#home'
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null
        if (section && section.offsetTop <= marker) current = link.href
      }
      setActiveHref(current)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-[#143d35]">
      <div className="pointer-events-none absolute inset-0 h-[104px] bg-gradient-to-b from-[#fbf8f3]/92 via-[#fbf8f3]/64 to-transparent backdrop-blur-[2px]" />
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
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[clamp(12px,0.95vw,15px)] font-bold leading-none tracking-[-0.01em] transition-colors hover:text-[#b98a43] ${
                activeHref === link.href ? 'text-[#143d35]' : 'text-[#143d35]/88'
              }`}
            >
              {link.label}
              {activeHref === link.href && <span className="absolute -bottom-[12px] left-0 right-0 h-px bg-[#b98a43]" />}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="absolute left-[clamp(26px,5.4vw,94px)] top-[82px] hidden h-[44px] w-[clamp(138px,11vw,170px)] items-center justify-center bg-[#0b3329] text-[clamp(13px,1vw,15px)] font-bold text-[#d8bf8b] shadow-[0_14px_26px_rgba(12,50,41,0.2)] transition hover:-translate-y-0.5 hover:bg-[#071f19] xl:flex"
        >
          احجز الآن
        </a>

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
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-[#143d35] hover:bg-[#f1eadf]"
                >
                  {link.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-solid mt-2 rounded-none">
                احجز الآن
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
