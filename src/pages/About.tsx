
import { motion } from 'framer-motion';
import { Download, ChevronRight, Briefcase, Award, Book } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  // Timeline data
  const timeline = [
    {
      year: "2021 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading the frontend development team, implementing modern web technologies, and optimizing application performance."
    },
    {
      year: "2018 - 2021",
      role: "Web Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive websites and applications for various clients, focusing on accessibility and user experience."
    },
    {
      year: "2015 - 2018",
      role: "UI/UX Designer",
      company: "Creative Studios",
      description: "Created user interfaces and experiences for web and mobile applications, collaborating closely with development teams."
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Get to know me better - my background, experience, and what drives me to create exceptional digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="w-full h-full bg-gradient-to-b from-foreground to-transparent"></div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-secondary rounded-lg"></div>
                <div className="absolute inset-0 transform translate-x-4 translate-y-4 border-2 border-foreground rounded-lg"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold mb-6">
                I'm Nazeefa Nazar, a passionate creative developer
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 6 years of experience in web development and design, I specialize in creating 
                engaging and user-friendly digital experiences that blend aesthetics with functionality.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver solutions 
                that not only meet but exceed client expectations. I'm constantly exploring new technologies 
                and methodologies to stay at the forefront of digital innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Nazeefa Nazar</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">nazeeyamaani@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">New York, USA</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
              
              <button className="bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors flex items-center">
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">My Journey</h2>
          </AnimatedSection>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-border -translate-x-1/2 hidden md:block"></div>

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <AnimatedSection 
                key={index} 
                className="mb-12 relative" 
                delay={index * 0.1}
              >
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                      <span className="inline-block px-3 py-1 bg-accent text-sm rounded mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                      <p className="text-muted-foreground mb-3">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground rounded-full -translate-x-1/2 mt-6 hidden md:block"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">Education & Certifications</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold flex items-center">
                  <Book size={24} className="mr-2" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground">2012 - 2016</span>
                    <h4 className="text-xl font-bold mt-1 mb-1">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University of Technology</p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground">2016 - 2018</span>
                    <h4 className="text-xl font-bold mt-1 mb-1">Master's in Interactive Media Design</h4>
                    <p className="text-muted-foreground">Design Institute</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold flex items-center">
                  <Award size={24} className="mr-2" />
                  Certifications
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground">2022</span>
                    <h4 className="text-xl font-bold mt-1 mb-1">Advanced React Development</h4>
                    <p className="text-muted-foreground">Frontend Masters</p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground">2021</span>
                    <h4 className="text-xl font-bold mt-1 mb-1">UI/UX Design Specialization</h4>
                    <p className="text-muted-foreground">Design Academy</p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground">2020</span>
                    <h4 className="text-xl font-bold mt-1 mb-1">Fullstack JavaScript Development</h4>
                    <p className="text-muted-foreground">Tech Bootcamp</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">What I Offer</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Web Development",
                description: "Building responsive and performant websites tailored to your specific needs."
              },
              {
                title: "UI/UX Design",
                description: "Creating intuitive and engaging user interfaces that enhance user experience."
              },
              {
                title: "Custom Solutions",
                description: "Developing bespoke applications and solutions to solve unique challenges."
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-background rounded-lg border border-border h-full">
                  <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
