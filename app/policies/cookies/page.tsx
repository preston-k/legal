import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyEmail } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How PrestonKwei.com uses cookies and similar tracking technologies.',
}

const CookiePolicy = () => {
  return (
    <PolicyLayout title='Cookie Policy' lastUpdated='August 10, 2026' description='How we use cookies and similar technologies, and the choices available to you.'>
      <PolicyP>This Cookie Policy explains how PrestonKwei.com and its suite of applications (the &quot;Services&quot;) use cookies and similar technologies. By using the Services, you consent to the use of cookies as described in this policy and in our Privacy Policy.</PolicyP>

      <PolicyH2>What Are Cookies?</PolicyH2>
      <PolicyP>Cookies are small text files downloaded to your device when you visit a website. Session cookies are temporary and are deleted when you close your browser; persistent cookies remain on your device for a set period or until you delete them. Cookies enable core functions such as secure login, session continuity, preference storage, analytics, and advertising, and allow us to recognize you across visits and, in some cases, across devices.</PolicyP>

      <PolicyH2>Types of Cookies We Use</PolicyH2>
      <PolicyH3>Essential Cookies</PolicyH3>
      <PolicyP>Required for the Services to function, including authentication, security, session management, and access to protected areas. These cannot be disabled through our tools because the Services will not operate without them.</PolicyP>
      <PolicyH3>Performance Cookies</PolicyH3>
      <PolicyP>Collect information about page load times, errors, and usage patterns so we can diagnose problems and improve responsiveness and reliability.</PolicyP>
      <PolicyH3>Functional Cookies</PolicyH3>
      <PolicyP>Remember choices you make, such as language, region, and display preferences, so your settings persist between visits.</PolicyP>
      <PolicyH3>Advertising Cookies</PolicyH3>
      <PolicyP>Collect information about your browsing activity to deliver advertising relevant to your interests, cap ad frequency, and measure campaign effectiveness, including across contexts and devices.</PolicyP>
      <PolicyH3>Third-Party Cookies</PolicyH3>
      <PolicyP>Placed by external providers we use, such as analytics services and social media platforms. Those cookies are governed by the respective third parties&apos; own policies, and we are not responsible for their practices.</PolicyP>

      <PolicyH2>How We Use Cookies</PolicyH2>
      <PolicyUl>
        <li>Operate the Services securely and reliably;</li>
        <li>Remember your preferences and settings;</li>
        <li>Analyze usage to identify trends and improve the Services;</li>
        <li>Personalize content and recommendations;</li>
        <li>Deliver, target, and measure advertising.</li>
      </PolicyUl>

      <PolicyH2>Managing Cookies</PolicyH2>
      <PolicyP>Most browsers let you block or delete cookies and alert you when a cookie is set. Instructions are available in your browser&apos;s help documentation. Disabling cookies may degrade or disable features of the Services, including login, saved preferences, and personalization, and we make no commitment that the Services will function with cookies disabled. Where applicable law grants you rights over tracking technologies, the choices described in our Privacy Policy apply.</PolicyP>

      <PolicyH2>Changes to This Policy</PolicyH2>
      <PolicyP>We may update this Cookie Policy at any time. Updates are effective upon posting, and the &quot;Last updated&quot; date above will reflect the current revision. Continued use of the Services after an update constitutes acceptance of the revised policy.</PolicyP>

      <PolicyH2>Contact</PolicyH2>
      <PolicyP>
        Questions about this Cookie Policy may be directed to <PolicyEmail address='privacy@prestonkwei.com' />.
      </PolicyP>
    </PolicyLayout>
  )
}

export default CookiePolicy
