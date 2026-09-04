import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 z-50"
          >
            {/* The actual logo image should be placed in public/logo.png or public/logo.svg */}
            <img 
              src="/assets/brand/ram-logo.jpeg" 
              alt="RAM Services Enterprises" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if logo isn't uploaded yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
              }}
            />
            <div className="hidden flex-col">
              <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#0B192C]' : 'text-[#0B192C] md:text-white'}`}>
                RAM SERVICES
              </span>
              <span className={`text-xs md:text-sm tracking-widest font-medium ${isScrolled ? 'text-[#00B4D8]' : 'text-[#00B4D8] md:text-blue-200'}`}>
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-[#00B4D8] ${
                      isScrolled ? 'text-gray-700' : 'text-gray-800 md:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/contact"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium text-sm transition-all ${
                isScrolled 
                  ? 'bg-[#1A365D] text-white hover:bg-[#0B192C]' 
                  : 'bg-white text-[#1A365D] hover:bg-gray-100'
              }`}
            >
              Request a Quote
              <ChevronRight size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-gray-900'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-[#0B192C]'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-4">
                <Link 
                  to={link.path}
                  className="text-lg font-medium text-gray-900 hover:text-[#00B4D8]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact"
            className="flex items-center justify-center gap-2 w-full bg-[#1A365D] text-white px-5 py-3.5 rounded-sm font-medium mt-4"
          >
            Request a Quote
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
