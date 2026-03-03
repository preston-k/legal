import Nav from '@/components/Nav'

type PolicyLayoutProps = {
  children: React.ReactNode
}

const PolicyLayout = ({ children }: PolicyLayoutProps) => {
  return (
    <>
      <Nav />
      <div className='max-w-4xl mx-auto w-full px-5 md:px-10 pb-16 pt-8 text-black'>{children}</div>
    </>
  )
}

export default PolicyLayout
