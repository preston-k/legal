import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyP, PolicyList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Our Domains',
  description: 'Domains owned and operated by the PrestonKwei.com suite of applications.',
}

const domains = ['prestonkwei.com', 'prkw.xyz', 'pstnkw.co', 'pkwei.xyz', 'pkmail.co', 'pkserver.co', 'hoistedemail.com']

const Domains = () => {
  return (
    <PolicyLayout title='Our Domains' lastUpdated='August 10, 2026' description='Every domain owned, operated, and maintained as part of the PrestonKwei.com suite of applications.'>
      <PolicyP>Unless explicitly stated otherwise, by accessing any site hosted under the domains listed below, you agree to be bound by the Terms of Service, Privacy Policy, and every other legal notice published on this site.</PolicyP>

      <PolicyH2>Domains</PolicyH2>
      <PolicyP>The following domains are fully owned by our company, including its parent entities, subsidiaries, directors, officers, and authorized representatives.</PolicyP>
      <PolicyList items={domains} />
      <PolicyP>Communications purporting to originate from us via any domain not listed above should be treated as unauthorized and reported to us immediately.</PolicyP>
    </PolicyLayout>
  )
}

export default Domains
