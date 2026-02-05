// app/about/page.tsx
'use client'

import { 
  Award, 
  Leaf, 
  Heart, 
  Users, 
  ChefHat, 
  Clock,
  MapPin,
  Quote,
  Star
} from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Marco Rossi',
      role: 'Head Chef & Owner',
      bio: 'Born and raised in Naples, Marco brings traditional techniques learned from his grandmother to every dish.',
      image: '/restaurant/images/about/chef-marco.jpg',
      alt: 'Chef Marco Rossi',
      experience: '25 years'
    },
    {
      name: 'Sophia Conti',
      role: 'Pastry Chef',
      bio: 'Sophia\'s desserts have won local awards. Her tiramisu recipe is a closely guarded family secret.',
      image: '/restaurant/images/about/chef-sophia.jpg',
      alt: 'Chef Sophia Conti',
      experience: '18 years'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 border border-amber-400/30">
            <Quote className="w-10 h-10 text-amber-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            A journey of flavor, family, and tradition since 1995.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-8 h-8 text-amber-600 mr-3" />
              From Nonna's Kitchen to Yours
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Gusto was born from a simple dream: to share the authentic tastes of our family's
              Italian heritage. What started as a small trattoria in Little Italy has grown into
              a beloved neighborhood institution, but our heart remains the same.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Every recipe we serve comes directly from handwritten notes passed down through
              generations. We still make our pasta by hand each morning, source ingredients
              from local producers, and cook every dish with the same care as we would for our
              own family.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-amber-600 mr-2" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">1995</div>
                  <div className="text-gray-600 text-sm">Established</div>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-amber-600 mr-2 fill-amber-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8</div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="/restaurant/images/about/restaurant-interior.jpg"
              alt="Gusto Restaurant interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Master Chefs</h3>
              <p className="text-gray-600 mb-4">
                Our chefs trained in Italy and bring over 50 years of combined experience
                to every plate.
              </p>
              <div className="text-sm text-gray-500">
                <Award className="w-4 h-4 inline mr-1" />
                Award-winning team
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600 mb-4">
                We partner with local farms for the freshest produce and import specialty
                ingredients directly from Italy.
              </p>
              <div className="text-sm text-gray-500">
                <Leaf className="w-4 h-4 inline mr-1" />
                Locally sourced
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-red-600 fill-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Family Values</h3>
              <p className="text-gray-600 mb-4">
                We treat every customer like family and believe good food brings people
                together.
              </p>
              <div className="text-sm text-gray-500">
                <Users className="w-4 h-4 inline mr-1" />
                Family-owned
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Family
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-amber-50/50 rounded-2xl hover:bg-amber-50 transition-colors">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <ChefHat className="w-10 h-10 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-amber-600 font-semibold">{member.role}</span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {member.experience} experience
                    </span>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <Heart className="w-8 h-8 text-amber-600 mr-3 fill-amber-600" />
            Taste the Tradition
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're joining us for a romantic dinner, a family celebration,
            or a quick lunch, we promise an authentic Italian experience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Visit Us Today
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage