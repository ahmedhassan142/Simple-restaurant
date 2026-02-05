// components/ThirdPartyOrderButton.tsx
'use client'

import { Truck, Package, Utensils, ExternalLink } from 'lucide-react'

interface ThirdPartyOrderButtonProps {
  service: 'postmates' | 'ubereats' | 'custom'
  className?: string
}

const serviceConfigs = {
  postmates: {
    url: 'https://postmates.com',
    color: 'bg-red-500 hover:bg-red-600',
    text: 'Order on Postmates',
    icon: <Package className="w-5 h-5" />
  },
  ubereats: {
    url: 'https://www.ubereats.com',
    color: 'bg-black hover:bg-gray-800',
    text: 'Order on Uber Eats',
    icon: <Truck className="w-5 h-5" />
  },
  custom: {
    url: 'https://www.ubereats.com',
    color: 'bg-amber-500 hover:bg-amber-600',
    text: 'Order Online',
    icon: <Utensils className="w-5 h-5" />
  }
}

export default function ThirdPartyOrderButton({ 
  service = 'custom',
  className = '' 
}: ThirdPartyOrderButtonProps) {
  const config = serviceConfigs[service]

  const handleClick = () => {
    // Track order click in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'order_click', {
        event_category: 'engagement',
        event_label: service,
      })
    }
    
    // Redirect to third-party ordering service
    window.open(config.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className={`${config.color} text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors hover:shadow-lg ${className}`}
    >
      {config.icon}
      <span>{config.text}</span>
      <ExternalLink className="w-4 h-4 opacity-70" />
    </button>
  )
}