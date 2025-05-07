"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

const heroImages = [
  "/images/foto7.jpeg",
  "/images/foto9.jpeg",
  "/images/foto6.jpeg",
]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen max-h-[800px] min-h-[600px] w-full overflow-hidden">
      {/* Hero background images with crossfade effect */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1500",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Exceptional <span className="text-amber-400">Craftsmanship</span> in
            Every Piece
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl animate-fadeIn animation-delay-150">
            We transform raw timber into timeless masterpieces. Experience the
            beauty and durability of premium wood products crafted with passion
            and precision.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-300">
            <Button
              size="lg"
              variant="outline"
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              Explore Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Our Process <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/70 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-scrollDown" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection