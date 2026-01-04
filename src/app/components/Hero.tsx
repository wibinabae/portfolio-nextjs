"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  const images = [
    "/gambar1.jpg",
    "/gambar2.jpg",
    "/gambar3.jpg",
    "/gambar4.jpg",
    "/gambar4.jpg",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <HeroHighlight>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
          
          {/* TEXT */}
          <div className="flex flex-col items-start md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 dark:text-white md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-foreground"
            >
              With insomnia, nothing&apos;s real. Everything is far away.
              Everything is a{" "}
              <Highlight className="text-foreground">
                copy, of a copy, of a copy.
              </Highlight>
            </motion.h1>
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
