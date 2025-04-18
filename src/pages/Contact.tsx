
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "nazeeyamaani@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Dubai, UAE" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/nazeefa" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "github.com/nazeefa" },
  ];

  return (
    <div className="section-container">
      <motion.h1 
        className="section-title mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Contact Information */}
        <div>
          <AnimatedSection className="glass-card p-8" delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8" delay={0.4}>
            <div className="rounded-lg overflow-hidden h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011809662!2d54.94726979043901!3d25.07638122405802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1681875478292!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>

        {/* Right side - Contact Form */}
        <AnimatedSection delay={0.3}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
