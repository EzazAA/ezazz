import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Librarianly",
      description:
        "A frontend JS-based library management system for the administration, Add, delete books and view them",
      tech: ["HTML", "CSS", "Javascript"],
      image: "https://i.ibb.co/nNK2dJxy/lb.png",
      link: "https://your-librarianly-website.com",
      github: "https://github.com/yourusername/librarianly",
    },
    {
      title: "Ghostwipers website",
      description:
        "A website for a Clothware company selling high quality clothes, it supports ordering and contacting through Email.js",
      tech: ["Next.js", "Email.js", "TailwindCSS"],
      image: "https://i.ibb.co/WWqrx1f9/gw.png",
      link: "https://ghostwipers.com",
      github: "https://github.com/yourusername/ghostwipers",
    },
    {
      title: "Agro-Smart",
      description:
        "An AI-powered agricultural assistant that provides farmers with real-time insights and recommendations to optimize crop yield and resource management.",
      tech: ["Python", "NGROK", "Expo.JS", "HTML-CSS-JS"],
      image: "https://i.ibb.co/Q3pf4Jtm/as.png",
      link: "https://agro-smart-app.com",
      github: "https://github.com/yourusername/agro-smart",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-light text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs border border-gray-600 text-gray-400 rounded-sm hover:border-gray-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links - Better Formatted */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="px-4 py-3 border border-white text-white text-center text-sm font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                        <ExternalLink size={16} className="transition-transform group-hover/btn:scale-110" />
                        <span>View Live</span>
                      </div>
                    </a>
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative overflow-hidden"
                      >
                        <div className="px-4 py-3 border border-gray-600 text-gray-400 text-center text-sm font-light tracking-wide hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center gap-2 min-w-[100px]">
                          <Github size={16} className="transition-transform group-hover/btn:scale-110" />
                          <span>Code</span>
                        </div>
                      </a>
                    )}
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