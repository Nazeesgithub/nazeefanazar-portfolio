
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Skills = () => {
  // Skill categories
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Angular", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Python", level: 65 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "UI/UX Design", level: 85 },
        { name: "Git", level: 80 },
        { name: "Docker", level: 60 },
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-32 relative overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills and competencies that I've developed throughout my professional journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      {skillCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-24 ${categoryIndex % 2 === 1 ? 'bg-secondary' : ''}`}>
          <div className="section-container">
            <AnimatedSection>
              <h2 className="section-title">{category.title}</h2>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {category.skills.map((skill, index) => (
                <AnimatedSection key={skill.name} delay={index * 0.05}>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-foreground"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Professional Skills */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">Professional Skills</h2>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "Problem Solving", 
              "Team Collaboration", 
              "Project Management", 
              "Critical Thinking",
              "Adaptability",
              "Communication",
              "Time Management",
              "Attention to Detail"
            ].map((skill, index) => (
              <AnimatedSection key={skill} delay={index * 0.05}>
                <div className="p-6 bg-background rounded-lg border border-border text-center h-full flex items-center justify-center hover:shadow-md transition-shadow">
                  <h3 className="font-medium">{skill}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
