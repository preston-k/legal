type PolicyTitleProps = {
  children: React.ReactNode
}

export const PolicyTitle = ({ children }: PolicyTitleProps) => <h1 className='text-3xl font-bold mb-3 text-black'>{children}</h1>

export const PolicyLastUpdated = ({ children }: PolicyTitleProps) => <p className='mb-4 text-black'>{children}</p>

export const PolicyH2 = ({ children }: PolicyTitleProps) => <h2 className='text-xl font-semibold mt-10 mb-4 text-black'>{children}</h2>

export const PolicyH3 = ({ children }: PolicyTitleProps) => <h3 className='text-xl font-semibold mt-6 mb-2 text-black'>{children}</h3>

export const PolicyP = ({ children }: PolicyTitleProps) => <p className='mb-4 text-black'>{children}</p>

export const PolicyUl = ({ children }: PolicyTitleProps) => <ul className='list-disc list-inside mb-4 space-y-2 text-black'>{children}</ul>

export const PolicyOl = ({ children }: PolicyTitleProps) => <ol className='list-decimal list-inside mb-4 space-y-2 text-black'>{children}</ol>

export const PolicyLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className='text-blue-600 hover:underline'>
    {children}
  </a>
)
