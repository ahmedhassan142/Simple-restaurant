// components/Footer.tsx
'use client'

import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Utensils, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400">Restaurant</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Authentic Italian cuisine served with passion and tradition since 1995.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span>123 Main Street, New York, NY</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span>info@ah770643@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-2 h-6 bg-amber-500 mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 text-amber-400 mr-3" />
              Hours
            </h4>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex justify-between items-center">
                <span>Mon - Thu</span>
                <span className="font-semibold text-white">11am - 10pm</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Fri - Sat</span>
                <span className="font-semibold text-white">11am - 11pm</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-semibold text-white">12pm - 9pm</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear}  Restaurant. All rights reserved. | Made with love in New York
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer