'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order Online', href: '#order' },
    { name: 'About', href: '/about' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleOrderClick = () => {
    // Redirect to third-party ordering service
    window.open('https://www.ubereats.com', '_blank')
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              RestaurantWebsite
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.name === 'Order Online' ? (
                <button
                  key={link.name}
                  onClick={handleOrderClick}
                  className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              link.name === 'Order Online' ? (
                <button
                  key={link.name}
                  onClick={handleOrderClick}
                  className="block w-full text-left py-3 px-4 bg-amber-500 text-white rounded-lg my-1"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar