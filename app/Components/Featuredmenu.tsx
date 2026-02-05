'use client'

import { Star, Heart, Clock, Truck, CheckCircle, Pizza, Shield } from 'lucide-react'
import Image from 'next/image'

const featuredItems = [
  {
    id: 1,
    name: 'Truffle Risotto',
    description: 'Arborio rice with black truffle, parmesan, and wild mushrooms',
    price: 26.99,
    image: '/restaurant/images/menu/truffle-risotto.jpg',
    alt: 'Creamy truffle risotto with mushrooms',
    category: 'Chef Special',
    rating: 4.9,
    reviews: 124,
    deliveryTime: '20-25 min',
    popular: true
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Classic Neapolitan pizza with San Marzano tomatoes and fresh mozzarella',
    price: 18.99,
    image: '/restaurant/images/menu/margherita-pizza.jpg',
    alt: 'Classic Margherita pizza with basil',
    category: 'Most Popular',
    rating: 4.8,
    reviews: 215,
    deliveryTime: '15-20 min',
    popular: true
  },
  {
    id: 3,
    name: 'Osso Buco',
    description: 'Braised veal shanks with saffron risotto and gremolata',
    price: 32.99,
    image: '/restaurant/images/menu/osso-buco.jpg',
    alt: 'Braised osso buco with saffron risotto',
    category: 'Signature Dish',
    rating: 4.7,
    reviews: 89,
    deliveryTime: '30-35 min',
    popular: false
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 9.99,
    image: '/restaurant/images/menu/tiramisu.jpg',
    alt: 'Classic Italian tiramisu dessert',
    category: 'Dessert',
    rating: 4.9,
    reviews: 156,
    deliveryTime: '10-15 min',
    popular: true
  }
]

const FeaturedMenu = () => {
  const handleOrderItem = (itemName: string) => {
    const encodedName = encodeURIComponent(itemName)
    window.open(`https://www.ubereats.com`, '_blank')
  }

  const handleQuickOrder = () => {
    window.open('https://www.ubereats.com', '_blank')
  }

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Favorites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with the finest ingredients and traditional techniques.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Item Badge */}
              <div className="absolute top-4 left-4 z-10 space-y-2">
                {item.popular && (
                  <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 mr-1 fill-white" />
                    Most Ordered
                  </span>
                )}
                <span className="inline-flex items-center px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={item.popular}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/80 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="font-semibold">{item.rating}</span>
                  <span className="text-gray-300">({item.reviews})</span>
                </div>
                
                {/* Delivery Time */}
                <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.deliveryTime}
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-amber-600">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleOrderItem(item.name)}
                    className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group"
                  >
                    <span className="group-hover:scale-110 transition-transform mr-2">➕</span>
                    Add to Order
                  </button>
                  <button 
                    className="ml-3 p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors group"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-5 h-5 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Truck className="w-8 h-8 text-amber-600 mr-3" />
                Craving Something Specific?
              </h3>
              <p className="text-gray-600 mb-6">
                Browse our full menu with 50+ dishes, all available for delivery or pickup.
                We guarantee freshness and quality in every order.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Fresh ingredients daily</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">30-minute delivery guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Contactless delivery available</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-10 h-10 text-amber-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Ready in minutes</h4>
                <p className="text-gray-600 mb-6">
                  Order now and enjoy your favorite meal at home
                </p>
                <button
                  onClick={handleQuickOrder}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Order Now
                </button>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-500 text-sm">
                    Available on all major delivery platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-center text-gray-700 font-medium mb-8 flex items-center justify-center">
            <Truck className="w-5 h-5 mr-2 text-gray-500" />
            Available on all major platforms
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'DoorDash', color: 'text-red-500', icon: '🚚' },
              { name: 'UberEats', color: 'text-black', icon: '🚕' },
              { name: 'Grubhub', color: 'text-orange-500', icon: '📦' },
              { name: 'Postmates', color: 'text-blue-500', icon: '🍽️' },
              { name: 'Seamless', color: 'text-green-500', icon: '📱' }
            ].map((platform, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 ${platform.color}`}
              >
                <div className="text-2xl mb-2">{platform.icon}</div>
                <span className="text-sm font-medium text-gray-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMenu