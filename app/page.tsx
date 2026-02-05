import Hero from './Components/Hero'
import FeaturedMenu from './Components/Featuredmenu'
import OrderButtons from './Components/OrderButton'
import LocationMap from './Components/LocationMap'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className=" mt-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Order From Your Favorite Delivery Service
            </h2>
            <p className="text-gray-600">
              We partner with all major delivery platforms for your convenience
            </p>
          </div>
          
          <OrderButtons />
        </div>
      </section>
      <FeaturedMenu />
      <section id="location" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <LocationMap />
        </div>
      </section>
    </div>
  )
}