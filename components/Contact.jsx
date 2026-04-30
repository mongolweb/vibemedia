'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_821wvqd",
      "template_o7wmt0e",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "dklDegeb1240Xe2KT"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(() => {
      setLoading(false);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-16 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* LEFT INFO */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                Холбоо барих
              </span>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">
                Төслөө<br />
                <span className="text-gradient">эхлүүлцгээе.</span>
              </h1>

              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm">
                Асуух зүйл байна уу? Формыг бөглөж бидэнтэй холбогдоорой.
                Бид аль болох хурдан хариу өгөх болно.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Имэйл</div>
                  <div className="text-base font-medium">info@vmedia.mn</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Утас</div>
                  <div className="text-base font-medium">+976 5515-4144</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Байршил</div>
                  <div className="text-base font-medium">
                    Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг 9-р хороо, B center
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Нэр"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                />

                <input
                  type="email"
                  placeholder="Имэйл"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
                />
              </div>

              <input
                type="tel"
                placeholder="Утасны дугаар"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />

              <textarea
                rows={5}
                placeholder="Мессеж"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-3 rounded-lg"
              >
                {loading ? "Илгээж байна..." : "ИЛГЭЭХ"}
              </button>

              {success && (
                <p className="text-green-400 text-center text-sm">
                  ✅ Амжилттай илгээгдлээ!
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;