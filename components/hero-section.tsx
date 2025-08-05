export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight font-sans select-none">Ezaz. Alam. Ahmed.</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light underline">Front-end Developer & AI Integrator</p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Making things, Building solutions that matter and learning.
        </p>
        <div className="mt-12">
          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-light tracking-wide"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
