export default function SkillsSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "Github", "VS code"] },
    { category: "Soft Skills", items: ["Leadership", "Communication", "Problem Solving", "Mentoring"] },
  ]

  return (
    <section id="skills" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-light text-white mb-6 underline">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 font-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
