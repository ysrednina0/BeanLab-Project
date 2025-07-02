import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import beanlabLogo from "../asset/logo-BeanLab-white.svg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingToggled, setIsBookingToggled] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Keranjang', href: '/cart' }
  ];

  const Booking = [
    { name: 'Pilih Meja', href: '/reserve' },
    { name: 'Sesi Custom Kopi', href: '/custom-session' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => Booking.some(service => isActive(service.href));

  const handleBookingToggle = () => {
    setIsBookingToggled(!isBookingToggled);
  };

  const handleServiceLinkClick = () => {
    setIsBookingToggled(false);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
          <Link to="/" className="flex items-center text-white text-xl sm:text-2xl font-bold">
              <span className="text-accent-300">
                <img
                  src={beanlabLogo}
                  alt="Beanlab Logo"
                  width={24}
                  height={24}
                />
              </span>
              BeanLab.
            </Link>
            
            <div className="hidden md:block ml-6 lg:ml-10">
              <div className="flex space-x-2 lg:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-primary-700'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.name === 'Keranjang' ? (
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden lg:inline">{item.name}</span>
                        {getTotalItems() > 0 && (
                          <span className="bg-accent-400 text-primary-800 rounded-full px-2 py-1 text-xs min-w-[20px] text-center font-semibold">
                            {getTotalItems()}
                          </span>
                        )}
                      </div>
                    ) : (
                      item.name
                    )}
                  </Link>
                ))}
                
                <div className="relative">
                  <button 
                    onClick={handleBookingToggle}
                    onMouseEnter={() => window.innerWidth >= 768 && setIsBookingToggled(true)}
                    onMouseLeave={() => window.innerWidth >= 768 && setIsBookingToggled(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-all duration-200 ${
                      isServiceActive() || isBookingToggled
                        ? 'text-white bg-primary-700 shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Booking
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isBookingToggled ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div 
                    className={`absolute mt-1 bg-white text-gray-800 rounded-lg shadow-xl z-50 min-w-[200px] transition-all duration-200 ${
                      isBookingToggled ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => window.innerWidth >= 768 && setIsBookingToggled(true)}
                    onMouseLeave={() => window.innerWidth >= 768 && setIsBookingToggled(false)}
                  >
                    {Booking.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={handleServiceLinkClick}
                        className={`block px-4 py-3 hover:bg-accent-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          isActive(service.href) ? 'bg-accent-200 text-primary-800 font-semibold' : ''
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link
              to="/reserve"
              className="bg-primary-700 hover:bg-primary-800 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-colors text-sm lg:text-base"
            >
              BOOK A SESSION
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-white bg-primary-700'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name === 'Keranjang' ? (
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  {item.name}
                  {getTotalItems() > 0 && (
                    <span className="bg-accent-400 text-primary-800 rounded-full px-2 py-1 text-xs font-semibold">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              ) : (
                item.name
              )}
            </Link>
          ))}
          
          {Booking.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isActive(service.href)
                  ? 'text-white bg-primary-700'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {service.name}
            </Link>
          ))}
          
          <Link
            to="/custom-session"
            className="block w-full mt-4 bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BOOK A SESSION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;