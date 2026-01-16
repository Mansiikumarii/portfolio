const skills = {
  "Programming Languages": ["C++", "Python", "SQL"],
  "Web Technologies": ["HTML", "CSS", "JavaScript"],
  "Databases": ["SQL", "MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code"],
  "Core Concepts": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Problem Solving",
    "Time & Space Complexity",
    "Communication Skills",
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Skills
            </span>
          </div>

          <h2 className="section-heading mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subheading mb-12">
            A comprehensive toolkit for building efficient solutions and solving complex problems.
          </p>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
