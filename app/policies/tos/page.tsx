'use client'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyTitle, PolicyLastUpdated, PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyOl } from '@/components/PolicyContent'

const TermsOfService = () => {
  return (
    <PolicyLayout>
      <PolicyTitle>Terms of Service</PolicyTitle>
      <PolicyLastUpdated>Last updated: March 3, 2026</PolicyLastUpdated>
      <PolicyP>These Terms of Service (&quot;Terms&quot;) govern your access to and use of our websites, services, and products (collectively, the &quot;Services&quot;). By accessing or using the Services, you acknowledge and agree to be legally bound by these Terms. This agreement may affect your legal rights, including the waiver of certain rights.</PolicyP>
      <PolicyP>PLEASE READ THESE TERMS CAREFULLY. These Terms include an Arbitration Agreement, a Class Action Waiver, and a Jury Trial Waiver that impact your rights. The Arbitration Agreement requires that, with limited exceptions, disputes between you and us must be resolved through binding, individual arbitration rather than in court. By agreeing to arbitration, you waive your right to a trial by judge or jury. Arbitration also involves more limited discovery and appellate rights compared to court proceedings. By using our Services, you agree that you have read and accept to be bound by these Terms.</PolicyP>

      <PolicyH2>Definitions</PolicyH2>
      <PolicyP>In these Terms, unless the context otherwise requires: &quot;Site&quot; or &quot;Sites&quot; means the PrestonKwei.com suite of websites, applications, and related digital properties. &quot;We,&quot; &quot;us,&quot; and &quot;our&quot; refer to PrestonKwei.com and its affiliates. &quot;You&quot; and &quot;your&quot; refer to the individual or entity accessing or using the Services. &quot;Content&quot; means any text, images, video, audio, software, or other materials. &quot;User Content&quot; means Content that you or other users submit, upload, or transmit through the Services. &quot;Services&quot; means all features, content, and functionality offered through our Sites. &quot;Account&quot; means any registration or profile you create to access certain parts of the Services.</PolicyP>

      <PolicyH2>Overview</PolicyH2>
      <PolicyP>
        These Terms of Service (&quot;Terms&quot;) govern your use of all websites within the PrestonKwei.com suite of apps (&quot;Sites&quot;). These Terms are a LEGALLY BINDING agreement between you, and PrestonKwei.com. By accessing or using any of our Sites, you agree to be legally bound by these Terms. If we reasonably believe that your use of our Sites breaches any of these Terms, we reserve the right to terminate your access. For questions, comments, or concerns regarding these Terms, please email us at{' '}
        <a href='mailto:tos@prestonkwei.com' className='text-blue-600 hover:underline'>
          tos@prestonkwei.com
        </a>
        . It is your responsibility to ensure that your activities on our Sites are compliant with these Terms, as well as with any applicable laws and regulations. We aim to provide a seamless user experience, and your adherence to these Terms helps us maintain the integrity and security of our Sites.
      </PolicyP>

      <PolicyH2>Eligibility and Age Requirements</PolicyH2>
      <PolicyP>In order to use our Sites, you must meet the legal age and eligibility requirements set by local law. In the United States, you must be at least 18 years old to use our Sites or create accounts on our Sites. Minors under the age of 18 but over 13 years old must get permission from a parent or guardian to use our Sites. Parents or guardians who create an account on behalf of a minor take full responsibility and acceptance of these terms of service for our Sites. Minors under the age of 13 should not use our Sites, regardless of whether they have permission from a parent or guardian. Users in countries other than the United States must meet the minimum age requirements set by local law. We strongly encourage parents and guardians to monitor their children&apos;s online activity to ensure they do not access our Sites without the appropriate consent. By using our Sites, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and current. We reserve the right to verify eligibility and to suspend or terminate accounts that do not comply.</PolicyP>

      <PolicyH2>Account Registration and Security</PolicyH2>
      <PolicyP>Certain features of our Sites may require you to create an account. When you register, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account credentials or from unauthorized use of your account. You may not create an account using a false identity or on behalf of another person without their authorization. We reserve the right to refuse service, suspend or terminate accounts, or remove or edit content at our sole discretion, including for violation of these Terms.</PolicyP>

      <PolicyH2>What You Can Expect From Us</PolicyH2>
      <PolicyP>By using our Sites, you can expect us to:</PolicyP>
      <PolicyUl>
        <li>Provide access to the services and features of our Sites as available.</li>
        <li>Strive to maintain the security and privacy of your data.</li>
        <li>Communicate any significant changes to these Terms of Service.</li>
      </PolicyUl>
      <PolicyP>Additionally, we commit to providing regular updates on new features and enhancements to improve your experience on our Sites. Our goal is to ensure that you have a positive, engaging, and secure experience while using our services.</PolicyP>

      <PolicyH2>What We Expect From You</PolicyH2>
      <PolicyP>When using our Sites, we expect that you comply with our:</PolicyP>
      <PolicyUl>
        <li>Terms of Service and Privacy Policy.</li>
        <li>Legal Policies that can be found on this website.</li>
        <li>Site-Specific Privacy Policy and Terms of Service.</li>
      </PolicyUl>
      <PolicyP>You also agree that by submitting data to our Sites, you acknowledge that while we strive to store your data securely, you waive the right to initiate legal action against us in the event of any data breach or leakage. Your cooperation is crucial to maintain the safety and integrity of our online community. Please ensure that your activities on the Sites do not disrupt or interfere with the standard operation of our services, and adhere strictly to the guidelines laid out in our Terms of Service and accompanying policies.</PolicyP>

      <PolicyH2>User Conduct and Acceptable Use</PolicyH2>
      <PolicyP>You agree to use our Sites in a manner that is lawful, respectful, and in accordance with these Terms. You will not:</PolicyP>
      <PolicyUl>
        <li>Engage in any activity that breaches the security of our Sites, including hacking, phishing, spreading malware, deploying bots or scrapers without permission, or attempting to circumvent access controls or authentication.</li>
        <li>Use our Sites to distribute or store harmful, illegal, defamatory, obscene, harassing, discriminatory, or otherwise offensive content, or content that infringes the intellectual property or privacy rights of others.</li>
        <li>Interfere with or disrupt the functioning of our Sites or servers, including by overloading systems, introducing viruses, or engaging in denial-of-service or similar attacks.</li>
        <li>Attempt to gain unauthorized access to any part of our Sites or any related systems, networks, or data belonging to us or other users.</li>
        <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
        <li>Use the Services for any commercial purpose not expressly permitted by us, including unsolicited advertising, spam, or pyramid schemes.</li>
        <li>Collect or harvest personal information of other users without their consent.</li>
        <li>Use automated means (e.g., scripts, crawlers) to access the Services in a manner that imposes an unreasonable load on our infrastructure or violates our robots.txt or similar guidelines.</li>
        <li>Reverse engineer, decompile, or disassemble any part of our Sites or attempt to derive source code, except where expressly permitted by applicable law.</li>
        <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices on the Services.</li>
      </PolicyUl>
      <PolicyP>We reserve the right to investigate suspected violations and to cooperate fully with law enforcement. Violating these guidelines may lead to immediate suspension or termination of your access to our Sites, removal of content, and may expose you to legal action if your behavior causes harm to others or to the integrity of our Sites.</PolicyP>

      <PolicyH2>Our Intellectual Property</PolicyH2>
      <PolicyP>The Services, including their design, structure, layout, text, graphics, logos, icons, images, audio, video, software, and other content (excluding User Content), are owned by PrestonKwei.com or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works from our Services or any part thereof without our prior written consent. Our names, logos, and related marks are our trademarks; you may not use them without our permission. Nothing in these Terms grants you any right, title, or interest in our intellectual property except the limited license to use the Services in accordance with these Terms.</PolicyP>

      <PolicyH2>User Content and Intellectual Property</PolicyH2>
      <PolicyP>Many of our Sites allow you to upload, submit, store, send, receive, or share your content. While you are not obligated in any way to provide content, if you choose to upload or create any content, you are granted a license to your content as outlined below. All content created on these Sites must also abide by these terms.</PolicyP>
      <PolicyP>Your content remains yours, which means that you retain any intellectual property rights that you have in your content. This includes rights such as:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Copyright:</strong> The exclusive right to copy, distribute, display, and create derivative works from your original content.
        </li>
        <li>
          <strong>Trademarks:</strong> Any logos, brand names, or other distinctive marks you use in your content.
        </li>
        <li>
          <strong>Patents:</strong> If your content includes a new invention, you may have patent rights.
        </li>
      </PolicyUl>
      <PolicyP>You are responsible for ensuring that any content you provide does not violate the intellectual property rights of others and adheres to all applicable laws and regulations. We respect the ownership of your creations and seek to avoid any disputes or legal issues arising from uploaded content.</PolicyP>

      <PolicyH2>License to Your Content</PolicyH2>
      <PolicyP>By uploading or creating content on our Sites, you grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content. This license continues even if you stop using our Sites.</PolicyP>
      <PolicyP>This means we can:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Use your content to provide and improve our services:</strong> For example, we might use your feedback to make our Sites better or use your photos in promotional materials.
        </li>
        <li>
          <strong>Share your content with others:</strong> This could include displaying it on our Sites, sharing it on social media, or using it in marketing campaigns.
        </li>
        <li>
          <strong>Modify your content:</strong> We may need to make changes to your content to fit our platform or to create new features.
        </li>
      </PolicyUl>
      <PolicyP>The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even after you stop using our Sites, but it does not affect your ownership rights, which are retained solely by you. You represent and warrant that you own or have the necessary rights to grant this license and that your content does not infringe any third party&apos;s rights or violate any applicable law. We reserve the right to remove or disable access to any User Content at any time, with or without notice, if we believe it violates these Terms, is objectionable, or for any other reason at our discretion. We are not obligated to store, retain, or provide you copies of User Content you have submitted.</PolicyP>

      <PolicyH2>Copyright and DMCA</PolicyH2>
      <PolicyP>
        We respect the intellectual property rights of others and expect users to do the same. If you believe that content on our Sites infringes your copyright, you may submit a notice to our designated agent in accordance with the Digital Millennium Copyright Act (DMCA). Your notice must include: (1) identification of the copyrighted work; (2) identification of the infringing material and its location; (3) your contact information; (4) a statement that you have a good faith belief that use is not authorized; (5) a statement that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner; and (6) your physical or electronic signature. Send DMCA notices to{' '}
        <a href='mailto:legal@prestonkwei.com' className='text-blue-600 hover:underline'>
          legal@prestonkwei.com
        </a>
        . We may terminate the accounts of repeat infringers. If you believe your content was removed in error, you may submit a counter-notice as permitted under the DMCA.
      </PolicyP>

      <PolicyH2>Modifications to the Services</PolicyH2>
      <PolicyP>We may modify, suspend, discontinue, or restrict access to all or any part of the Services at any time, with or without notice. We may add, change, or remove features or functionality. We do not guarantee that any particular feature or content will remain available. Your continued use of the Services after any modification constitutes acceptance of the modified Services. If you do not agree to modifications, you must stop using the Services. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services.</PolicyP>

      <PolicyH2>Termination</PolicyH2>
      <PolicyP>We may suspend or terminate your access to our Sites at any time, with or without cause or notice, or if we reasonably believe that you have violated any of these terms. You may terminate your account at any time by contacting us or through account settings if available. Upon termination, you must cease all use of the Sites and any associated content. Termination does not relieve you of obligations incurred prior to termination, including payment obligations and indemnification. Provisions that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, indemnification, dispute resolution, and governing law) will survive. The decision to terminate access is not taken lightly, and is generally the result of repeated violations of our Terms of Service or engaging in illegal activities using our Sites. We reserve the right to take further legal action if deemed necessary to protect our interests or those of our users.</PolicyP>

      <PolicyH2>Payment and Fees</PolicyH2>
      <PolicyP>If you purchase any paid services, subscriptions, or products through our Sites, you agree to pay all applicable fees as described at the time of purchase. Fees may be recurring (e.g., subscriptions) or one-time. You must provide accurate billing and payment information. We may use third-party payment processors; your use of those services is subject to their terms. Refunds are governed by our refund policy as stated at the time of purchase or in separate terms. We may change fees upon reasonable notice where required by law or contract. Failure to pay may result in suspension or termination of paid features. All fees are in the currency specified and are exclusive of applicable taxes unless otherwise stated; you are responsible for any taxes due.</PolicyP>

      <PolicyH2>LIMITATION OF WARRANTIES</PolicyH2>
      <PolicyP>THE SITES AND ALL CONTENT AND SERVICES PROVIDED THROUGH THEM ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT THE SITES WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY CONTENT. YOU AGREE THAT YOUR USE OF THE SITES IS AT YOUR SOLE RISK AND DISCRETION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</PolicyP>

      <PolicyH2>LIMITATION OF LIABILITY</PolicyH2>
      <PolicyP>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PRESTONKWEI.COM, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SITES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (C) ANY CONTENT OBTAINED FROM THE SITES; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES EXCEED THE GREATER OF THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR ONE HUNDRED U.S. DOLLARS ($100). SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES OR OF LIABILITY FOR CERTAIN TYPES OF DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, OUR LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</PolicyP>

      <PolicyH2>Indemnification</PolicyH2>
      <PolicyP>You agree to indemnify, defend, and hold harmless PrestonKwei.com, its affiliates, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys&apos; fees) that we may incur as a result of or arising from your use of the Sites or violation of these terms. This indemnification obligation will survive the termination of your use of the Sites and is a fundamental part of our agreement, enabling us to offer a secure and legal platform for all users.</PolicyP>

      <PolicyH2>Governing Law</PolicyH2>
      <PolicyP>These Terms are governed by the laws of the State of California and the United States, without regard to their conflict of law principles. You agree to the exclusive personal jurisdiction of the state and federal courts located in California for litigating any claims or disputes that are not subject to arbitration. This provision ensures that any legal matters arising under these Terms are handled in a consistent and predictable manner, benefiting both you and us by providing clarity on jurisdictional issues. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.</PolicyP>

      <PolicyH2>Force Majeure</PolicyH2>
      <PolicyP>We are not liable for any failure or delay in performing our obligations under these Terms where such failure or delay results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, labor disputes, pandemics, shortages of transportation or facilities, fuel, energy, labor, or materials, or failure of third-party telecommunications or infrastructure. If a force majeure event continues for an extended period, we may suspend or terminate the affected Services upon notice to the extent permitted by law.</PolicyP>

      <PolicyH2>Export Compliance</PolicyH2>
      <PolicyP>You may not use, export, re-export, or transfer the Services or any content therein in violation of applicable export laws and regulations, including those of the United States. You represent that you are not located in a country that is subject to a U.S. government embargo or that has been designated by the U.S. government as a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. government list of prohibited or restricted parties. You are responsible for complying with all applicable import, export, and sanctions laws in your jurisdiction.</PolicyP>

      <PolicyH2>U.S. Government Rights</PolicyH2>
      <PolicyP>If you are a U.S. government entity or are acquiring the Services on behalf of the U.S. government, the Services are provided as &quot;Commercial Items&quot; as defined in 48 C.F.R. § 2.101, consisting of &quot;Commercial Computer Software&quot; and &quot;Commercial Computer Software Documentation&quot; as used in 48 C.F.R. § 12.212 or 48 C.F.R. § 227.7202. The Services are licensed to U.S. government end users only as Commercial Items and with only those rights as are granted to other end users pursuant to these Terms.</PolicyP>

      <PolicyH2>Assignment</PolicyH2>
      <PolicyP>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. Any attempted assignment in violation of this section is void. We may assign or transfer these Terms, or our rights and obligations hereunder, without restriction, including in connection with a merger, acquisition, reorganization, or sale of assets. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties and their permitted successors and assigns.</PolicyP>

      <PolicyH2>Availability and Support</PolicyH2>
      <PolicyP>We strive to keep the Services available but do not guarantee uninterrupted access. The Services may be unavailable due to maintenance, updates, technical failures, or events beyond our control. We do not guarantee any particular uptime or response time. Support may be offered at our discretion through email, in-product help, or other channels we designate. We are not obligated to provide support or to respond within any particular timeframe unless we have agreed otherwise in a separate agreement.</PolicyP>

      <PolicyH2>Changes to These Terms</PolicyH2>
      <PolicyP>We may modify these Terms at any time. Notice of changes may be provided through email, on our Sites, or by updating the &quot;Last Updated&quot; date. For material changes, we will provide notice as required by applicable law (e.g., by email or prominent notice on the Sites). Your continued use of our Sites after changes become effective constitutes acceptance of the new terms. If you do not agree to the modified Terms, you must stop using the Services and may terminate your account. It is your responsibility to review these Terms periodically for any changes as they are binding on you.</PolicyP>

      <PolicyH2>Severability</PolicyH2>
      <PolicyP>If any provision of these Terms is found invalid, illegal, or unenforceable, the remaining provisions will remain in effect. This clause helps to ensure that the entire Terms of Service do not become unenforceable if one part is deemed invalid. It is designed to protect the integrity of the remaining provisions, ensuring that our Terms remain effective and enforceable.</PolicyP>

      <PolicyH2>Entire Agreement</PolicyH2>
      <PolicyP>These Terms constitute the entire agreement between you and PrestonKwei.com regarding the use of our Sites and supersede all prior agreements and understandings, whether written or oral, relating to the subject matter herein. This clause clarifies that these Terms are the final and complete expression of the agreement between us concerning your use of our Sites, and it prevails over any previous discussions or agreements.</PolicyP>

      <PolicyH2>Privacy Policy</PolicyH2>
      <PolicyP>Our commitment to your privacy is outlined in our Privacy Policy. By using our Sites, you agree to the collection, use, and sharing of your information as described in our Privacy Policy. We take your privacy seriously and strive to protect your personal information through appropriate measures. Please review our Privacy Policy to understand how we handle your data.</PolicyP>

      <PolicyH2>Third-Party Links and Services</PolicyH2>
      <PolicyP>Our Sites may contain links to third-party websites or services that are not owned or controlled by PrestonKwei.com. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that PrestonKwei.com shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit. The inclusion of any link does not imply our endorsement of the linked site or any association with its operators. Our Sites may also integrate with or use third-party services (e.g., authentication, analytics, payment processing); your use of those features may be subject to the third party&apos;s terms and policies.</PolicyP>

      <PolicyH2>User Feedback</PolicyH2>
      <PolicyP>
        We welcome and encourage feedback, comments, and suggestions for improvements to our Sites (&quot;Feedback&quot;). You can submit Feedback by emailing us at{' '}
        <a href='mailto:feedback@prestonkwei.com' className='text-blue-600 hover:underline'>
          feedback@prestonkwei.com
        </a>{' '}
        or through other feedback mechanisms provided within our Sites. By submitting Feedback, you grant us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free license to use and exploit such Feedback for any purpose. We may use your Feedback to make improvements to our services, and you acknowledge that we have no obligation to compensate you for any use of such Feedback.
      </PolicyP>

      <PolicyH2>Dispute Resolution</PolicyH2>
      <PolicyH3>Informal Dispute Resolution</PolicyH3>
      <PolicyP>
        If a dispute arises between you and us relating to these Terms or the use of our Sites, we strongly encourage you to first contact us directly to seek a resolution. You can reach us at{' '}
        <a href='mailto:legal@prestonkwei.com' className='text-blue-600 hover:underline'>
          legal@prestonkwei.com
        </a>
        . We will make reasonable efforts to address and resolve the dispute informally.
      </PolicyP>

      <PolicyH3>Binding Arbitration and Class Action Waiver</PolicyH3>
      <PolicyP>If we are unable to resolve the dispute through informal means, you and PrestonKwei.com agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of our Sites, including the formation, interpretation, breach, or termination thereof, the relationship between the parties, and any related non-contractual obligations (&quot;Dispute&quot;), shall be finally and exclusively settled by binding arbitration. This arbitration agreement is intended to be broadly interpreted.</PolicyP>

      <PolicyH3>Exceptions</PolicyH3>
      <PolicyP>The following disputes are excluded from this arbitration agreement:</PolicyP>
      <PolicyOl>
        <li>Any claim that is within the jurisdiction of a small claims court, so long as the matter remains in small claims court and proceeds only on an individual (non-class, non-representative) basis.</li>
        <li>Any claim related to the enforcement or validity of your, our, or either of our licensors&apos; intellectual property rights.</li>
      </PolicyOl>

      <PolicyH3>Class Action Waiver</PolicyH3>
      <PolicyP>YOU AND PRESTONKWEI.COM AGREE TO WAIVE ANY RIGHT TO LITIGATE OR ARBITRATE ANY DISPUTE ON A CLASS ACTION BASIS OR IN A PRIVATE ATTORNEY GENERAL CAPACITY. No arbitration or proceeding can be combined with another without the prior written consent of all parties to the arbitrations or proceedings.</PolicyP>

      <PolicyH3>Arbitration Procedure</PolicyH3>
      <PolicyP>The arbitration shall be conducted by a single, neutral arbitrator. The arbitration shall be conducted at a mutually agreeable location to the parties, or if the parties cannot agree, in the county of your billing address or in Alameda County, California. The language of the arbitration shall be English. The arbitrator shall have the authority to award any remedy or relief that a court of competent jurisdiction could have awarded, but only on an individual basis. The arbitrator&apos;s decision shall be final and binding on the parties. The arbitrator shall apply the law of the State of California and the Federal Arbitration Act. Judgment on the award may be entered in any court of competent jurisdiction. The parties agree that the arbitrator may not consolidate more than one person&apos;s claims and may not preside over any form of representative or class proceeding.</PolicyP>

      <PolicyH3>Costs and Fees</PolicyH3>
      <PolicyP>Each party shall bear its own costs and expenses, including attorney&apos;s fees, incurred in connection with the arbitration.</PolicyP>

      <PolicyH3>Governing Law</PolicyH3>
      <PolicyP>The arbitration shall be governed by the Federal Arbitration Act and the substantive laws of California, without regard to its conflicts of law principles.</PolicyP>

      <PolicyH3>Survival</PolicyH3>
      <PolicyP>This arbitration agreement will survive the termination of these Terms or your use of the Sites.</PolicyP>

      <PolicyH3>Opt-Out Right</PolicyH3>
      <PolicyP>You may opt out of this arbitration agreement by sending a written notice to PO Box 20987, Oakland, CA, 94620 within 30 days of first becoming subject to this arbitration provision. The notice must include your name, address, and a clear statement that you wish to opt out of this arbitration agreement.</PolicyP>

      <PolicyH2>No Waiver</PolicyH2>
      <PolicyP>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. This clause ensures that the Terms remain enforceable even if one part is deemed invalid, protecting the integrity of our agreement.</PolicyP>

      <PolicyH2>Contact Information</PolicyH2>
      <PolicyP>
        If you have any questions about these Terms, please contact us at{' '}
        <a href='mailto:legal@prestonkwei.com' className='text-blue-600 hover:underline'>
          legal@prestonkwei.com
        </a>
        . For Terms of Service matters you may also write to us at PO Box 20987, Oakland, CA, 94620. We are committed to providing clear and understandable terms, and we welcome your inquiries and feedback to improve our services and terms. We will respond to legitimate requests within a reasonable time as required by applicable law.
      </PolicyP>

      <PolicyH2>Language and Interpretation</PolicyH2>
      <PolicyP>These Terms are written in English. Any translation we provide is for convenience only; in the event of a conflict between the English version and a translation, the English version will control. Headings and section titles are for convenience only and do not affect the interpretation of these Terms. The words &quot;include&quot; and &quot;including&quot; are not limiting. References to &quot;days&quot; mean calendar days unless otherwise specified.</PolicyP>
    </PolicyLayout>
  )
}
export default TermsOfService
