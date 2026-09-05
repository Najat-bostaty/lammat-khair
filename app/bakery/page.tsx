import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/service-pages/ServiceLandingPage'
import { servicePages } from '@/components/service-pages/service-data'

export const metadata: Metadata = {
  title: 'الفرن والحلويات | لمة خير',
  description: 'اكتشف تشكيلة الحلويات العربية والكيك والحلويات الباردة والمخبوزات لدى لمة خير.',
}

export default function Page() {
  return <ServiceLandingPage data={servicePages['bakery']} />
}
