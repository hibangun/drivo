import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-row">
        <Sidebar />
        <section className="bg-slate-50 w-9/12 p-6 min-h-screen">
          {children}
        </section>
      </main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Drivo',
  description: 'Driver Management System'
}

export default Layout
