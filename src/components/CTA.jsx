import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="bg-cafe-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Забронируйте столик прямо сейчас</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Мы ждем вас, чтобы создать незабываемый кулинарный опыт. 
          Закажите столик онлайн или позвоните нам.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-cafe-primary px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-cafe-secondary/20 transition">
            <span>Забронировать</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/20 transition">
            Позвонить</button>
        </div>
      </div>
    </section>
  )
}

export default CTA