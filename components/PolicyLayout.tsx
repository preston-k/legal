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
      <header className='border-b border-zinc-800 px-5 md:px-10 lg:px-16 pt-12 md:pt-20 pb-12 md:pb-16'>
        <Link href='/' className='group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-150'>
          <i className='bi bi-arrow-left transition-transform duration-200 group-hover:-translate-x-0.5' aria-hidden='true' />
          All documents
        </Link>

        <p className='mt-10 text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.45em] text-accent'>Legal Document</p>
        <h1 className='mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] text-white'>{title}</h1>
        {description && <p className='mt-7 max-w-2xl font-source text-base md:text-lg leading-relaxed text-zinc-400 prose-legal'>{description}</p>}
        <p className='mt-8 font-mono text-[0.7rem] uppercase tracking-widest text-zinc-600'>Last updated {lastUpdated}</p>
      </header>

      <article className='max-w-[44rem] px-5 md:px-10 lg:px-16 py-14 md:py-20 prose-legal'>{children}</article>
    </>
  )
}

export default PolicyLayout
