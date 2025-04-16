
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Code, Layout, Paintbrush, Smartphone, Database, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Creating responsive, dynamic websites using modern frameworks and technologies."
    },
    {
      icon: <Layout />,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces focused on enhancing user experience."
    },
    {
      icon: <Smartphone />,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Database />,
      title: "Database Design",
      description: "Structured database solutions optimized for performance."
    },
    {
      icon: <BarChart />,
      title: "Analytics Implementation",
      description: "Setting up data tracking and analytics dashboards."
    },
    {
      icon: <Paintbrush />,
      title: "Brand Design",
      description: "Developing visual identity systems and brand guidelines."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional services I offer to help businesses and individuals achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">What I Offer</h2>
          </AnimatedSection>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-secondary rounded-lg border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-foreground text-background rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">My Process</h2>
          </AnimatedSection>
          
          <div className="mt-16 relative">
            <div className="absolute top-0 left-12 h-full w-1 bg-border hidden md:block"></div>
            
            {["Discovery", "Planning", "Design", "Development", "Testing", "Deployment"].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="mb-12 relative">
                <div className="md:flex items-start">
                  <div className="md:w-24 text-center mb-4 md:mb-0">
                    <div className="w-24 h-24 bg-foreground text-background rounded-full flex items-center justify-center text-2xl font-bold z-10 relative">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:flex-1 md:pl-12">
                    <h3 className="text-2xl font-bold mb-4">{step}</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                      Vivamus hendrerit arcu sed erat molestie vehicula.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
