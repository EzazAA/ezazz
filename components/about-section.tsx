export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans">
  I’m a curious coder who loves building things that make a difference. Whether it’s tackling complex problems or crafting clean, elegant code, I’m all about mixing logic with creativity.
</p>
<p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans">
  When I’m not in coding, I'm usually into Reading classics and sketching, yes I sketch too.
</p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-gray-600 text-gray-300 text-sm">Problem Solver</span>
              <span className="px-4 py-2 border border-gray-600 text-gray-300 text-sm">Leader</span>
              <span className="px-4 py-2 border border-gray-600 text-gray-300 text-sm">Lifelong Learner</span>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto bg-gray-800 border border-gray-700 overflow-hidden shadow-lg">
  <img
    src="https://cdn.dribbble.com/userupload/17602905/file/original-cd3c8dc88998167865c605aa6d85c0ae.jpg?format=webp&resize=400x300&vertical=center"
    alt="Profile"
    className="w-full h-auto object-cover block"
  />
</div>


        </div>
      </div>
    </section>
  )
}
