import { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Drivo',
  description: 'Driver Management System'
}

export default Layout
