'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-center py-1 ${isActive ? 'font-semibold bg-blue-200' : ''}`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}