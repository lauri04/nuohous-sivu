"use client"

import { Phone, Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/nuohouspalvelu-hautala-logo.png"
            alt="Nuohouspalvelu Hautala"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-accent transition">
            Palvelut
          </a>
          <a href="#areas" className="hover:text-accent transition">
            Toimialueet
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Ota yhteyttä
          </a>
        </nav>

        <a
          href="tel:0405212363"
          className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          <Phone className="w-5 h-5" />
          Soita nyt
        </a>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-primary p-4 flex flex-col gap-4 md:hidden">
            <a href="#services" className="hover:text-accent transition">
              Palvelut
            </a>
            <a href="#areas" className="hover:text-accent transition">
              Toimialueet
            </a>
            <a href="#contact" className="hover:text-accent transition">
              Ota yhteyttä
            </a>
            <a
              href="tel:0405212363"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              Soita nyt
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
