'use client'

import { motion } from 'framer-motion'

const team = [
  {
    id: 1,
    name: "Ө.Одбилэг",
    role: "Founder & CEO",
    image: "/team/Odko.jpg",
  },
  {
    id: 2,
    name: "Б.Баатархүү",
    role: "Founder & Co-Ceo",
    image: "/team/baataraa.jpg",
  },
  {
    id: 3,
    name: "А.Энхтүвшин",
    role: "UI/UX Designer",
    image: "/team/nz.jpg",
  },
]

export default function Team() {
  return (
    <section id="team" className="pt-28 pb-10 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            Манай хамт олон
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Бид технологи, дизайн, инновацийг хамтад нь бүтээдэг
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="group relative h-[420px] rounded-3xl overflow-hidden shadow-xl">

                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover
                    transition-all duration-500
                    group-hover:scale-110"
                />

                {/* OVERLAY (ЗАСВАР) */}
                <div className="absolute inset-0 
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  transition-all duration-500
                  group-hover:from-black/70 group-hover:via-black/30" 
                />

                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className="text-white/80 mt-1 drop-shadow">
                    {member.role}
                  </p>
                  <div className="w-12 h-[2px] bg-white mt-4 group-hover:w-20 transition-all duration-500" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
