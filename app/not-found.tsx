import Link from 'next/link'
export default function NotFound() {
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center bg-slate-800 overscroll-none '>
        <h1 className='font-bold md:text-7xl text-5xl text-white text-center'>404</h1>
        <p className='font-bold text-white text-2xl mt-5'>Page Not Found</p>
        <Link href='/'>
          <button className='text-white mt-5 border-2 rounded-full px-5 py-2'>Go Home</button>
        </Link>
      </div>
    </>
  )
}
