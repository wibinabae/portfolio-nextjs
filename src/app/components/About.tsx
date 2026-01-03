import Image from "next/image";

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
                About Me
              </h2>

              <p className="text-gray-700 leading-relaxed dark:text-white">
                Aku adalah web developer yang fokus membangun web modern, cepat
                dan responsif. Saat ini aku pake <br />
                <span className="font-medium">Next JS</span>
                <span className="font-medium">Laravel</span>
                <span className="font-medium">Tailwind CSS</span>
              </p>

              <p className="text-gray-700 leading-relaxed mt-2 dark:text-white">
                Aku suka belajar teknologi baru, ngulik UI/UX, dan bikin project
                yang rapi serta mudah digunakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
