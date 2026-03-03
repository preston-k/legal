import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='border-b border-zinc-200'>
      <div className='max-w-7xl mx-auto w-full px-5 md:px-10 py-4'>
        <div className='w-full flex'>
          <Link href='/' className='font-poppins flex items-center justify-center text-black group'>
            <span className='group-hover:underline'>PrestonKwei.com</span> <div className='rounded ml-1 px-1 text-xs uppercase border'>LEGAL</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
