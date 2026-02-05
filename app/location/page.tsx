// app/location/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Clock, Car, Navigation } from 'lucide-react'

// --- IMPORT THE NEW MAP COMPONENT ---
import dynamic from 'next/dynamic'
// Dynamically import to avoid SSR issues with Leaflet
const OpenStreetMap = dynamic(() => import('../Components/OSMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
})

// Define your restaurant's location
const restaurantLocation = {
  lat: 40.7128,
  lng: -74.0060,
}
const restaurantInfo = {
  address: '123 Main Street, New York, NY 10001',
  phone: '(555) 123-4567'
}

// Operating Hours
const operatingHours = [
  { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '12:00 PM - 9:00 PM' },
  { day: 'Holiday Hours', hours: '12:00 PM - 8:00 PM' }
]

// Parking Information
const parkingInfo = [
  { type: 'Street Parking', availability: 'Available after 6 PM', cost: 'Free' },
  { type: 'Garage Parking', location: '123 Parking Garage', cost: '$10/hour', distance: '2 min walk' },
  { type: 'Valet Service', hours: '5 PM - 11 PM', cost: '$15', availability: 'Friday & Saturday only' }
]

// Nearby Attractions
const nearbyAttractions = [
  { name: 'Central Park', distance: '1.2 miles', walkTime: '25 min' },
  { name: 'Times Square', distance: '2.5 miles', driveTime: '15 min' },
  { name: 'Metropolitan Museum', distance: '0.8 miles', walkTime: '15 min' },
  { name: 'Broadway Theaters', distance: '1.5 miles', driveTime: '10 min' }
]

const LocationPage = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [travelTime, setTravelTime] = useState<string>('')

  // Function to get user's location (for display only, not for routing)
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          setUserLocation(location)
          // For demo, we simulate a travel time
          setTravelTime('~25 minutes')
        },
        (error) => {
          console.error('Error getting location:', error)
          alert('Unable to get your location. You can still use the map.')
        }
      )
    }
  }

  // Open in Google Maps app
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.lat},${restaurantLocation.lng}`
    window.open(url, '_blank')
  }

  // Open in Apple Maps
  const openInAppleMaps = () => {
    const url = `http://maps.apple.com/?daddr=${restaurantLocation.lat},${restaurantLocation.lng}`
    window.open(url, '_blank')
  }

  // Copy address to clipboard
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(restaurantInfo.address)
      alert('Address copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy address:', error)
      alert('Failed to copy address to clipboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Our Restaurant</h1>
            <p className="text-xl opacity-90">Visit us for an authentic Italian dining experience</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Address</h2>
                  <p className="text-gray-600">Visit us at our location</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800">{restaurantInfo.address}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={copyAddress}
                    className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Copy Address
                  </button>
                  <button
                    onClick={() => window.location.href = `tel:${restaurantInfo.phone}`}
                    className="flex-1 bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>

            {/* Get Directions Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Directions</h3>
              
              <div className="space-y-4">
                {/* Use My Location Button */}
                <button
                  onClick={getUserLocation}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Use My Location</span>
                </button>

                {/* Travel Time Display */}
                {travelTime && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Estimated travel time: <span className="text-lg">{travelTime}</span>
                    </p>
                  </div>
                )}

                {/* Open in Maps Apps */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-3">Open in Maps App:</p>
                  <div className="flex gap-3">
                    <button
                      onClick={openInGoogleMaps}
                      className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span className="text-lg">G</span>
                      <span>Google Maps</span>
                    </button>
                    <button
                      onClick={openInAppleMaps}
                      className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span className="text-lg">🍎</span>
                      <span>Apple Maps</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hours of Operation</h3>
                  <p className="text-gray-600">Plan your visit</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {operatingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="font-semibold text-gray-900">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <span className="font-bold">Note:</span> Kitchen closes 30 minutes before closing time.
                  Reservations recommended for weekends.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Additional Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Map - USING OPENSTREETMAP */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Our Location on Map</h3>
                  <p className="text-gray-600">Find us easily</p>
              </div>
              {/* The OpenStreetMap Component Replaces Google Maps */}
              <OpenStreetMap
                position={[restaurantLocation.lat, restaurantLocation.lng]}
                zoom={15}
              />
              
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    🍝 Restaurant Location
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    🚗 Parking Available
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    🚇 Near Subway Station
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parking Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Parking Information</h3>
                <div className="space-y-4">
                  {parkingInfo.map((parking, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{parking.type}</h4>
                          {parking.location && (
                            <p className="text-sm text-gray-600">{parking.location}</p>
                          )}
                          {parking.availability && (
                            <p className="text-sm text-gray-600">{parking.availability}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-amber-600">{parking.cost}</p>
                          {parking.distance && (
                            <p className="text-sm text-gray-500">{parking.distance}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Attractions</h3>
                <div className="space-y-4">
                  {nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{attraction.name}</h4>
                          <p className="text-sm text-gray-600">{attraction.distance}</p>
                        </div>
                        <div className="text-right">
                          {attraction.walkTime && (
                            <p className="text-sm text-gray-500">🚶 {attraction.walkTime}</p>
                          )}
                          {attraction.driveTime && (
                            <p className="text-sm text-gray-500">🚗 {attraction.driveTime}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transportation Options */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Public Transportation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🚇</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Subway</h4>
                  <p className="text-sm text-gray-600">Lines A, C, E</p>
                  <p className="text-sm text-gray-600">5 min walk from station</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl mb-2">🚌</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Bus</h4>
                  <p className="text-sm text-gray-600">M5, M7, M20</p>
                  <p className="text-sm text-gray-600">Stop right outside</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl mb-2">🚕</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ride Share</h4>
                  <p className="text-sm text-gray-600">Uber & Lyft</p>
                  <p className="text-sm text-gray-600">Drop-off at entrance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Visit Us?</h3>
              <p className="opacity-90">
                Save time and book your table in advance or order ahead for pickup
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              {/* <button
                onClick={() => window.open('https://your-reservation-system.com', '_blank')}
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📅 Book a Table
              </button> */}
              <button
                onClick={() => window.open('https://www.ubereats.com', '_blank')}
                className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                🛒 Order for Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPage