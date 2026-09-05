import { MessageCircle } from 'lucide-react'
import { contact } from '@/lib/contact'

const InstagramIcon = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg>
const FacebookIcon = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M14.2 8.3V6.7c0-.74.35-1.16 1.26-1.16h1.5V2.75A20 20 0 0 0 14.7 2.6c-2.25 0-3.8 1.37-3.8 3.9v1.8H8.35v3.15h2.55v8.05h3.3v-8.05h2.56l.42-3.15z"/></svg>

const socials = [
  { name: 'Instagram', href: contact.instagram, Icon: InstagramIcon },
  { name: 'Facebook', href: contact.facebook, Icon: FacebookIcon },
  { name: 'WhatsApp', href: contact.whatsapp, Icon: MessageCircle },
]

export default function SocialBar() {
  return (
    <div className="fixed left-[12px] top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-[10px] sm:left-[clamp(18px,3.2vw,54px)] sm:flex sm:gap-[13px]">
      {socials.map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#b98a43]/72 bg-[#fbf8f3]/68 text-[#9b7641] shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-[#0c3229] hover:text-[#fbf8f3] sm:h-[36px] sm:w-[36px] lg:h-[40px] lg:w-[40px]">
          <Icon className="h-[15px] w-[15px] stroke-[1.7] sm:h-[17px] sm:w-[17px]" />
        </a>
      ))}
    </div>
  )
}
