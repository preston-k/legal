'use client'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyTitle, PolicyLastUpdated, PolicyH2, PolicyP, PolicyUl } from '@/components/PolicyContent'

const Domains = () => {
  return (
    <PolicyLayout>
      <PolicyTitle>Our Domains</PolicyTitle>
      <PolicyLastUpdated>Last updated: January 11, 2025</PolicyLastUpdated>
      <PolicyP>Unless explicitly stated otherwise, by accessing any site hosted under the domains listed below, you agree to be bound by the terms of service, privacy policy, and other legal notices provided on this site.</PolicyP>
      <PolicyH2>Domains</PolicyH2>
      <PolicyP>The following sites are owned, operated, and maintained as part of the PrestonKwei.com suite of apps, and are fully owned by our company, including its parent entities, subsidiaries, directors, officers, and authorized representatives.</PolicyP>
      <PolicyUl>
        <li>
          <strong>prestonkwei.com</strong>
        </li>
        <li>
          <strong>prkw.xyz</strong>
        </li>
        <li>
          <strong>pstnkw.co</strong>
        </li>
        <li>
          <strong>pkwei.xyz</strong>
        </li>
        <li>
          <strong>pkmail.co</strong>
        </li>
        <li>
          <strong>pkserver.co</strong>
        </li>
        <li>
          <strong>hoistedemail.com</strong>
        </li>
      </PolicyUl>
    </PolicyLayout>
  )
}
export default Domains
