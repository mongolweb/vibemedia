"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, BadgeCheck } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden flex-wrap">
      {/* Background Blurs */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-start md:items-center md:text-center gap-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            IT OUTSOURCING & DIGITAL CREATIVE AGENCY
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight z-20 relative"
          >
            VIBE MEDIA <br className="hidden md:block" />
            <span className="text-gradient">DIGITAL AGENCY</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed z-20 relative"
          >
            Бид таны бизнесийг ойлгож, онцгой зорилгод чинь нийцсэн, өгөгдөлд 
            суурилсан шинэлэг стратегиудыг бүтээдэг. Брэндингээс эхлээд өндөр нөлөөтэй 
            дижитал маркетинг хүртэл – таны амжилт бидний зорилго.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid xs:grid-cols-2 w-full md:w-auto gap-6 mt-8 z-30 relative"
          >
            <button
              onClick={scrollToContact}
              className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              ЗӨВЛӨГӨӨ АВАХ
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <a
              href="#work"
              className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm text-center"
            >
              ХИЙСЭН АЖЛУУД
            </a>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none hidden lg:block z-0">
          {/* Globe Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute left-0 top-10 p-4 bg-card/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Globe size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-400">Гүйцэтгэл</div>
              <div className="font-bold">99/100</div>
            </div>
          </motion.div>

          {/* BadgeCheck Card */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute right-0 bottom-0 p-4 bg-card/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
              <BadgeCheck size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-400">Системийн төлөв</div>
              <div className="font-bold">100% Аюулгүй</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full relative text-center py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          className="realtive text-gray-500 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
