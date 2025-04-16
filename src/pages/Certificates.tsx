
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Certificates = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Showcasing my professional certifications and educational achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">My Certifications</h2>
          </AnimatedSection>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="p-6 bg-secondary rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-muted mb-4 rounded"></div>
                  <h3 className="text-xl font-bold mb-2">Certificate {item}</h3>
                  <p className="text-muted-foreground mb-4">Description of the certification and skills acquired.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Issued: 2023</span>
                    <button className="text-sm underline">View Certificate</button>
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

export default Certificates;
