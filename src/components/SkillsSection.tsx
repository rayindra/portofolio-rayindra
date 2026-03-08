const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "Git", "CI/CD", "Linux"] },
];

const SkillsSection = () => {
  return (
    <section id="keahlian" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-2">
          <span className="text-primary mr-2">02.</span>
          Keahlian
        </h2>
        <div className="h-px bg-border mt-2 mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="glass-card p-6">
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
