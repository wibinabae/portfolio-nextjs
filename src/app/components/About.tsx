import Image from "next/image";
import TechBadge from "@/app/components/TechBadge";
import { Database, Code, Server } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gray-200 dark:bg-gray-600">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-6 items-center">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative w-48 md:w-full">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 blur-2xl"></div>

              <div className="relative overflow-hidden rounded-xl ring-2 ring-white/40 dark:ring-white/10 shadow-xl transition-all duration-300 ease-out hover:scale-125  hover:z-10">
                <Image
                  src="/syarif_google.jpeg"
                  alt="Foto Profile"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover transition-all duration-300 ease-out hover:scale-125  hover:z-10"
                />
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="ml-5">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                Tentang Saya
              </h2>

              <p className="text-gray-700 leading-relaxed dark:text-white">
                Saya adalah <span className="font-semibold">Web Developer</span>{" "}
                dengan pengalaman lebih dari{" "}
                <span className="font-semibold">1,5 tahun</span>
                bekerja di{" "}
                <span className="font-semibold">RS Abdul Radjak</span>. Saya
                terbiasa mengembangkan dan memelihara aplikasi web yang
                digunakan langsung dalam lingkungan kerja profesional.
              </p>

              <p className="text-gray-700 leading-relaxed mt-3 dark:text-white">
                Saya dikenal sebagai pribadi yang{" "}
                <span className="font-semibold">cepat beradaptasi</span>,
                bertanggung jawab, dan memiliki keinginan tinggi untuk terus
                belajar teknologi baru. Dalam bekerja, saya fokus pada solusi
                yang rapi, efisien, dan mudah dikembangkan.
              </p>

              <p className="text-gray-700 leading-relaxed mt-3 dark:text-white">
                Teknologi yang sering saya gunakan:
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <TechBadge icon={<Database size={18} />} label="SQL Server" />
                <TechBadge icon={<Code size={18} />} label="Laravel" />
                <TechBadge icon={<Server size={18} />} label="PostgreSQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
