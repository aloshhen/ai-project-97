import React from 'react'
import { Menu, Coffee } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-cafe-primary" />
          <span className="font-bold text-xl text-cafe-primary">Cafe Delights</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#menu" className="text-cafe-primary hover:text-cafe-accent transition">Меню</a>
          <a href="#about" className="text-cafe-primary hover:text-cafe-accent transition">О нас</a>
          <a href="#contacts" className="text-cafe-primary hover:text-cafe-accent transition">Контакты</a>
        </div>
        <button className="md:hidden">
          <Menu className="text-cafe-primary" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation