'use client'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyTitle, PolicyLastUpdated, PolicyH2, PolicyH3, PolicyP, PolicyUl } from '@/components/PolicyContent'

const Privacy = () => {
  return (
    <PolicyLayout>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <PolicyLastUpdated>Last updated: March 3, 2026</PolicyLastUpdated>
      <PolicyP>When you use our services, you trust us with your information. We know this is a huge responsibility, so we work hard to ensure transparency. That way, you know exactly what data we collect, and how it is protected. We also work hard to ensure you control what data we have, and how it should be handled. Your privacy is a cornerstone of our operations, and we continuously review and enhance our practices to protect your trust.</PolicyP>
      <PolicyH2>Introduction</PolicyH2>
      <PolicyP>
        This Privacy Policy outlines how we handle your personal information on PrestonKwei.com (&apos;Site&apos;) and its associated services, including any subdomains, mobile applications, APIs, and other digital properties we operate. Your privacy is of utmost importance to us. This policy details the types of information we collect, how we process and protect that information, the purposes for which we use the information, and how you can manage your personal information. By using our Site, you agree to the collection and use of information in accordance with this policy. For questions, comments, or concerns regarding this privacy policy, please email us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        .
      </PolicyP>
      <PolicyH2>Scope and Definitions</PolicyH2>
      <PolicyP>This policy applies to all visitors, users, and customers of our Site regardless of geographic location. &quot;Personal Data&quot; or &quot;personal information&quot; means any information relating to an identified or identifiable natural person. &quot;Processing&quot; means any operation performed on personal data, including collection, storage, use, disclosure, or deletion. &quot;Data controller&quot; refers to the entity that determines the purposes and means of processing. &quot;Data processor&quot; refers to any entity that processes personal data on behalf of the controller. We act as the data controller for the personal information we collect through our Site. Where we process data on behalf of another entity, we do so as a data processor under contractual obligations.</PolicyP>
      <PolicyH2>How We Collect Information</PolicyH2>
      <PolicyP>We collect information through multiple channels to provide and improve our services. You may provide information directly when you create an account, fill out forms, make purchases, contact support, or participate in surveys or promotions. We automatically collect certain information when you access our Site, including through cookies, log files, and similar technologies. We may also receive information from third parties such as payment processors, analytics providers, advertising partners, and social media platforms when you interact with our content or use features that integrate with those services. In some cases, we may combine information from different sources to provide a more personalized experience and to improve our services.</PolicyP>
      <PolicyH2>Information Collection and Use</PolicyH2>
      <PolicyP>We want to be completely transparent about our data collection practices. We gather a variety of information to enhance your experience, personalize your interactions, and continually improve our services. Here&apos;s a detailed breakdown of the data we may collect:</PolicyP>
      <PolicyH3>Personal Data</PolicyH3>
      <PolicyP>This encompasses any information that can directly or indirectly identify you.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Basic Identifiers:</strong> Your name, email address, username, phone number, postal address, date of birth, gender, IP address, and any other identifying details. This information may be collected if you authorize our application access to your Google Account.
        </li>
        <li>
          <strong>Account Details:</strong> Password, security questions and answers, purchase history, billing and shipping information, customer service interactions, user preferences, settings, loyalty program data, and transaction history. This information may be collected if you authorize our application access to your Google Account.
        </li>
        <li>
          <strong>Social Media Information:</strong> If you connect your social media accounts, we may collect your profile picture, social media handle, friends list, follower count, engagement metrics, posts, and other publicly available information.
        </li>
        <li>
          <strong>User Generated Content:</strong> Any content you create or upload, such as photos, videos, reviews, comments, posts, voice recordings, survey responses, and shared documents.
        </li>
        <li>
          <strong>Biometric Data:</strong> In some cases, with your explicit consent, we might collect biometric data like facial recognition, fingerprint scans, voiceprints, or behavioral biometrics for authentication and security purposes.
        </li>
        <li>
          <strong>Location Data:</strong> Precise or approximate geolocation, travel history, and GPS-based activity if permitted by your device settings.
        </li>
        <li>
          <strong>Inferred Data:</strong> We may analyze your activity and interactions to infer information about your interests, preferences, habits, behaviors, and demographics.
        </li>
        <li>
          <strong>Employment Data:</strong> Job title, employer, professional network information, and work-related preferences if provided.
        </li>
        <li>
          <strong>Health Data:</strong> With your consent, we may collect data related to fitness, wellness, and medical history, including information from connected devices like wearables.
        </li>
      </PolicyUl>

      <PolicyH3>Usage Data</PolicyH3>
      <PolicyP>This is information about how you interact with our services.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Device information:</strong> Your device model, operating system, browser type and version, screen resolution, unique device identifiers (like IMEI or MAC address), mobile network information (including carrier and signal strength), language settings, battery status, and device performance metrics.
        </li>
        <li>
          <strong>Activity information:</strong> Pages you visit, time and date of visits, time spent on pages, links clicked, features used, search queries, interactions with content (e.g., videos watched, articles read), downloads, error logs, referral sources, and session identifiers.
        </li>
        <li>
          <strong>Communication data:</strong> Details of messages, notifications received, opened or interacted with, and preferences for receiving communications.
        </li>
      </PolicyUl>

      <PolicyH3>Tracking & Cookies Data</PolicyH3>
      <PolicyP>We utilize cookies and similar tracking technologies to monitor activity and store information.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Cookies:</strong> First-party and third-party cookies (e.g., session cookies, persistent cookies, advertising cookies). Session cookies expire when you close your browser; persistent cookies remain until they expire or you delete them. We use cookies for authentication, preferences, analytics, and advertising where applicable.
        </li>
        <li>
          <strong>Similar Technologies:</strong> Web beacons, pixels, local storage, browser fingerprinting, SDKs (Software Development Kits) from third-party analytics and advertising providers, and server logs. These may be used to understand usage patterns, deliver relevant content, and measure the effectiveness of our communications.
        </li>
        <li>
          <strong>Behavioral Tracking:</strong> Information collected through tracking user interactions across devices, platforms, and services to improve personalization. Where we engage in cross-context behavioral advertising, we provide you with choices as required by applicable law.
        </li>
      </PolicyUl>
      <PolicyP>You can control cookies through your browser settings. Disabling certain cookies may limit your ability to use some features of our Site. For more information, see our Cookie Policy if one is published on this Site.</PolicyP>

      <PolicyH3>Third-Party Data</PolicyH3>
      <PolicyP>This includes information collected from external sources or partners.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Publicly Available Information:</strong> Data from public records, directories, or other open sources.
        </li>
        <li>
          <strong>Third-Party Integrations:</strong> Information from connected apps, APIs, or third-party services like payment processors, analytics platforms, or authentication providers.
        </li>
        <li>
          <strong>Partner Data:</strong> Data from affiliates, advertisers, market research firms, or other partners to enhance insights and services.
        </li>
      </PolicyUl>

      <PolicyH2>Use of Data</PolicyH2>
      <PolicyP>The data we collect serves several functions:</PolicyP>
      <PolicyUl>
        <li>To provide and maintain our Site and services, including account management, authentication, and access control.</li>
        <li>To notify you about changes to our Site and services, including scheduled maintenance and new features.</li>
        <li>To allow you to participate in interactive features when you choose to do so, such as comments, forums, or collaborative tools.</li>
        <li>To provide customer support, respond to inquiries, resolve disputes, and troubleshoot issues.</li>
        <li>To gather analysis or valuable information so that we can improve our Site and services, including usability testing and performance optimization.</li>
        <li>To monitor the usage of our Site and services, detect abuse, and ensure fair use.</li>
        <li>To detect, prevent, and address technical issues, fraud, security incidents, and violations of our terms.</li>
        <li>To fulfill any other purpose for which you provide it or for which we have obtained your consent.</li>
        <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
        <li>To provide you with notices about your account and/or subscription, including expiration and renewal notices.</li>
        <li>To provide you with news, special offers, and general information about other goods, services, and events that we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</li>
        <li>To personalize content, recommendations, and advertising based on your preferences and behavior.</li>
        <li>To conduct research, analytics, and internal reporting in aggregated or de-identified form where possible.</li>
        <li>To comply with legal obligations, respond to lawful requests from authorities, and protect our rights and the rights of others.</li>
      </PolicyUl>
      <PolicyH2>Data Minimization and Purpose Limitation</PolicyH2>
      <PolicyP>We adhere to principles of data minimization and purpose limitation. We collect only the personal information that is necessary for the specific purposes described in this policy. We do not use your personal information for purposes that are incompatible with the purposes for which it was collected unless we have obtained your consent or are required or permitted by law. When we no longer need your personal information for these purposes, we will securely delete or anonymize it in accordance with our retention practices.</PolicyP>
      <PolicyH2>Your Choices and Controls</PolicyH2>
      <PolicyP>
        We provide you with meaningful choices regarding your personal information. You may access, update, or delete certain account information through your account settings. You may opt out of marketing communications by clicking the unsubscribe link in our emails or by contacting us. You may disable or limit certain cookies through your browser settings, though some features may not function properly without them. You may request a copy of your personal data, request correction of inaccurate data, request deletion (subject to legal exceptions), object to or restrict certain processing, or request data portability by contacting us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        . We will respond to such requests in accordance with applicable law. If you are in the EEA or UK, you also have the right to lodge a complaint with a supervisory authority.
      </PolicyP>
      <PolicyH2>Do Not Track and Similar Signals</PolicyH2>
      <PolicyP>Some browsers offer a &quot;Do Not Track&quot; (DNT) signal that indicates a user&apos;s preference not to be tracked. There is no universally accepted standard for how to respond to DNT signals. Our Site does not currently respond to DNT signals in a particular way, but we honor choices you make through our cookie preferences and account settings. We may adopt a standardized approach to DNT in the future as industry practices evolve.</PolicyP>
      <PolicyH2>Automated Decision-Making and Profiling</PolicyH2>
      <PolicyP>We may use automated means to process your information for purposes such as personalizing content, detecting fraud, or improving our services. Where such processing has a significant legal or similarly significant effect on you, we will implement appropriate safeguards, including the right to obtain human intervention, to express your point of view, and to contest the decision where permitted by law. If you believe an automated decision has adversely affected you, please contact us to request a review.</PolicyP>

      <PolicyH2>Retention of Data</PolicyH2>
      <PolicyP>We understand the importance of responsible data retention and strive to keep your Personal Data only as long as necessary. Retention periods may vary by type of data and purpose. For example, account data may be retained for the life of your account plus a reasonable period thereafter for legal and operational purposes; marketing and analytics data may be retained for a shorter period; and backup or log data may be retained in accordance with our technical and legal requirements. Here&apos;s a more detailed explanation of our retention practices:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Purpose-Driven Retention:</strong> We primarily retain your data to fulfill the purposes outlined in this Privacy Policy, such as providing and improving services, communicating with you, and complying with legal obligations.
        </li>
        <li>
          <strong>Legal and Security Requirements:</strong> In some cases, we may be required to retain data for longer periods to comply with applicable laws, resolve disputes, enforce our agreements, or address security concerns.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect Usage Data (such as website activity and interactions) to analyze trends, administer the Site, track users&apos; movements around the Site, and gather demographic information. This data is generally retained for a shorter period than Personal Data, unless it&apos;s needed for security enhancements, functionality improvements, or legal compliance.
        </li>
        <li>
          <strong>Data Deletion:</strong> When you delete information from our sites, we may retain it for certain periods of time, even if they are no longer accessible to you. If you are a California resident, you have the right under the California Consumer Privacy Act (CCPA) to request the deletion of your personal information, subject to certain exceptions. For more details on how to exercise your rights, please refer to the &quot;Your California Privacy Rights&quot; section of this Privacy Policy.
        </li>
        <li>
          <strong>Retention for Legal Claims:</strong> In situations where there may be a legal claim, dispute, or investigation, we may retain your data for longer periods to ensure compliance with applicable laws or court orders.
        </li>
      </PolicyUl>
      <PolicyP>We also provide tools and mechanisms for you to manage your data, including options to delete, correct, or request a copy of your data. Our retention periods vary depending on the type of data and its intended use, ensuring we adhere to privacy and data minimization principles. We regularly review our data retention policies to ensure they align with evolving legal standards and our commitment to your privacy.</PolicyP>

      <PolicyH2>Your California Privacy Rights (CCPA)</PolicyH2>
      <PolicyP>This section provides additional details about the personal information we collect about California consumers and the rights afforded to them under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).</PolicyP>

      <PolicyH3>Categories of Personal Information Collected</PolicyH3>
      <PolicyP>In the past 12 months, we may have collected the following categories of personal information from California consumers:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Identifiers:</strong> This includes your real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, social security number, driver&apos;s license number, passport number, or other similar identifiers.
        </li>
        <li>
          <strong>Customer Records Information:</strong> This includes information such as your name, contact information, billing and shipping address, and purchase history.
        </li>
        <li>
          <strong>Commercial Information:</strong> This includes information about products or services you have purchased, considered, or shown interest in.
        </li>
        <li>
          <strong>Internet Activity:</strong> This includes your browsing history on our website, search queries, interactions with our online ads or marketing emails, and device information.
        </li>
        <li>
          <strong>Geolocation Data:</strong> This includes your device&apos;s physical location.
        </li>
        <li>
          <strong>Inferences:</strong> We may draw inferences from your personal information to create a profile reflecting your preferences and interests.
        </li>
      </PolicyUl>

      <PolicyH3>Your Rights Under the CCPA</PolicyH3>
      <PolicyP>As a California consumer, you have the following rights:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, the sources of the information, the purposes for collecting it, and the categories of third parties with whom we share it.
        </li>
        <li>
          <strong>Right to Delete:</strong> You have the right to request that we delete your personal information, subject to certain exceptions.
        </li>
        <li>
          <strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you.
        </li>
        <li>
          <strong>Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt-out of the sale or sharing of your personal information. We do not currently sell or share your personal information, but if we do so in the future, we will provide a clear way for you to opt-out.
        </li>
        <li>
          <strong>Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit our use of your sensitive personal information to only that which is necessary to perform the services you request or for other limited purposes as permitted by the CCPA.
        </li>
        <li>
          <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.
        </li>
      </PolicyUl>

      <PolicyH3>Exercising Your Rights</PolicyH3>
      <PolicyP>
        To exercise your rights under the CCPA, please contact us at{' '}
        <a href='mailto:legal@prestonkwei.com' className='text-blue-600 hover:underline'>
          legal@prestonkwei.com
        </a>
        . We will respond to your request within 45 days.
      </PolicyP>

      <PolicyH3>Authorized Agents</PolicyH3>
      <PolicyP>You may designate an authorized agent to make a request on your behalf. To do so, you must provide the agent with written permission to act on your behalf, and we may need to verify your identity directly.</PolicyP>

      <PolicyH2>Nevada Privacy Rights</PolicyH2>
      <PolicyP>
        Nevada residents may opt out of the sale of certain covered information. We do not currently sell covered information as defined under Nevada law. If we do so in the future, we will provide a mechanism for Nevada residents to opt out. You may submit a verified request to opt out by contacting us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        .
      </PolicyP>

      <PolicyH2>Other U.S. State Privacy Rights</PolicyH2>
      <PolicyP>
        Depending on your state of residence, you may have additional rights regarding your personal information, such as the right to confirm whether we process your data, to access and receive a copy of your data, to correct inaccuracies, to delete your data, to obtain a portable copy, to opt out of targeted advertising or the sale of personal information, and to limit the use of sensitive personal information. We do not sell personal information as that term is commonly defined under state laws. To exercise any of these rights, please contact us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        . We will not discriminate against you for exercising your privacy rights.
      </PolicyP>

      <PolicyH2>Legal Basis for Processing Personal Data Under General Data Protection Regulation (GDPR)</PolicyH2>
      <PolicyP>If you are located within the European Economic Area (EEA), our legal basis for collecting, storing, and processing your personal information is determined by the specific provisions of the General Data Protection Regulation (GDPR). The processing of your Personal Data as outlined in this Privacy Policy is dependent on the categories of data involved and the particular context in which it is collected. We rely on several legal grounds for such processing activities, including but not limited to:</PolicyP>
      <PolicyUl>
        <li>The necessity of processing for the execution of a contract to which you are a party, or to take steps at your request prior to entering into such a contract. This includes fulfilling obligations related to service delivery, product purchases, or any other agreements entered with us.</li>
        <li>Your explicit and informed consent, provided voluntarily and clearly, to allow us to collect, use, and process your Personal Data for specific purposes. You retain the right to withdraw your consent at any time, subject to applicable legal limitations.</li>
        <li>Our legitimate interests in processing your Personal Data, where such interests are not overridden by your fundamental rights and freedoms. These interests may include business operations, fraud prevention, improvement of our services, and ensuring the security and integrity of our systems.</li>
        <li>The necessity of processing for the proper handling of payment transactions, including verifying your identity, preventing fraudulent activity, and facilitating the financial aspects of our services in accordance with legal and contractual obligations.</li>
        <li>Compliance with applicable laws, regulations, legal processes, or enforceable governmental requests. This includes obligations to retain records, respond to legal claims, and ensure adherence to statutory and regulatory requirements.</li>
      </PolicyUl>
      <PolicyP>We are committed to ensuring that your Personal Data is processed in accordance with the highest standards of transparency, security, and respect for your privacy rights. If you have any concerns regarding the legal basis under which your Personal Data is being processed, please contact us for clarification or to exercise your rights as afforded by the GDPR.</PolicyP>

      <PolicyH2>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</PolicyH2>
      <PolicyP>If you are a resident of the European Economic Area (EEA), you have certain data protection rights aimed at allowing you to control the use of your Personal Data. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</PolicyP>
      <PolicyP>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:</PolicyP>
      <PolicyUl>
        <li>The right to access, update, or delete the information we have on you.</li>
        <li>The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
        <li>The right to object. You have the right to object to our processing of your Personal Data.</li>
        <li>The right of restriction. You have the right to request that we restrict the processing of your personal information.</li>
        <li>The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable, and commonly used format.</li>
        <li>The right to withdraw consent. You also have the right to withdraw your consent at any time when we rely on your consent to process your personal information.</li>
      </PolicyUl>
      <PolicyP>Please note that we may ask you to verify your identity before responding to such requests. You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</PolicyP>

      <PolicyH2>Transfer of Data</PolicyH2>
      <PolicyP>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. We will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</PolicyP>
      <PolicyP>
        For transfers from the EEA, UK, or Switzerland to the United States or other countries, we rely on appropriate safeguards such as Standard Contractual Clauses approved by the European Commission or UK authorities, or other mechanisms permitted by applicable law. You may request a copy of the safeguards we use for international transfers by contacting us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        .
      </PolicyP>

      <PolicyH2>Disclosure of Data</PolicyH2>
      <PolicyP>Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</PolicyP>
      <PolicyP>We may disclose your Personal Data in the good faith belief that such action is necessary to:</PolicyP>
      <PolicyUl>
        <li>Comply with a legal obligation.</li>
        <li>Protect and defend the rights or property of PrestonKwei.com.</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Site.</li>
        <li>Protect the personal safety of users of the Site or the public.</li>
        <li>Protect against legal liability.</li>
      </PolicyUl>

      <PolicyH2>Marketing and Communications</PolicyH2>
      <PolicyP>We may use your contact information to send you newsletters, promotional offers, product updates, and other marketing communications. You can opt out of marketing emails at any time by clicking the unsubscribe link in our emails or by contacting us. Even if you opt out of marketing, we may still send you transactional or service-related messages (e.g., account notifications, password resets, responses to your inquiries). We do not share your contact information with third parties for their direct marketing purposes without your consent, except as permitted by law. In some jurisdictions, we may need your consent before sending certain types of marketing; where required, we will obtain that consent.</PolicyP>

      <PolicyH2>Data Breach Notification</PolicyH2>
      <PolicyP>Your trust in our ability to safeguard your personal information is paramount. In the unlikely event of a data breach, we are committed to taking immediate and transparent actions to mitigate the impact and inform affected users. Our data breach notification process is designed to comply with applicable laws and regulations, ensuring your rights and privacy are protected.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Timely Notification:</strong> Upon discovering a data breach involving your personal information, we will promptly assess the scope and nature of the breach. We will notify affected users as soon as reasonably possible, in accordance with legal requirements, and no later than the time frames mandated by applicable laws.
        </li>
        <li>
          <strong>Communication Channels:</strong> Notifications will be sent via email, phone, or other appropriate communication methods. If contact information is unavailable, we will post notices prominently on our website to ensure affected individuals are informed.
        </li>
        <li>
          <strong>Details Provided:</strong> Our notifications will include comprehensive information about the breach, such as the types of data involved, the potential risks to affected individuals, measures we are taking to address the breach, and recommended actions users can take to protect themselves.
        </li>
        <li>
          <strong>Collaboration with Authorities:</strong> We will cooperate fully with relevant authorities, such as data protection regulators or law enforcement agencies, to investigate the breach and prevent further incidents.
        </li>
        <li>
          <strong>Preventive Measures:</strong> Following a breach, we will conduct a thorough review of our security practices, implement enhanced protections, and update our systems to reduce the risk of future incidents.
        </li>
      </PolicyUl>
      <PolicyP>
        We are committed to transparency and accountability. If you have concerns about a data breach or wish to inquire about our breach response procedures, please contact us at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        . Your security and privacy are our highest priorities.
      </PolicyP>

      <PolicyH2>Third-Party Service Providers</PolicyH2>
      <PolicyP>We engage third-party service providers across various jurisdictions, including the United States and internationally, to perform critical functions and deliver services on our behalf. These engagements may necessitate the sharing of your personal information, but solely to the extent required for the providers to fulfill their obligations and deliver the agreed-upon services.</PolicyP>
      <PolicyP>Categories of service providers we may use include: hosting and infrastructure providers; payment processors; email and communication services; analytics and performance monitoring; customer support tools; advertising and marketing platforms; fraud detection and security services; and professional advisors (e.g., legal, accounting). All such data-sharing activities are conducted under the framework of binding legal agreements that enforce strict confidentiality, privacy, and security standards. These agreements obligate our service providers to comply with applicable data protection laws and to implement appropriate security measures to safeguard your personal information against unauthorized access, disclosure, or misuse. We take steps to select reputable providers and to monitor and audit them where feasible to ensure ongoing compliance with our data protection requirements. By maintaining these safeguards, we aim to ensure that any handling of your personal information by third parties aligns with our commitment to privacy and security.</PolicyP>

      <PolicyH2>Security Measures</PolicyH2>
      <PolicyP>We are steadfast in our commitment to protecting the confidentiality, integrity, and security of your personal information. To prevent unauthorized access, use, or disclosure, we have implemented a comprehensive suite of security measures and best practices.</PolicyP>
      <PolicyUl>
        <li>
          <strong>Encryption:</strong> We use industry-standard encryption (e.g., TLS/SSL) for data in transit and appropriate encryption for data at rest where applicable.
        </li>
        <li>
          <strong>Access Controls:</strong> Access to personal information is restricted to authorized personnel on a need-to-know basis, with authentication and role-based permissions.
        </li>
        <li>
          <strong>Infrastructure:</strong> Our systems are hosted in secure environments with physical and logical safeguards, and we work with providers that maintain strong security postures.
        </li>
        <li>
          <strong>Monitoring and Auditing:</strong> We monitor our systems for suspicious activity, maintain audit logs, and conduct regular security reviews and vulnerability assessments.
        </li>
        <li>
          <strong>Incident Response:</strong> We have procedures to detect, contain, and respond to security incidents and to notify affected individuals and authorities when required by law.
        </li>
        <li>
          <strong>Training:</strong> Personnel with access to personal information receive training on data protection and security practices.
        </li>
      </PolicyUl>
      <PolicyP>Despite these measures, no method of transmission or storage is completely secure. We cannot guarantee absolute security of your personal information and you use our Site at your own risk to the extent permitted by law.</PolicyP>

      <PolicyH2>Children&apos;s Privacy</PolicyH2>
      <PolicyP>Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take the necessary actions to remove information from our services.</PolicyP>
      <PolicyP>In certain jurisdictions, higher age thresholds may apply for consent or processing of personal data. Where required, we will obtain parental or guardian consent before collecting personal information from minors above 13 but below the applicable age of consent. Parents and guardians may contact us to review, correct, or delete personal information we have collected from their children.</PolicyP>

      <PolicyH2>Data Protection Officer and EU/UK Representative</PolicyH2>
      <PolicyP>
        For questions about our data practices, or to exercise your rights under the GDPR or UK GDPR, you may contact our data protection contact at{' '}
        <a href='mailto:privacy@prestonkwei.com' className='text-blue-600 hover:underline'>
          privacy@prestonkwei.com
        </a>
        . If you are located in the EEA or UK and believe we process your personal data in a way that requires us to designate a representative in your jurisdiction, you may contact us at the same address for details.
      </PolicyP>

      <PolicyH2>Changes to This Privacy Policy</PolicyH2>
      <PolicyP>Our Privacy Policy may be updated periodically to reflect changes in our practices, legal or regulatory requirements, or other factors that may affect the way we handle your personal information. Such updates are part of our commitment to maintaining transparency and ensuring the highest level of privacy protection for our users. Whenever significant changes are made to this policy, we will notify you by sending an email to the address associated with your account, or by placing a prominent notice on our website. The notification will include details of the changes, the effective date, and any actions you may need to take. We encourage you to review the updated Privacy Policy thoroughly to understand how your information will be treated. Continued use of our services after such changes have taken effect will constitute your acceptance of the revised policy. If you do not agree with this privacy policy, please discontinue your use of our sites, and delete all information related to you. We value your trust and are committed to continuing to earn it with our respect for your privacy. Please check back regularly to keep informed of updates to this policy.</PolicyP>
    </PolicyLayout>
  )
}
export default Privacy
