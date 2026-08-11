import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-[70vh] w-full flex flex-col items-center justify-center px-6 py-24 text-center'>
      <p className='text-xs md:text-sm font-semibold uppercase tracking-[0.45em] text-accent mb-10'>Error 404</p>

      <div className='flex select-none items-center justify-center gap-4 md:gap-6' aria-label='404'>
        <span className='text-[7rem] md:text-[12rem] leading-none font-black text-transparent [-webkit-text-stroke:2px_#52525b] md:[-webkit-text-stroke:3px_#52525b]'>4</span>
        <span className='block rounded-full w-[6.5rem] h-[6.5rem] md:w-[11rem] md:h-[11rem] border-[6px] md:border-[8px] border-accent' />
        <span className='text-[7rem] md:text-[12rem] leading-none font-black text-transparent [-webkit-text-stroke:2px_#52525b] md:[-webkit-text-stroke:3px_#52525b]'>4</span>
      </div>

      <h1 className='mt-12 text-3xl md:text-5xl font-bold tracking-tight text-white'>
        Document Not <span className='italic font-semibold text-accent'>Found</span>
      </h1>
      <p className='mt-4 max-w-md font-source text-sm md:text-base leading-relaxed text-zinc-400'>This document doesn&apos;t exist, was moved, or was never here in the first place.</p>

      <Link href='/' className='mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm md:text-base font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5'>
        <i className='bi bi-arrow-left' aria-hidden='true' />
        All Documents
      </Link>
    </div>
  )
}
