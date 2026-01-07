"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  const images = [
    "/Gambar1.jpeg",
    "/Gambar2.jpeg",
    "/Gambar3.jpeg",
    "/Gambar4.jpeg",
    "/Gambar5.jpeg",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <HeroHighlight>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
          {/* TEXT */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-2xl px-4 dark:text-white md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-foreground"
            >
              Halo, Aku{" "}
              <Highlight className="text-foreground">Syarif Hidayat.</Highlight>
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [20, -10, 0] }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 px-4 text-base md:text-lg text-muted-foreground dark:text-white"
            >
              Web Developer dengan pengalaman menggunakan <Highlight className="text-foreground"> PHP Framework, SQL
              Server, dan PostgreSQL 🚀</Highlight>
            </motion.h4>
          </div>

          {/* IMAGES */}
          <div className="flex justify-center gap-3 flex-wrap md:flex-nowrap">
            {images.map((src, i) => (
              <div
                key={i}
                className={`relative w-[60px] md:w-[80px] aspect-[2/5]  ${
                  i % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-6"
                }`}
              >
                <Image
                  src={src}
                  alt="Foto"
                  fill
                  className="rounded-full object-cover transition-all duration-300 ease-out hover:scale-125 hover:z-10"
                />
              </div>
            ))}
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
