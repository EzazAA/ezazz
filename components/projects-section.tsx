export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "https://cdn.dribbble.com/userupload/17602905/file/original-cd3c8dc88998167865c605aa6d85c0ae.jpg?format=webp&resize=400x300&vertical=center",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://cdn.dribbble.com/userupload/17602905/file/original-cd3c8dc88998167865c605aa6d85c0ae.jpg?format=webp&resize=400x300&vertical=center",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content creation platform that helps businesses generate marketing copy, blog posts, and social media content.",
      tech: ["Python", "OpenAI API", "FastAPI", "React"],
      image: "https://cdn.dribbble.com/userupload/17602905/file/original-cd3c8dc88998167865c605aa6d85c0ae.jpg?format=webp&resize=400x300&vertical=center",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs border border-gray-600 text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
