import ServiceLandingPage from '@/components/service-pages/ServiceLandingPage'
import { servicePages } from '@/components/service-pages/service-data'

export default function Page() {
  return <ServiceLandingPage data={servicePages['yemeni-mandi']} />
}
