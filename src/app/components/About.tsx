import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/Foto-Syarif.jpg"
              alt="Foto Profile"
              width={110}
              height={110}
              className="rounded-2xl shadow-lg"
            />
            <div className="ml-5">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>

              <p className="text-gray-700 leading-relaxed">
                Aku adalah web developer yang fokus membangun web modern, cepat
                dan responsif. Saat ini aku pake
                <span className="font-medium">Next JS</span>
                <span className="font-medium">Laravel</span>
                <span className="font-medium">Tailwind CSS</span>
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
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
