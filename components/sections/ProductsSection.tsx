"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const categories = [
  "All",
  "Stick Wood",
  "Boards",
  "Flooring",
  "Custom"
]

const products = [
  {
    id: 1,
    name: "Premium Pine Boards",
    category: "Boards",
    image: "/images/foto9.jpeg",
    isNew: true,
  },
  {
    id: 2,
    name: "Raw Oak Timber",
    category: "Stick Wood",
    image: "/images/foto2.jpeg",
    isNew: false,
  },
  {
    id: 3,
    name: "Maple Hardwood Flooring",
    category: "Flooring",
    image: "/images/foto1.jpeg",
    isNew: false,
  },
  {
    id: 4,
    name: "Teak Wood Planks",
    category: "Boards",
    image: "/images/foto7.jpeg",
    isNew: true,
  },
  {
    id: 5,
    name: "Cedar Wood Blocks",
    category: "Stick Wood",
    image: "/images/foto11.jpeg",
    isNew: false,
  },
  {
    id: 6,
    name: "Custom Cut Service",
    category: "Custom",
    image: "/images/foto17.jpeg",
    isNew: false,
  },
  {
    id: 7,
    name: "Cedar Wood Blocks",
    category: "Stick Wood",
    image: "/images/foto12.jpeg",
    isNew: false,
  },
  {
    id: 8,
    name: "Teak Wood Planks",
    category: "Boards",
    image: "/images/foto12.jpeg",
    isNew: true,
  },
  {
    id: 9,
    name: "Teak Wood Planks",
    category: "Boards",
    image: "/images/foto13.jpeg",
    isNew: true,
  },
  {
    id: 10,
    name: "Custom Cut Service",
    category: "Custom",
    image: "/images/foto10.jpeg",
    isNew: false,
  },
  {
    id: 11,
    name: "Custom Cut Service",
    category: "Custom",
    image: "/images/foto6.jpeg",
    isNew: false,
  },
];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section id="products">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-amber-800 dark:text-amber-500 font-medium mb-3">Our Products</h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Premium Wood Selection
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Discover our extensive collection of high-quality wood products, from raw timber to precisely cut boards, all sourced from sustainable forests.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                selectedCategory === category 
                  ? "bg-amber-700 hover:bg-amber-800 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge className="absolute top-3 right-3 bg-amber-600">
                    New Arrival
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <h4 className="font-playfair text-xl font-semibold mb-2">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-gray-600 dark:text-gray-400">
                    {product.category}
                  </Badge>
                </div>
                <Link href={`/products/${product.id}`} className="mt-4 inline-block">
                  <Button variant="link" className="text-amber-700 dark:text-amber-500 p-0">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-amber-700 hover:bg-amber-800 text-white"
            asChild
          >
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection