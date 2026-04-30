'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "БИГ ЭЙ ЭС ЭМ ХХК",
    category: "Вэб хөгжүүлэлт",
    image: "/Ajil/1s.jpg",
  },
  {
    id: 2,
    title: "Сошиал маркетинг & Бүүст",
    category: "Постер дизайн",
    image: "/Ajil/2s.jpg",
  },
  {
    id: 3,
    title: "Хэрэгцээт файл",
    category: "Вэб хөгжүүлэлт",
    image: "/Ajil/4s.jpg",
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ХИЙСЭН <span className="text-gray-500">АЖЛУУД</span>
          </motion.h2>

          <div className="h-px w-full bg-white/10 mt-8" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl cursor-default"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY (ЗАСВАР) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-1">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}