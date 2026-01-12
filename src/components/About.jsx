import React from 'react'
import { ChefHat, Clock, MapPin } from 'lucide-react'

const StepCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-cafe-secondary/10 p-3 rounded-full">
      <Icon className="w-6 h-6 text-cafe-primary" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-cafe-primary mb-2">{title}</h3>
      <p className="text-cafe-primary/70">{description}</p>
    </div>
  </div>
)

const About = () => {
  const steps = [
    {
      icon: ChefHat,
      title: 'Наша кухня',
      description: 'Мы используем только свежие сезонные продукты от локальных фермеров'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      description: 'Пн-Пт: 8:00-22:00, Сб-Вс: 10:00-23:00'
    },
    {
      icon: MapPin,
      title: 'Наше место',
      description: 'г. Москва, ул. Арбат, д. 10 - в самом сердце города'
    }
  ]

  return (
    <section className="py-16 bg-cafe-secondary/10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-primary mb-6">О нашем кафе</h2>
          <p className="text-cafe-primary/80 mb-6">
            Cafe Delights - это больше, чем просто кафе. Это место, где каждое блюдо 
            создается с любовью, где атмосфера наполнена теплом и уютом.
          </p>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
        <div>
          <img 
            src="https://source.unsplash.com/800x600/?restaurant,interior" 
            alt="Cafe Interior" 
            className="rounded-xl shadow-xl object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About