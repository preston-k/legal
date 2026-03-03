'use client'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyTitle, PolicyLastUpdated, PolicyH2, PolicyH3, PolicyP, PolicyUl } from '@/components/PolicyContent'

const CookiePolicy = () => {
  return (
    <PolicyLayout>
      <PolicyTitle>Cookie Policy</PolicyTitle>
      <PolicyLastUpdated>Last updated: January 10, 2025</PolicyLastUpdated>
      <PolicyP>This Cookie Policy explains how PrestonKwei.com (&apos;Site&apos;) uses cookies and similar technologies to enhance your experience, analyze site performance, and provide personalized content. By using this Site, you agree to the use of cookies as outlined in this policy.</PolicyP>
      <PolicyH2>What Are Cookies?</PolicyH2>
      <PolicyP>Cookies are small text files that are downloaded onto your device when you visit a website. They serve various purposes, such as improving functionality, remembering user preferences, and enabling website features. Cookies can be classified as either session cookies, which are temporary and deleted when you close your browser, or persistent cookies, which remain on your device for a set period or until deleted manually. These files do not typically identify you personally but are used to enhance your online experience and streamline interactions with our Site.</PolicyP>
      <PolicyP>Cookies are essential to many modern websites, enabling key functions like secure login, shopping carts, and tailored content delivery. They help us understand how visitors interact with our Site and allow us to provide a more personalized and efficient browsing experience. By understanding the different types of cookies and their roles, you can better manage your preferences and make informed choices about their use.</PolicyP>
      <PolicyH2>Types of Cookies We Use</PolicyH2>
      <PolicyP>Our Site employs a variety of cookies to meet functional, analytical, and advertising needs. These include:</PolicyP>
      <PolicyH3>Essential Cookies</PolicyH3>
      <PolicyP>Essential cookies are necessary for the proper functioning of our Site. They support fundamental features like account login, navigation, and access to secure areas. Without these cookies, many basic functionalities of our Site would be inaccessible. For example, they enable you to log in securely and maintain your session while navigating between pages.</PolicyP>
      <PolicyH3>Performance Cookies</PolicyH3>
      <PolicyP>Performance cookies help us understand how visitors use our Site. By analyzing data such as page load times, error reports, and user behavior, we can improve the overall functionality and responsiveness of our services. These cookies allow us to address performance issues proactively and ensure an optimal experience for all users.</PolicyP>
      <PolicyH3>Functional Cookies</PolicyH3>
      <PolicyP>Functional cookies enable the Site to remember choices you make, such as your language preference or region, and provide enhanced features. They make your interactions smoother and more personalized, ensuring that your settings are preserved for future visits. For instance, these cookies may remember your login details to save you time during subsequent visits.</PolicyP>
      <PolicyH3>Advertising Cookies</PolicyH3>
      <PolicyP>Advertising cookies collect data about your browsing habits to deliver ads that are relevant to your interests. They also help us measure the effectiveness of our advertising campaigns. By using these cookies, we can provide a more tailored and engaging online experience while limiting exposure to repetitive ads.</PolicyP>
      <PolicyH3>Third-Party Cookies</PolicyH3>
      <PolicyP>Third-party cookies are placed by external services that we use, such as analytics providers or social media platforms. These cookies assist in understanding broader user trends and interactions, enabling us to refine our offerings. While we work with trusted partners, the management of third-party cookies remains under their respective policies.</PolicyP>
      <PolicyH2>How We Use Cookies</PolicyH2>
      <PolicyP>Cookies play an integral role in enhancing your experience on our Site. By collecting and storing certain types of data, we can provide services and features that are tailored to your preferences. The cookies we use help us:</PolicyP>
      <PolicyUl>
        <li>Ensure the smooth and secure operation of our Site and its features.</li>
        <li>Improve navigation and ease of use by remembering your preferences and settings.</li>
        <li>Analyze user behavior to identify trends and areas for improvement.</li>
        <li>Provide personalized content and recommendations based on your interests.</li>
        <li>Deliver targeted advertisements and measure their effectiveness.</li>
      </PolicyUl>
      <PolicyP>These cookies allow us to maintain the functionality and reliability of our Site while continually refining our offerings. By understanding how users engage with our Site, we can implement changes that enhance usability, accessibility, and satisfaction.</PolicyP>
      <PolicyH2>Managing Cookies</PolicyH2>
      <PolicyP>You have control over the cookies stored on your device and can manage your preferences through your browser settings. Most browsers offer options to block or delete cookies, as well as to notify you when a new cookie is being placed. By customizing your settings, you can decide how cookies are handled, balancing functionality with your privacy preferences.</PolicyP>
      <PolicyP>Keep in mind that disabling certain cookies may impact the functionality and user experience of our Site. Essential features like secure login, saved preferences, and personalized content may not work as intended without cookies. We encourage you to review your settings regularly to ensure they align with your desired level of privacy and functionality.</PolicyP>
      <PolicyH2>Changes to This Cookie Policy</PolicyH2>
      <PolicyP>We may update this Cookie Policy from time to time to reflect changes in our practices or evolving regulations. Whenever significant modifications are made, we will update the &quot;Last Updated&quot; date at the top of this policy and may provide additional notifications on our Site. Your continued use of the Site after any changes indicates your acceptance of the updated policy.</PolicyP>
      <PolicyP>We recommend reviewing this policy periodically to stay informed about how we use cookies and how any changes might affect your experience. Our commitment to transparency ensures that any updates to this policy are clearly communicated and easy to understand.</PolicyP>
      <PolicyH2>Contact Us</PolicyH2>
      <PolicyP>If you have any questions or concerns about this Cookie Policy, please feel free to contact us. Your feedback is important to us and helps ensure we meet your expectations regarding transparency and privacy.</PolicyP>
      <PolicyP>You can reach us at <a href="mailto:privacy@prestonkwei.com" className="text-blue-600 hover:underline">privacy@prestonkwei.com</a>. We are committed to addressing your inquiries promptly and thoroughly to maintain your trust and satisfaction.</PolicyP>
    </PolicyLayout>
  )
}
export default CookiePolicy
