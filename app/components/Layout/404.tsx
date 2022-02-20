import React, { FC, useState } from 'react'
import { Link } from 'remix'
import Header from './Header'
import Sidebar from './Sidebar'

type Layout404Props = {
  children?: never
  title?: string
  backlinkTo: string
  backlinkText: string
}

const Layout404: FC<Layout404Props> = function Layout404({
  title,
  backlinkTo,
  backlinkText
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <div className="flex flex-col h-screen">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <main className="flex flex-row">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} />
        <section className="bg-slate-50 w-full md:w-9/12 p-6 min-h-screen">
          <div className="min-h-full flex item-center justify-center py-12 px-4 sm:px-6lg:px-n">
            <div className="max-w-d w-full space-y-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  404
                </h2>
                <p className="mt-2 text-3xl landing-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {title}
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  <Link to={backlinkTo}>{backlinkText}</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout404
