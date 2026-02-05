// components/OrderButtons.tsx
'use client'

import { Car, Package, Truck, Phone, Clock, Shield } from 'lucide-react'
import ThirdPartyOrderButton from './ThirdPartyOrderButton'

export default function OrderButtons() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Car className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Pickup</h3>
          <p className="text-gray-600 text-center mb-4">
            Order online and pickup in store
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Clock className="w-4 h-4 mr-1" />
            Ready in 15-20 min
          </div>
          <ThirdPartyOrderButton service="custom" />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Package className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Postmates</h3>
          <p className="text-gray-600 text-center mb-4">
            Fast delivery to your doorstep
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Shield className="w-4 h-4 mr-1" />
            Contactless delivery
          </div>
          <ThirdPartyOrderButton service="postmates" />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Uber Eats</h3>
          <p className="text-gray-600 text-center mb-4">
            Order from our full menu
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Clock className="w-4 h-4 mr-1" />
            30-min guarantee
          </div>
          <ThirdPartyOrderButton service="ubereats" />
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4 flex items-center justify-center">
          <Phone className="w-5 h-5 mr-2 text-gray-500" />
          Prefer to call? We're here to help!
        </p>
        <a 
          href="tel:5551234567" 
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call to Order: (555) 123-4567
        </a>
      </div>
    </div>
  )
}