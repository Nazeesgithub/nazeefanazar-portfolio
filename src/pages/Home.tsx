
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-background relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm <br />
                <span className="text-foreground">Nazeefa Nazar</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Creative developer passionate about building meaningful digital experiences.
              </motion.p>
              
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link 
                  to="/contact" 
                  className="bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link 
                  to="/projects" 
                  className="border border-foreground px-6 py-3 rounded-md font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="w-[400px] h-[400px] bg-secondary rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for profile image or geometric patterns */}
                  <div className="w-[350px] h-[350px] rounded-full bg-accent border border-border animate-rotate-slow"></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <a 
              href="#about" 
              className="flex flex-col items-center text-foreground/70 hover:text-foreground"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">About Me</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with a strong focus on creating elegant, user-friendly solutions. 
                With a background in design and technology, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                My goal is to build applications that are not only functional but also aesthetically pleasing and intuitive to use.
              </p>
              <Link 
                to="/about" 
                className="inline-block mt-8 font-medium text-foreground hover:underline"
              >
                Learn more about me →
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
                  <h3 className="font-bold text-xl mb-2">Education</h3>
                  <p className="text-muted-foreground">Computer Science, University of Technology</p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
                  <h3 className="font-bold text-xl mb-2">Experience</h3>
                  <p className="text-muted-foreground">3+ years of professional development</p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
                  <h3 className="font-bold text-xl mb-2">Projects</h3>
                  <p className="text-muted-foreground">20+ completed projects</p>
                </div>
                
                <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
                  <h3 className="font-bold text-xl mb-2">Clients</h3>
                  <p className="text-muted-foreground">Worked with diverse industries</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Skills Preview */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">My Skills</h2>
          </AnimatedSection>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML/CSS', 'UI/UX Design', 'Responsive Design', 'Git'].map((skill, index) => (
              <AnimatedSection key={skill} delay={index * 0.1} className="flex">
                <div className="p-6 bg-secondary rounded-lg w-full text-center hover:shadow-md transition-shadow border border-border">
                  <h3 className="text-lg font-medium">{skill}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link 
              to="/skills" 
              className="inline-block font-medium text-foreground hover:underline"
            >
              View all my skills →
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">Featured Projects</h2>
          </AnimatedSection>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-background rounded-lg overflow-hidden border border-border group">
                  <div className="h-60 bg-muted"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="text-muted-foreground mb-4">A sample project description that showcases skills and technologies used.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-secondary px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">Tailwind</span>
                    </div>
                    <Link 
                      to={`/projects/${item}`} 
                      className="inline-block font-medium text-foreground hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block font-medium text-foreground hover:underline"
            >
              See all projects →
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Preview */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">Get In Touch</h2>
          </AnimatedSection>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:nazeeyamaani@gmail.com" className="text-muted-foreground hover:text-foreground">nazeeyamaani@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Location:</span>
                  <span className="text-muted-foreground">New York, USA</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-secondary rounded-lg shadow-sm border border-border">
                <h3 className="font-bold text-xl mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button className="bg-foreground text-background px-6 py-2 rounded-md font-medium hover:bg-foreground/90 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
