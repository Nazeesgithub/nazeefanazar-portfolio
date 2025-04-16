
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactCard3D from './ContactCard3D';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <div className="fixed bottom-8 right-8 z-50">
        <ContactCard3D />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
