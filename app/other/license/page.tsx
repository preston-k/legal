'use client'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyTitle, PolicyLastUpdated, PolicyH2, PolicyP } from '@/components/PolicyContent'

const License = () => {
  return (
    <PolicyLayout>
      <PolicyTitle>Code Licensing</PolicyTitle>
      <PolicyLastUpdated>Last updated: January 10, 2025</PolicyLastUpdated>
      <PolicyP>Your use of our Sites and Services constitutes your acknowledgment that you have read, understood, and agree to be bound by this Software License, hereinafter referred to as the &quot;License.&quot; By accessing or using the software, you accept all terms and conditions set forth in this License, and any unauthorized use is strictly prohibited.</PolicyP>
      <PolicyH2>License Terms</PolicyH2>
      <PolicyP>Permission to use this software is granted under a strictly limited, non-exclusive, non-transferable, and revocable license. The software is provided &quot;as is,&quot; meaning that the licensor makes no representations or warranties of any kind, whether express or implied, regarding the software&apos;s functionality, reliability, fitness for a particular purpose, or freedom from defects or infringements. The licensor shall not be held liable for any damages or losses arising from the use or inability to use the software, whether foreseeable or not.</PolicyP>
      <PolicyH2>Prohibited Uses</PolicyH2>
      <PolicyP>Under this License, you are expressly prohibited from engaging in any actions that would modify, copy, distribute, decompile, reverse-engineer, or create derivative works of the software. The software may not be used for commercial purposes, resale, sublicensing, or any form of redistribution, whether for monetary gain or otherwise. Use of the software beyond the intended purpose or any unauthorized exploitation is strictly forbidden.</PolicyP>
      <PolicyH2>Termination</PolicyH2>
      <PolicyP>The licensor reserves the right to terminate your access to and use of the software at their sole discretion, without prior notice or explanation. Upon termination, you must immediately discontinue use of the software and delete any copies in your possession. All rights, title, and interest in and to the software, including intellectual property rights, remain solely with the licensor. Unauthorized use constitutes a violation of this License and may result in legal action, including but not limited to damages and injunctive relief.</PolicyP>
      <PolicyH2>Indemnification</PolicyH2>
      <PolicyP>By using this software, you agree to indemnify and hold harmless the licensor against any claims, damages, liabilities, or expenses arising from your use or misuse of the software. Any breach of these terms will result in the immediate termination of your access and may subject you to additional penalties under applicable law.</PolicyP>
    </PolicyLayout>
  )
}
export default License
