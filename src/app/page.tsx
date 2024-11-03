'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    toast.success('Thank you! Your report has been sent to your email.')
    setEmail('')
  }

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-300 via-yellow-600 to-black opacity-50"></div>
      
      {/* Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-l from-lime-400 to-white text-transparent bg-clip-text">
          Grow With AI
        </h2>
        <p className="text-xl mb-8 max-w-2xl text-white">
          Discover 100 game-changing generative AI use cases that can transform your business. 
          Get our exclusive report now!
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/10 text-white placeholder-white/50 border-white/20"
            />
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-gradient-to-l from-lime-400 to-white text-black font-semibold hover:from-lime-500 hover:to-gray-100 transition-colors"
            >
              Get Free Report
            </Button>
          </div>
        </form>
      </main>

      <footer className="bg-black/50 text-white py-4 text-center relative z-10">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Grow With AI. All rights reserved</p>
        </div>
      </footer>

      <ToastContainer 
        position="bottom-right"
        theme="dark"
      />
    </div>
  )
}