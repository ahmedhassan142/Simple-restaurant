'use client'

import { useState } from 'react'
import ThirdPartyOrderButton from '../Components/ThirdPartyOrderButton'
import Image from 'next/image'

// Menu items with image properties
const menuItems = [
  {
    category: 'Appetizers',
    items: [
      { 
        id: 1, 
        name: 'Bruschetta', 
        price: 12.99, 
        description: 'Toasted bread with tomatoes, garlic, and basil',
        image: '/restaurant/images/menu/bruschetta.jpg',
        alt: 'Fresh bruschetta with tomatoes and basil',
        popular: true
      },
      { 
        id: 2, 
        name: 'Calamari', 
        price: 15.99, 
        description: 'Crispy fried squid with marinara sauce',
        image: '/restaurant/images/menu/calamari.jpg',
        alt: 'Golden fried calamari with dipping sauce',
        popular: false
      },
      { 
        id: 3, 
        name: 'Caprese Salad', 
        price: 14.99, 
        description: 'Fresh mozzarella, tomatoes, and basil',
        image: '/restaurant/images/menu/caprese-salad.jpg',
        alt: 'Classic Caprese salad with mozzarella and tomatoes',
        popular: true
      },
    ]
  },
  {
    category: 'Main Course',
    items: [
      { 
        id: 4, 
        name: 'Spaghetti Carbonara', 
        price: 18.99, 
        description: 'Classic pasta with pancetta and egg',
        image: '/restaurant/images/menu/spaghetti-carbonara.jpg',
        alt: 'Spaghetti carbonara with pancetta and parmesan',
        popular: true
      },
      { 
        id: 5, 
        name: 'Chicken Parmesan', 
        price: 22.99, 
        description: 'Breaded chicken with marinara and cheese',
        image: '/restaurant/images/menu/chicken-parmesan.jpg',
        alt: 'Chicken parmesan with melted cheese and pasta',
        popular: false
      },
      { 
        id: 6, 
        name: 'Grilled Salmon', 
        price: 24.99, 
        description: 'Atlantic salmon with lemon butter sauce',
        image: '/restaurant/images/menu/grilled-salmon.jpg',
        alt: 'Grilled salmon with lemon butter sauce',
        popular: true
      },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { 
        id: 7, 
        name: 'Tiramisu', 
        price: 9.99, 
        description: 'Classic Italian coffee dessert',
        image: '/restaurant/images/menu/tiramisu.jpg',
        alt: 'Traditional Italian tiramisu dessert',
        popular: true
      },
      { 
        id: 8, 
        name: 'Cannoli', 
        price: 7.99, 
        description: 'Crispy pastry with sweet ricotta filling',
        image: '/restaurant/images/menu/cannoli.jpg',
        alt: 'Italian cannoli with ricotta filling',
        popular: false
      },
      { 
        id: 9, 
        name: 'Gelato', 
        price: 6.99, 
        description: 'Italian ice cream, various flavors',
        image: '/restaurant/images/menu/gelato.jpg',
        alt: 'Assorted gelato flavors in cups',
        popular: true
      },
    ]
  }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Appetizers')

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
        <p className="text-gray-600 mb-8">All dishes made fresh daily</p>
        
        <div className="flex justify-center mb-8">
          <ThirdPartyOrderButton 
            service="custom" 
            className="text-lg px-8 py-3"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {menuItems.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === cat.category
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Menu Items with Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems
          .find(cat => cat.category === activeCategory)
          ?.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      🔥 Popular
                    </span>
                  </div>
                )}
                
                {/* Next.js Image Component */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={item.popular}
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-amber-600">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    // Redirect to third-party ordering with this item
                    window.open('https://www.ubereats.com/add-to-cart?item=' + item.id, '_blank')
                  }}
                  className="w-full bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group"
                >
                  <span className="group-hover:scale-110 transition-transform mr-2">➕</span>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Order CTA at bottom */}
      <div className="mt-16 text-center">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-6">
            Choose from our delivery partners or call us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThirdPartyOrderButton service="postmates" />
            <ThirdPartyOrderButton service="ubereats" />
            <ThirdPartyOrderButton service="custom" />
          </div>
        </div>
      </div>
    </div>
  )
}