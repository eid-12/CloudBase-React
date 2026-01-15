import { Cloud } from 'lucide-react';

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">CloudBase</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Start Now
          </button>
        </div>
      </div>
    </header>
  );
}