"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Products", 
      href: "/products",
      dropdown: [
        { label: "Indoor Furniture", href: "/products/indoor" },
        { label: "Outdoor Collections", href: "/products/outdoor" },
        { label: "Custom Solutions", href: "/products/custom" },
        { label: "Commercial Projects", href: "/products/commercial" },
      ]
    },
    { label: "About", href: "/about" },
    { 
      label: "Information", 
      href: "#",
      dropdown: [
        { label: "Sustainability", href: "/information/sustainability" },
        { label: "Our Process", href: "/information/process" },
        { label: "Materials", href: "/information/materials" },
        { label: "FAQs", href: "/information/faqs" },
      ]
    },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md dark:bg-gray-900/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold tracking-tight">
            <span className="text-amber-800">Abus</span>
            <span className="text-gray-800 dark:text-gray-200">Wood</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            !link.dropdown ? (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-amber-700 dark:hover:text-amber-500",
                  isActive(link.href)
                    ? "text-amber-800 dark:text-amber-500"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {link.label}
              </Link>
            ) : (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-48 backdrop-blur-sm"
                >
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-all md:hidden">
          <div className="relative h-full overflow-y-auto pt-20 px-6 pb-12 flex flex-col">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <nav className="space-y-6">
              {navLinks.map((link) =>
                !link.dropdown ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-lg font-semibold block",
                      isActive(link.href)
                        ? "text-amber-800 dark:text-amber-500"
                        : "text-gray-800 dark:text-gray-200"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div key={link.label} className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {link.label}
                    </h3>
                    <div className="pl-4 space-y-2 border-l-2 border-amber-700">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-base text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header