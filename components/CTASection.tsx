import { Reveal } from '@/components/Reveal'
import { contact } from '@/lib/contact'

export default function CTASection() {
  return (
    <section id="cta" className="relative isolate flex min-h-[72svh] overflow-hidden bg-[#f8f4ef] py-20 lg:py-0">
      <div className="section-frame section-pad flex w-full items-center justify-center">
        <Reveal direction="up" className="relative w-full max-w-[1480px] overflow-hidden rounded-[34px] bg-[#0b3329] px-6 py-16 text-center text-[#fbf8f3] shadow-[0_34px_76px_rgba(12,50,41,0.22)] lg:min-h-[42vh] lg:px-0 lg:py-0">
          <div className="absolute inset-0 bg-[url('/images/cta-background.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,34,27,.94),rgba(7,48,38,.72),rgba(5,34,27,.92))]" />

          <div className="relative z-10 mx-auto flex min-h-[inherit] flex-col items-center justify-center lg:min-h-[42vh]">
            <h2 className="heading-font text-[clamp(2.25rem,4.4vw,5.4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#fbf8f3]">
              جاهز لعيش تجربة استثنائية؟
            </h2>
            <p className="mt-5 text-[15px] font-medium text-[#fbf8f3]/86 lg:text-[clamp(16px,1.2vw,20px)]">
              احجز مناسبتك الآن ودعنا نعتني بكل التفاصيل.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <a href="#contact" className="btn-gold h-[46px] w-[160px]">
                تواصل معنا
              </a>
              <a href={contact.phoneHref} className="inline-flex h-[46px] w-[185px] items-center justify-center gap-2 border border-[#d7b672]/75 text-[15px] font-extrabold text-[#d7b672] transition hover:-translate-y-0.5 hover:bg-[#fbf8f3]/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[16px] w-[16px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.33 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.94.95a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <bdi dir="ltr">{contact.phoneDisplay}</bdi>
              </a>
            </div>
            <p className="mt-4 text-[13px] font-medium text-[#fbf8f3]/72 lg:text-[14px]">{contact.delivery}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
