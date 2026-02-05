// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LocationMap from '../Components/LocationMap'
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

// SMTP Configuration
const SMTP_CONFIG = {
  user: 'ah770643@gmail.com',
  pass: 'tzhixkiirkcpahrq',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  toEmail: 'ah770643@gmail.com'
}

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<ContactFormData>()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Send email using SMTP
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          toEmail: SMTP_CONFIG.toEmail,
          smtpConfig: {
            user: SMTP_CONFIG.user,
            pass: SMTP_CONFIG.pass,
            host: SMTP_CONFIG.host,
            port: SMTP_CONFIG.port,
            secure: SMTP_CONFIG.secure
          }
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Your message has been sent successfully! We\'ll get back to you within 24 hours.')
        reset()
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        throw new Error(result.error || 'Failed to send email')
      }
    } catch (error: any) {
      console.error('Email Error:', error)
      setSubmitStatus('error')
      setSubmitMessage(`Sorry, there was an error: ${error?.message || 'Please try again or contact us directly.'}`)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-green-800 font-medium">Message Sent Successfully!</p>
            <p className="text-green-700 text-sm mt-1">{submitMessage}</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">Error Sending Message</p>
            <p className="text-red-700 text-sm mt-1">{submitMessage}</p>
          </div>
        </div>
      )}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { 
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  rows={4}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* SMTP Status */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>✓ SMTP Connected:</strong> Messages are sent directly to {SMTP_CONFIG.toEmail} using Gmail SMTP.
                </p>
              </div>
            </form>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Mail className="w-5 h-5 text-amber-600 mr-2" />
              Quick Contact
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:5551234567" 
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </a>
              <a 
                href="mailto:info@gustorestaurant.com" 
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email Directly</p>
                  <p className="text-sm text-gray-600">info@gustorestaurant.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Location Map & Info */}
        <div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            </div>
            <LocationMap />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                Hours of Operation
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">Monday - Thursday</span>
                  <span className="font-semibold">11am - 10pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">Friday - Saturday</span>
                  <span className="font-semibold">11am - 11pm</span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold">12pm - 9pm</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3">For Catering</h3>
              <p className="text-gray-600 mb-4">
                Planning an event? We offer catering services for all occasions.
              </p>
              <a 
                href="mailto:ah770643@gmail.com" 
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                ah770643@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}