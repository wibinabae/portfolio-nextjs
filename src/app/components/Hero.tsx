"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  const images = [
    "/gambar1.jpg",
    "/gambar2.jpg",
    "/gambar3.jpg",
    "/gambar4.jpg",
    "/gambar4.jpg",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
        {/* TEXT */}
        <div className="flex flex-col items-start md:items-start">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white"
          >
            Hi, Aku <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-blue-500"
            >
              Syarif Hidayat, S.Kom
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Web Developer 🚀 Next.js 🤖 Laravel
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <a className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition">
              Lihat Project
            </a>
            <a className="px-6 py-3 dark:text-white border rounded-lg text-center hover:bg-gray-700/10 transition">
              Kontak
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center gap-3 flex-wrap md:flex-nowrap">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative w-[60px] md:w-[80px] aspect-[2/5] ${
                i % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-6"
              }`}
            >
              <Image
                src={src}
                alt="Foto"
                fill
                className="rounded-full object-cover transition-all duration-300 ease-out hover:scale-125  hover:z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
