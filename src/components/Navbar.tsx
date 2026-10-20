
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Menu, Phone, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Doctors", url: "/doctors" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-hospital-primary">
              MediCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="animated-link text-gray-700 hover:text-hospital-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className="flex items-center text-hospital-primary gap-1">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Emergency: 123-456-7890</span>
              </a>
              <Link to="/book-appointment">
                <Button className="bg-hospital-primary hover:bg-hospital-dark">
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-gray-700 hover:text-hospital-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+1234567890" className="flex items-center text-hospital-primary gap-1 py-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Emergency: 123-456-7890</span>
            </a>
            <Link to="/book-appointment" onClick={toggleMenu}>
              <Button className="bg-hospital-primary hover:bg-hospital-dark w-full">
                <CalendarPlus className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
