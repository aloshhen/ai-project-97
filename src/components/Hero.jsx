import React from 'react'
import { ArrowRight, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-cafe-secondary/10 pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cafe-primary mb-4">
            Уютное кафе с душой
          </h1>
          <p className="text-lg text-cafe-primary/80 mb-6">
            Откройте для себя мир изысканных вкусов и домашней атмосферы. 
            Каждое блюдо создано с любовью и заботой.
          </p>
          <div className="flex space-x-4">
            <button className="bg-cafe-primary text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-cafe-accent transition">
              <span>Посмотреть меню</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-cafe-primary text-cafe-primary px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-cafe-secondary/20 transition">
              <Coffee className="w-5 h-5" />
              <span>Бронирование</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="https://source.unsplash.com/800x600/?cafe,restaurant" 
            alt="Cafe Interior" 
            className="rounded-xl shadow-xl object-cover w-full h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero