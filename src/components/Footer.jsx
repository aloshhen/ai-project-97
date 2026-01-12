import React from 'react'
import { Coffee, Phone, MapPin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="text-cafe-primary" />
            <span className="font-bold text-xl text-cafe-primary">Cafe Delights</span>
          </div>
          <p className="text-cafe-primary/70">Уютное кафе с домашней атмосферой и изысканной кухней</p>
        </div>
        <div>
          <h4 className="font-bold text-cafe-primary mb-4">Контакты</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cafe-primary" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cafe-primary" />
              <span>г. Москва, ул. Арбат, д. 10</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-cafe-primary mb-4">Социальные сети</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-cafe-primary hover:text-cafe-accent">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-cafe-primary/50 mt-8">
        © 2024 Cafe Delights. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer