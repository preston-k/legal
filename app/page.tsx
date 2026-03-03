import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-800 flex items-center justify-center px-5 md:px-10'>
      <div className='bg-gray-200 max-w-3xl text-black p-8 rounded-lg shadow-lg  mx-auto w-full text-center'>
        <h1 className='text-3xl font-bold underline mb-6'>Legal Home - PrestonKwei.com</h1>
        <h3 className='text-xl font-semibold mb-4'>Overview</h3>
        <p className='text-sm leading-7 mb-8'>
          Welcome to PrestonKwei.com and its suite of applications. We are dedicated to delivering the highest quality experiences to our users, and transparency is a key part of our commitment. This includes clearly outlining our Terms of Service, Privacy Policy, and other legal notices, collectively referred to as the &quot;Terms.&quot; By accessing or using any part of our website or services, you acknowledge and agree that you have carefully read, fully understood, and accept to be bound by these Terms. Any questions regarding these terms should be directed to{' '}
          <a href='mailto:legal@prestonkwei.com' target='_blank' className='text-blue-600 hover:underline'>
            legal@prestonkwei.com
          </a>{' '}
          or (855) 681-5573.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <Link href='/policies/tos' className='block bg-cyan-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-cyan-800 transition-all'>
            Terms of Service
          </Link>
          <Link href='/policies/privacy' className='block bg-cyan-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-cyan-800 transition-all'>
            Privacy Policy
          </Link>
        </div>
        <div className='flex flex-col mt-5 font-semibold'>
          <div className='grid grid-cols-2 gap-4 w-full'>
            <Link href='/other/license'>
              <div className='text-blue-600 hover:underline'>Code Licensing</div>
            </Link>
            <Link href='/policies/cookies'>
              <div className='text-blue-600 hover:underline'>Cookie Policy</div>
            </Link>
            <div className='mx-auto col-span-2'>
              <Link href='/other/domains'>
                <div className='text-blue-600 hover:underline'>Our Domains</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
