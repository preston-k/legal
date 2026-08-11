import Link from 'next/link'
import { PolicyEmail } from '@/components/PolicyContent'

const documents = [
  {
    href: '/policies/tos',
    title: 'Terms of Service',
    description: 'The binding agreement governing your access to and use of every site and application we operate.',
  },
  {
    href: '/policies/privacy',
    title: 'Privacy Policy',
    description: 'What information we collect, how we use and disclose it, and the rights available to you.',
  },
  {
    href: '/policies/cookies',
    title: 'Cookie Policy',
    description: 'The cookies and tracking technologies we deploy and how you can manage them.',
  },
  {
    href: '/other/license',
    title: 'Code Licensing',
    description: 'The restrictive license terms that apply to our software and source code.',
  },
  {
    href: '/other/domains',
    title: 'Our Domains',
    description: 'Every domain owned and operated under the PrestonKwei.com suite of applications.',
  },
]

export default function Home() {
  return (
    <>
      <section className='px-5 md:px-10 lg:px-16 pt-20 md:pt-32 pb-16 md:pb-24'>
        <p className='text-xs md:text-sm font-semibold uppercase tracking-[0.45em] text-accent'>PrestonKwei.com</p>
        <h1 className='mt-8 text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.9] text-white'>Legal</h1>
        <p className='mt-8 max-w-2xl font-source text-base md:text-lg leading-relaxed text-zinc-400 prose-legal'>
          By accessing or using any part of PrestonKwei.com or its suite of applications, you acknowledge that you have read, understood, and agree to be bound by the documents below, collectively the &quot;Terms.&quot;
        </p>
      </section>

      <div className='border-t border-zinc-800'>
        {documents.map((doc, index) => (
          <Link key={doc.href} href={doc.href} className='group block border-b border-zinc-800'>
            <div className='flex items-center justify-between gap-6 px-5 md:px-10 lg:px-16 py-7 md:py-9 transition-colors duration-150 hover:bg-white/[0.04]'>
              <div className='flex items-baseline gap-4 md:gap-8 min-w-0'>
                <span className='w-5 shrink-0 select-none font-mono text-xs tabular-nums text-zinc-600'>{String(index + 1).padStart(2, '0')}</span>
                <span className='min-w-0 transition-transform duration-200 group-hover:translate-x-1.5'>
                  <span className='block text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white'>{doc.title}</span>
                  <span className='mt-2.5 block max-w-xl font-source text-sm md:text-base leading-relaxed text-zinc-500'>{doc.description}</span>
                </span>
              </div>
              <i className='bi bi-arrow-right shrink-0 text-base md:text-lg text-zinc-600 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5' aria-hidden='true' />
            </div>
          </Link>
        ))}
      </div>

      <section className='px-5 md:px-10 lg:px-16 py-14 md:py-20'>
        <p className='font-source text-sm md:text-base leading-relaxed text-zinc-500'>
          Questions about these Terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or (855) 681-5573.
        </p>
      </section>
    </>
  )
}
