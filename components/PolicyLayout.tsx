import Link from 'next/link'

type PolicyLayoutProps = {
  title: string
  lastUpdated: string
  description?: string
  children: React.ReactNode
}

const PolicyLayout = ({ title, lastUpdated, description, children }: PolicyLayoutProps) => {
  return (
    <>
      <header className='border-b border-edge'>
        <div className='shell-prose pt-10 md:pt-16 pb-11 md:pb-14'>
          <Link href='/' className='group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-150'>
            <i className='bi bi-arrow-left transition-transform duration-200 group-hover:-translate-x-0.5' aria-hidden='true' />
            All documents
          </Link>

          <h1 className='mt-9 max-w-4xl text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.98] text-white'>{title}</h1>
          {description && <p className='mt-6 max-w-2xl font-source text-base md:text-lg leading-relaxed text-zinc-400 prose-legal'>{description}</p>}
          <p className='mt-7 font-mono text-[0.7rem] uppercase tracking-widest text-zinc-600'>Last updated {lastUpdated}</p>
        </div>
      </header>

      <article className='shell-prose py-14 md:py-20 prose-legal'>{children}</article>
    </>
  )
}

export default PolicyLayout
