
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Mail } from "lucide-react";

// Card component using Three.js
const Card3D = () => {
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <mesh castShadow receiveShadow scale={[4.5, 2.8, 0.05]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
};

// Main contact card component
const ContactCard3D = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation based on scroll position
  const { scrollYProgress } = useScroll();
  
  // Transform values for animation
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [100, window.innerHeight - 400]
  );
  
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 8]
  );
  
  // Don't use scroll animation on mobile
  const mobileY = 'calc(100vh - 120px)';

  return (
    <motion.div 
      ref={ref}
      className="fixed right-8 z-40 w-[300px] h-[180px] pointer-events-auto"
      style={{ 
        y: isMobile ? mobileY : y,
        rotate,
        x: isMobile ? '0' : '0',
        bottom: isMobile ? '0' : 'auto',
        right: isMobile ? '0' : '2rem',
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-0 z-10">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} castShadow />
            <Card3D />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={5} blur={3} />
          </Canvas>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-1">Nazeefa Nazar</h3>
            <div className="flex items-center justify-center text-sm text-gray-700">
              <Mail size={14} className="mr-1" />
              <span>nazeeyamaani@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard3D;
