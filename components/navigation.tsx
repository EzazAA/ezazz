"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-xl tracking-wide font-bold italic">
            E.
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-light">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors font-light">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-light">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-light">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
