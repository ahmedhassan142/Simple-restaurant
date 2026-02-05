'use client'

import { useEffect, useState } from 'react'
import { 
  ArrowDown, 
  Clock, 
  Star, 
  Award, 
  Truck,
  Wine,
  Pizza,
  Utensils,
  ChevronDown
} from 'lucide-react'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
   
    {
      id: 1,
      image: '/restaurant/images/hero/hero-pizza.jpg',
      title: 'Wood-Fired Pizza',
      description: 'Crispy crust, fresh ingredients, perfect every time',
      icon: Pizza
    },
    {
      id: 2,
      image: '/restaurant/images/hero/hero-wine.jpg',
      title: 'Fine Wine Selection',
      description: 'Curated wines to complement your meal',
      icon: Wine
    }, {
      id: 3,
      image: '/restaurant/images/hero/hero-pasta.jpg',
      title: 'Authentic Italian Pasta',
      description: 'Handmade daily with love and tradition',
      icon: Utensils
    }
  ]

  // Auto slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleOrderNow = () => {
    window.open('https://postmates.com', '_blank')
  }

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          const Icon = image.icon
          return (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              
              {/* Image overlay content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-8 bg-black/30 backdrop-blur-sm rounded-2xl">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-amber-100">{image.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-amber-300 font-semibold tracking-wider uppercase text-sm">
                Since 1995
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Taste the{' '}
              <span className="text-amber-400 relative">
                Authentic
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/50 rounded-full"></span>
              </span>
              <br />
              Italian Experience
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Family-owned restaurant serving traditional recipes passed down through generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleOrderNow}
                className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Truck className="w-5 h-5 group-hover:animate-pulse" />
                <span>Order for Delivery</span>
              </button>
              
              <a
                href="#menu"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Our Menu</span>
                <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-amber-400 mr-2" />
                  <div className="text-2xl font-bold text-amber-400">25+</div>
                </div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-amber-400 mr-2 fill-amber-400" />
                  <div className="text-2xl font-bold text-amber-400">4.8</div>
                </div>
                <div className="text-white/80 text-sm">Customer Rating</div>
              </div>
              
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-amber-400 mr-2" />
                  <div className="text-2xl font-bold text-amber-400">30min</div>
                </div>
                <div className="text-white/80 text-sm">Avg Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => {
          const Icon = image.icon
          return (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex items-center justify-center rounded-full transition-all ${
                index === currentImage
                  ? 'bg-amber-400 text-white w-20 px-4 py-2'
                  : 'bg-white/20 hover:bg-white/30 w-12 px-3 py-2'
              }`}
              aria-label={`Go to ${image.title}`}
            >
              <Icon className="w-4 h-4" />
              {index === currentImage && (
                <span className="ml-2 text-sm font-medium truncate">{image.title.split(' ')[0]}</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to menu"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      {/* Current Slide Indicator */}
      <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
        <span className="font-medium">{currentImage + 1}</span>
        <span className="mx-1">/</span>
        <span>{heroImages.length}</span>
      </div>
    </div>
  )
}

export default Hero