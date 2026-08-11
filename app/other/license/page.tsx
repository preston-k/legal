import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyP, PolicyEmail } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Code Licensing',
  description: 'The restrictive software license governing PrestonKwei.com code.',
}

const License = () => {
  return (
    <PolicyLayout title='Code Licensing' lastUpdated='August 10, 2026' description='The restrictive license terms that apply to all software and source code we make available.'>
      <PolicyP>Your use of our Sites and Services constitutes your acknowledgment that you have read, understood, and agree to be bound by this Software License (the &quot;License&quot;). By accessing or using the software, you accept every term and condition set forth here. Any use not expressly authorized by this License is strictly prohibited and automatically terminates the License.</PolicyP>

      <PolicyH2>License Terms</PolicyH2>
      <PolicyP>Permission to use the software is granted under a strictly limited, non-exclusive, non-transferable, non-sublicensable, and revocable license, solely for the purposes we expressly authorize. The software is provided &quot;as is&quot; and &quot;with all faults.&quot; The licensor makes no representation or warranty of any kind, express or implied, regarding functionality, reliability, fitness for a particular purpose, or freedom from defects or infringement, and shall not be liable for any damages or losses arising from use of or inability to use the software, whether or not foreseeable.</PolicyP>

      <PolicyH2>Prohibited Uses</PolicyH2>
      <PolicyP>You are expressly prohibited from modifying, copying, distributing, publishing, decompiling, reverse-engineering, disassembling, or creating derivative works of the software, in whole or in part. The software may not be used for any commercial purpose, resale, sublicensing, or redistribution of any kind, whether or not for monetary gain, and may not be used to train, fine-tune, or evaluate any machine-learning or artificial-intelligence system. Any use beyond the intended purpose, and any unauthorized exploitation, is strictly forbidden.</PolicyP>

      <PolicyH2>Termination</PolicyH2>
      <PolicyP>The licensor may terminate your access to and use of the software at any time, at its sole discretion, without notice or explanation. Upon termination you must immediately discontinue all use and destroy every copy in your possession or control. All right, title, and interest in and to the software, including all intellectual property rights, remain solely with the licensor at all times. Unauthorized use constitutes a material violation of this License and may result in legal action, including claims for damages and injunctive relief without the posting of a bond.</PolicyP>

      <PolicyH2>Indemnification</PolicyH2>
      <PolicyP>By using the software, you agree to indemnify, defend, and hold harmless the licensor against any claims, damages, liabilities, costs, and expenses, including reasonable attorneys&apos; fees, arising from your use or misuse of the software. Any breach of these terms results in the immediate termination of your access and may subject you to additional penalties under applicable law.</PolicyP>

      <PolicyH2>Contact</PolicyH2>
      <PolicyP>
        Licensing inquiries may be directed to <PolicyEmail address='legal@prestonkwei.com' />.
      </PolicyP>
    </PolicyLayout>
  )
}

export default License
