import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/service-pages/ServiceLandingPage'
import { servicePages } from '@/components/service-pages/service-data'

export const metadata: Metadata = {
  title: 'صالة المناسبات | لمة خير',
  description: 'تعرّف على صالة مناسبات لمة خير، أجوائها، تجهيزاتها، وأنواع المناسبات التي تستقبلها.',
}

export default function Page() {
  return <ServiceLandingPage data={servicePages['event-hall']} />
}
