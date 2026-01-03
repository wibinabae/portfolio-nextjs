export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-4xl ma-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, aku <span className="text-blue-500">Syarif Hidayat, S.Kom</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
            Web Developer 🚀 Next JS 🤖 Laravel
        </p>

        <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg">
                Lihat Project
            </a>

            <a href="#contact" className="px-6 py-3 border border-gray-300 rounded-lg">
                Kontak
            </a>
        </div>
      </div>
    </section>
  );
}
