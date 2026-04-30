'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: "50+", value: "Амжилттай төслүүд", description: "" },
  { label: "10+", value: "Үйлчлүүлэгч", description: "" },
  { label: "3+", value: "Туршлага", description: "" },
  { label: "24/7", value: "Техникийн тусламж", description: "" },
]

const testimonials = [
  {
    quote: "Vibe Media-тэй хамтран ажилласнаар бидний брэнд эрс өөрчлөгдсөн. Тэдний стратегийн хандлага, нарийн анхаарал бидний онлайн оролцоог шинэ түвшинд гаргала.",
    name: "М.Батаа",
    role: "Group Marketing Manager, TechCorp",
    image: "https://picsum.photos/100/100?random=5"
  },
  {
    quote: "Vibe Media-ийн баг бидний санааг ойлгож, оновчтой шийдлүүдийг санал болгов. Тэдний бүтээлч, нарийн арга барил бидний брэндийг илүү тод, дижитал орчинд хүчирхэг болголоо.",
    name: "Э.Энхлэн",
    role: "CEO, InnovateX",
    image: "https://picsum.photos/100/100?random=6"
  }
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-gradient-to-b from-dark to-black relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8"
            >
              Бид таны бизнесийн <br/>
              <span className="text-gradient">найдвартай түнш.</span>
            </motion.h2>

            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Вайб Медиа ХХК нь IT outsourcing болон медиа үйлчилгээг нэгтгэсэн компани юм. 
              Бид байгууллагуудын IT дэд бүтцийг удирдах, аюулгүй байдлыг хангах, мөн дижитал 
              маркетинг, контент бүтээх зэрэг үйлчилгээг үзүүлдэг.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all"
              >
                {/* Verified */}
                <div className="text-xs text-gray-400 border border-white/20 rounded-full px-2 py-1 w-fit mb-4">
                  Verified
                </div>

                {/* Number */}
                <h3 className="text-4xl font-bold mb-2">
                  {stat.label}
                </h3>

                {/* Label */}
                <div className="text-lg font-medium text-white mb-1">
                  {stat.value}
                </div>

                {/* Description (хоосон) */}
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Testimonials */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-24 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}