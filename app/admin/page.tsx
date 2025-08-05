"use client"

import { useState, useEffect } from "react"
import { createServerClient } from "@/lib/supabase"

interface Message {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

// Simple password - you can change this
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ezaz1234"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin-authenticated")
    if (isAuth === "true") {
      setIsAuthenticated(true)
      fetchMessages()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/messages")
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem("admin-authenticated", "true")
      fetchMessages()
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("admin-authenticated")
    setPassword("")
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h1 className="text-2xl font-light mb-6 text-center">Admin Access</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-light text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full px-4 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                ← Back to Site
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading messages...</p>
        </div>
      </div>
    )
  }

  // Admin dashboard (authenticated)
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-colors"
            >
              Logout
            </button>
            <a href="/" className="px-4 py-2 border border-gray-600 hover:border-white transition-colors">
              Back to Site
            </a>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-light">Contact Messages</h2>
            <p className="text-gray-400 text-sm mt-1">{messages.length} total messages</p>
          </div>

          {messages.length > 0 ? (
            <div className="divide-y divide-gray-700">
              {messages.map((message: Message) => (
                <div key={message.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-white">{message.name}</h3>
                      <p className="text-gray-400 text-sm">{message.email}</p>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {new Date(message.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{message.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-400">No messages yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}