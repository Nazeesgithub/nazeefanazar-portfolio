
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="font-bold text-xl">
              NAZEEFA<span className="font-light">NAZAR</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Creating innovative solutions with a focus on elegant design and superior user experience.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:nazeeyamaani@gmail.com" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nazeefa Nazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
