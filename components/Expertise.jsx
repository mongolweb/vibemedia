'use client'

import { motion } from 'framer-motion'
import { PenTool, Monitor, Smartphone, Code, Search, Network, Globe, PanelsTopLeft, Share2, SquarePlay, Cctv} from 'lucide-react'

const services = [
  {
    title: "Дотоод сүлжээ",
    description: "Байгууллагын дотоод сүлжээний дизайн, суурилуулалт, тохиргоо, засвар үйлчилгээ.",
    icon: <Network size={28} />
  },
  {
    title: "Вэбсайт хөгжүүлэлт",
    description: "Мэргэжлийн вэбсайт, онлайн дэлгүүр, веб апп хөгжүүлэлт.",
    icon: <Globe size={28} />
  },
  {
    title: "UI/UX & Веб дизайн",
    description: "Вэб, мобайл апп болон бусад дижитал бүтээгдэхүүнийг хэрэглэгчдэд ээлтэй, хялбар ашиглахуйц загвараар боловсруулна.",
    icon: <PanelsTopLeft  size={28} />
  },
  {
    title: "Сошиал маркетинг",
    description: "Facebook, Instagram, TikTok контент менежмент, сурталчилгаа.",
    icon: <Share2 size={28} />
  },
  {
    title: "Контент бүтээх",
    description: "Сурталчилгааны видео, постер дизайн, брэнд шийдэл.",
    icon: <SquarePlay  size={28} />
  },
  {
    title: "Хяналтын камер & Аюулгүй байдал",
    description: "Мэдээллийн аюулгүй байдал, CCTV систем, IP камер суурилуулалт, алсын хяналтын шийдэл.",
    icon: <Cctv size={28} />
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap text-center md:!text-left md:!flex-nowrap md:flex-row justify-center md:justify-between md:items-end mb-16 gap-6">
          <div>
            <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-2 block"
            >
              Бидний Үйл Ажиллагаа
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold"
            >
              Бидний туршлага
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-center md:text-left"
          >
            Бид зөвхөн код бичдэггүй. Бид дижитал экосистемийг бүтээж, орчин үеийн бүх технологид мэргэшсэн олон талт багийн хүчээр таны санааг амьдралд хүргэдэг
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/10 rounded-2xl bg-card hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl text-white group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
