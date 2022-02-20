import { ReactNode } from 'react'
import { Link, useLocation } from 'remix'

type Menu = {
  href?: string
  title?: string
  icon?: ReactNode
  isActive?: boolean
}

type SidebarProps = {
  isMobileMenuOpen: boolean
}

export default function Sidebar({ isMobileMenuOpen }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={`py-6 bg-white h-screen z-20 ${
        isMobileMenuOpen ? 'block fixed w-full' : 'hidden w-3/12'
      } md:block`}
    >
      <MenuItem
        href="/"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={pathname === '/' ? '#ef4444' : '#000'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        }
        title="Beranda"
        isActive={pathname === '/'}
      />
      <MenuItem
        href="/drivers"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={pathname.startsWith('/drivers') ? '#ef4444' : '#000'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        }
        title="Driver Management"
        isActive={pathname.startsWith('/drivers')}
      />
      <MenuItem
        href="/pickup"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={pathname.startsWith('/pickup') ? '#ef4444' : '#000'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        }
        title="Pickup"
        isActive={pathname.startsWith('/pickup')}
      />
    </nav>
  )
}

function MenuItem({
  href = '',
  icon = '',
  title = '',
  isActive = false
}: Menu) {
  return (
    <Link to={href} reloadDocument={true}>
      <div
        className={`flex items-center gap-3 px-6 py-2 my-2 border-l-4 ${
          isActive
            ? 'border-red-500 text-red-500 font-bold'
            : 'border-transparent'
        } `}
      >
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  )
}
