export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, aku <span className="text-blue-500">Syarif Hidayat, S.Kom</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Web Developer 🚀 Next.js 🤖 Laravel
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Lihat Project
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Kontak
          </a>
        </div>
      </div>
    </section>
  )
}
