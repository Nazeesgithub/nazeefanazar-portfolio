
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Text3D, useTexture } from "@react-three/drei";
import { Mail, Phone } from "lucide-react";
import * as THREE from "three";

// Card component using Three.js
const Card3D = () => {
  // Load texture for the card
  const texture = useTexture({
    map: "https://i.imgur.com/ny0c9mw.jpg", // Fallback to a gradient if image fails
  });

  // Card dimensions (credit card proportions)
  const width = 8.56;
  const height = 5.4;

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.4} 
      floatIntensity={0.4}
    >
      <group>
        {/* Front of card */}
        <mesh castShadow receiveShadow scale={[1, 1, 0.05]} position={[0, 0, 0]}>
          <boxGeometry args={[width, height, 0.2]} />
          <meshPhysicalMaterial 
            color="#8B5CF6"
            metalness={0.7}
            roughness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={1.5}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100, 800]}
          />
        </mesh>
        
        {/* Chip */}
        <mesh castShadow position={[-2.5, 1.5, 0.15]}>
          <boxGeometry args={[1.2, 1.2, 0.05]} />
          <meshStandardMaterial color="gold" metalness={0.8} roughness={0.3} />
        </mesh>
        
        {/* Card details */}
        <group position={[0, -1.3, 0.15]}>
          <mesh>
            <planeGeometry args={[7, 0.7]} />
            <meshBasicMaterial color="#ffffff" opacity={0.9} transparent />
          </mesh>
        </group>
      </group>
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
    [100, window.innerHeight - 300]
  );
  
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 5, 10]
  );
  
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 15, 5]
  );

  // Don't use scroll animation on mobile
  const mobileY = 'calc(100vh - 120px)';

  return (
    <motion.div 
      ref={ref}
      className="fixed right-8 z-40 w-[320px] h-[200px] pointer-events-auto"
      style={{ 
        y: isMobile ? mobileY : y,
        rotateZ: rotate,
        rotateY: rotateY,
        x: isMobile ? '0' : '0',
        bottom: isMobile ? '0' : 'auto',
        right: isMobile ? '0' : '2rem',
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-0 z-10 rounded-xl overflow-hidden">
          <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <Card3D />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={10} blur={2} far={3} />
          </Canvas>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="glass-card w-full h-full flex flex-col items-center justify-center">
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-1 text-white drop-shadow-md">Nazeefa Nazar</h3>
              <p className="text-sm text-white/90 mb-2 font-light">Full Stack Developer</p>
              <div className="flex items-center justify-center text-sm text-white space-x-1 mt-2">
                <Mail size={12} className="mr-1" />
                <span className="text-xs">nazeeyamaani@gmail.com</span>
              </div>
              <div className="flex items-center justify-center text-sm text-white space-x-1 mt-1">
                <Phone size={12} className="mr-1" />
                <span className="text-xs">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard3D;
