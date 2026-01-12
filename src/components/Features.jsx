import React from 'react'
import { Utensils, Coffee, Star } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
    <div className="mb-4 p-3 bg-cafe-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
      <Icon className="w-8 h-8 text-cafe-primary group-hover:scale-110 transition" />
    </div>
    <h3 className="text-xl font-bold text-cafe-primary mb-2">{title}</h3>
    <p className="text-cafe-primary/70">{description}</p>
  </div>
)

const Features = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Свежие блюда',
      description: 'Мы готовим только из свежих локальных продуктов высочайшего качества'
    },
    {
      icon: Coffee,
      title: 'Авторский кофе',
      description: 'Каждый напиток - это искусство, созданное нашими опытными бариста'
    },
    {
      icon: Star,
      title: 'Уютная атмосфера',
      description: 'Дизайн интерьера создан для комфорта и приятного времяпрепровождения'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-primary mb-4">Почему выбирают нас</h2>
          <p className="text-cafe-primary/70 max-w-2xl mx-auto">Мы создаем не просто еду, мы создаем впечатления</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features