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
    <nav className="flex flex-col py-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-center py-2 mx-4 border-b-2 transition-colors ${
              isActive
                ? 'font-semibold text-[#2E9C7B] border-[#2E9C7B]'
                : 'text-[#B9C4D0] border-transparent hover:text-white hover:border-[#607da1]'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}