
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import { Mail, Phone } from "lucide-react";
import * as THREE from "three";

// Card component using Three.js
const DebitCard = () => {
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
        {/* Front of card - main body with gradient material */}
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
        
        {/* Card logo or brand (top left) */}
        <mesh position={[-3.2, 2.1, 0.15]}>
          <circleGeometry args={[0.7, 32]} />
          <meshStandardMaterial color="gold" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* EMV chip */}
        <mesh castShadow position={[-2.5, 1, 0.15]}>
          <boxGeometry args={[1.8, 1.4, 0.05]} />
          <meshStandardMaterial color="gold" metalness={0.9} roughness={0.3} />
        </mesh>
        
        {/* Decorative lines */}
        <mesh position={[0, -0.5, 0.15]}>
          <planeGeometry args={[7, 0.2]} />
          <meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
        </mesh>
        
        {/* Magnetic stripe */}
        <mesh position={[0, -2, 0.15]}>
          <planeGeometry args={[7, 0.8]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </group>
    </Float>
  );
};

// Main contact card component
const ContactCard3D = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Start as invisible until we check the route
  
  useEffect(() => {
    // Set visibility based on route
    const checkRoute = () => {
      const path = window.location.pathname;
      setIsVisible(path !== '/contact'); // Hide on contact page
    };
    
    checkRoute();
    window.addEventListener('popstate', checkRoute);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Animation based on scroll position
  const { scrollYProgress } = useScroll();
  
  // Transform values for animation
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 100]
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

  if (!isVisible) return null;

  return (
    <motion.div 
      ref={ref}
      className="fixed bottom-8 right-8 w-[320px] h-[200px] pointer-events-auto cursor-pointer z-50 shadow-2xl"
      style={{ 
        y: isMobile ? 0 : y,
        rotateZ: rotate,
        rotateY: rotateY,
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-0 z-10 rounded-xl overflow-hidden shadow-2xl">
          <Canvas 
            shadows 
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ 
              powerPreference: "high-performance",
              antialias: true,
              stencil: false,
              depth: true
            }}
          >
            <color attach="background" args={["#050505"]} />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <DebitCard />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={10} blur={2} far={3} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              minPolarAngle={Math.PI / 2 - 0.3} 
              maxPolarAngle={Math.PI / 2 + 0.3}
            />
          </Canvas>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white pointer-events-none">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center p-4">
              <h3 className="font-bold text-xl mb-1 drop-shadow-lg">Nazeefa Nazar</h3>
              <p className="text-sm font-medium mb-3 drop-shadow-md opacity-90">Full Stack Developer</p>
              <div className="flex items-center justify-center text-sm space-x-1 mt-2">
                <Mail size={14} className="mr-1" />
                <span className="text-xs font-medium">nazeeyamaani@gmail.com</span>
              </div>
              <div className="flex items-center justify-center text-sm space-x-1 mt-1">
                <Phone size={14} className="mr-1" />
                <span className="text-xs font-medium">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard3D;
